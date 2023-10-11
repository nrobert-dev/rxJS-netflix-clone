import React, {useState, useEffect, useRef} from 'react';
import { Subject, merge, EMPTY } from 'rxjs';
import {ajax} from 'rxjs/ajax';
import loginBackground from "../assets/loginBackground.jpg";
import {useNavigate} from "react-router-dom";
import {
    map,
    switchMap,
    tap,
} from "rxjs/operators";
import {BackgroundImage, CancelButton, DetailText, Input, LoginWrapper, MainText, SignInButton} from "../styles/Login.styles";
import {BeatLoader} from "react-spinners";
import {LogoHeader} from "../styles/globalStyles";

const onLoginClick$ = new Subject();
const onCancelClick$ = new Subject();

const Login = () => {
  let navigate = useNavigate();

  const containerRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
      const request$ = merge(onLoginClick$, onCancelClick$).pipe(
          tap((cancellation) => setLoader(!cancellation)),
          switchMap((cancellation) => {
              if(cancellation) return EMPTY;
              return ajax({url : 'https://netflixcloneapi.onrender.com/login', responseType : 'text'})
          }),
          map(responseObject => responseObject?.response),
          tap(() => {
              setLoader(false);
              navigate('/browse');
          })
      );

      const sub = request$.subscribe((value) => console.log("Logged In",value));
      return () => {
          sub.unsubscribe();
      }
  },[navigate]);
  return(
      <div style={{overflow : 'auto'}}>
        <LogoHeader><img alt="logo" style={{width : '110px'}} src={'https://fontmeme.com/permalink/211110/e87c8a1e2bbb91c5a9ee56f8152b5125.png'}/></LogoHeader>
        <BackgroundImage style={{background : `url(${loginBackground})`}}>
        </BackgroundImage>

        <LoginWrapper ref={containerRef}>
          <MainText>Sign In</MainText>

          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or phone number" type={"text"}/>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type={"password"}/>

          <SignInButton onClick={() => email && password && onLoginClick$.next(false )}>
              {loader ? <BeatLoader css={`margin-bottom: 2px`} size={10} color={'white'}/> : 'Sign in'}
          </SignInButton>
            <CancelButton onClick={() => onCancelClick$.next(true)}>Cancel Request</CancelButton>
            <div style={{width : '100%', color : 'white', textAlign : 'center', fontSize : '12px'}}>
                {loader && <span>Please allow at least 20s-30s for the service to start. Thank you!</span>}
            </div>

            <DetailText>
                <span>NetRXIS © 2021</span>
                <span>
                    <a href={'http://localhost:3000/rxJS-netflix-clone/browse'}>Need Help?</a>
                </span>
            </DetailText>
        </LoginWrapper>
      </div>
  )
};

export default Login;