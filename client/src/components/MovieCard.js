import React, {useEffect, useRef, useState} from 'react';
import {fromEvent} from "rxjs";
import {combineLatest, debounceTime, filter, map, merge,} from "rxjs/operators";
import {CardWrapper, IconButton, MovieCardDetails, MovieImage, MovieName} from "../styles/Main.styles";
import {BsHandThumbsDown, BsHandThumbsUp, BsPlayFill, BsPlus} from "react-icons/all";
import {useStore} from "../data/hooks";
import {setPreferenceActionCreator} from "../data/actions";
import {playCountDown$} from "../data/observables";


const MovieCard = ({movie}) => {
  const [_, dispatch] = useStore();

  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  /* Card Hover Effect */
  useEffect(() => {
      const enter = fromEvent(cardRef.current, "mouseenter");
      const leave = fromEvent(cardRef.current, "mouseleave");
      const move = fromEvent(cardRef.current, "mousemove");
      const entered = enter.pipe(
          map((e) => true),
          merge(leave.pipe(map((e) => false)))
      );

      const moveSub = move
          .pipe(
              combineLatest(entered),
              debounceTime(500),
              filter(([e, b]) => b),
              map(([e, _]) => e)
          )
          .subscribe((e) => {
              setExpanded(true);
          });

      const leaveSub = leave.subscribe(() => setExpanded(false));

      return () => {
          leaveSub.unsubscribe();
          moveSub.unsubscribe();
      }
  },[setExpanded]);

  return(
      <CardWrapper expanded={expanded} ref={cardRef}>
          <MovieName font={movie.font} expanded={expanded}>
              {movie.name}
          </MovieName>
          <MovieImage expanded={expanded}
                      loading={"lazy"}
                      src={movie.image}/>
          <MovieCardDetails expanded={expanded}>
              <div>
                  <IconButton style={{background : 'white', color : 'black'}} onClick={() => {
                      playCountDown$.next();
                  }}>
                      <BsPlayFill/>
                  </IconButton>
                  <IconButton onClick={() => dispatch(setPreferenceActionCreator(movie.name, true))}>
                      <BsHandThumbsUp/>
                  </IconButton>
                  <IconButton onClick={() => dispatch(setPreferenceActionCreator(movie.name, false))}>
                      <BsHandThumbsDown/>
                  </IconButton>
                  <IconButton>
                      <BsPlus/>
                  </IconButton>
              </div>
              <div style={{color : 'white', fontSize : '13px', marginTop : '5px'}}>
                  <span style={{color : 'green'}}><strong>97% Match  </strong></span>
                  <span>1h45m </span>
                  <span> HD </span>
              </div>
              <div style={{color : 'white', fontSize : '11px', marginTop : '8px'}}>
                  <span> *Comedy *Irrevent *New</span>
              </div>
          </MovieCardDetails>

      </CardWrapper>
  )
};

export default MovieCard;