import styled from 'styled-components';

export const BackgroundImage = styled.img`
    width : 100%;
    height : 100vh;
    position : fixed;
    z-index : -1;
    opacity : 0.7;
    filter : blur(4px);
`;

export const LoginWrapper = styled.div`
    position : relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    width : 350px;
    height : 410px;
    padding : 40px 30px;
    margin : 100px auto;
    border-radius : 4px;
    background : rgba(28, 28, 28, 0.9);
`;

export const DetailText = styled.div`
    position : absolute;
    bottom : 12px;
    left : 0;
    width : 100%;
    display : flex;
    justify-content: space-between;
    font-size : 12px;
    padding : 0px 15px;
    box-sizing: border-box;
    color : gray;
`;

export const MainText = styled.div`
    font-size : 32px;
    color : white;
    margin-bottom : 22px;
`

export const Input = styled.input`
  width: 90%;
  height: 33px;
  background: #333333;
  padding: 6px 18px;
  color: #dedede;
  border-radius: 4px;
  font-size: 15px;
  margin : 10px 0px;
  border : 0;
  
  &:focus{
    outline: none;
  }
`;

export const SignInButton = styled.div`
  border-radius: 4px;
  background: red;
  height: 40px;
  width: 100%;
  margin: 18px auto;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 4px 0px;
  cursor: pointer;
  user-select: none;
  
  display : flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #ff4e4e;
  }

  &:active {
    background: #910000;
  }
`;

export const CancelButton = styled.div`
    float : right;
    color : gray;
    font-size : 11px;
    cursor : pointer;
`;