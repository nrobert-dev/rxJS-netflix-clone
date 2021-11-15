import React, {useEffect, useState, useRef} from 'react';
import Header from "../components/Header";
import {
    Button, CloseLoadButton, FullPageOverlay,
    MainContainer,
    MainTitle,
    MainVideo,
    MovieLine,
    MovieLineTitle,
    MoviesAreaWrapper
} from "../styles/Main.styles";
import {useNavigate} from "react-router-dom";
import {BiInfoCircle, BsPlayFill, IoClose} from "react-icons/all";
import MovieCard from "../components/MovieCard";
import {fromEvent} from 'rxjs';
import ShimmerCard from "../components/ShimmerCard";
import {browse$, onCancel$, playCountDown$} from "../data/observables";
import {useStore} from "../data/hooks";

const BrowsePage = () => {
    const [store] = useStore();
    const [data, setData] = useState(null);
    const [overlayTimer, setOverlayTimer] = useState(4);
    const mainVideo = useRef(null);
    const navigate = useNavigate();

    const isInitialized = store && !store?.isLoading;

    useEffect(() => {
        const sub = playCountDown$.subscribe((timer) => {
            setOverlayTimer(timer);

            if(timer === 0){
                console.log("Loading movie");
                navigate("/watch");
            }
        })

        return () => sub.unsubscribe();
    },[navigate]);

    useEffect(() => {
        let timeGatedSub = null;
        const sub = browse$.subscribe(d => {
            setData(d);
            setTimeout(() => mainVideo.current.play(), 500);

            const timeUpdate$ = fromEvent(mainVideo.current, 'timeupdate');
            timeGatedSub = timeUpdate$.subscribe((e) => {
                if(e.target.currentTime > 84){
                    mainVideo.current.poster = d.main.image;
                    mainVideo.current.src = '';
                }
            })
        })
        return () => {
            sub.unsubscribe();
            timeGatedSub?.unsubscribe();
        }
    },[]);

    useEffect(() => {
        mainVideo.current && mainVideo.current.load();
    },[data]);

    return(
       <div>
            <FullPageOverlay timer={overlayTimer}>
                <CloseLoadButton onClick={() => onCancel$.next()}>
                    <IoClose/>
                </CloseLoadButton>
            </FullPageOverlay>
            <Header/>
            { data && <MainVideo style={{display : data.hasOwnProperty('main') && isInitialized ? 'block' : 'none'}} muted loop ref={mainVideo} poster={data?.main?.image} controls={false}>
               <source src={data?.main?.url}/>/>
            </MainVideo>
            }
            {isInitialized && data ? <>
                {data.main &&
                    <MainContainer>
                        <div>
                            <MainTitle>
                                {data?.main.title}
                            </MainTitle>
                        </div>
                        <div>
                            <Button onClick={() => playCountDown$.next()} style={{width: '110px', background: 'white', color: 'black'}}><BsPlayFill
                                size={'1.4em'}/> Play</Button>
                            <Button
                                style={{width: '170px', background: 'gray', color: 'white', opacity: '0.9'}}><BiInfoCircle
                                size={'1.4em'}/> More Info</Button>
                        </div>
                    </MainContainer>
                }
                <MoviesAreaWrapper>
                    {data.lists.map(list =>
                        <>
                            <MovieLineTitle>{list.title}</MovieLineTitle>
                            <MovieLine>
                                {list.movies.map(movie => <MovieCard movie={movie}/>)}
                            </MovieLine>
                        </>)
                    }
                </MoviesAreaWrapper>
            </> : <MovieLine style={{marginTop : '50px'}}>
                {[...Array(6).keys()].map(() => <ShimmerCard/>)}
            </MovieLine>
            }
       </div>
    )
}

export default BrowsePage;