import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width : 100%;
    height : 70px;
    padding : 10px 42px;
    box-sizing: border-box;
    display : flex;
    align-items: center;
    color : white;
    justify-content: space-between;
    box-shadow: inset 0px 50px 22px -11px rgba(0,0,0,0.29);
`;

export const HeaderImage = styled.img`
    width : 100px;
    margin-right : 35px;
`;

export const HeaderButton = styled.div`
  margin: 0px 12px;
  font-size: 14px;
  font-weight: ${props => props.isActive ? 800 : 600};
  color: white;
  cursor: pointer;

  &:hover {
    color: #dedede;
  }
`;

export const SideWrapper = styled.div`
    display : flex;
    align-items: center;
`;

export const MainVideo = styled.video`
    width : 100%;
    position : absolute;
    top : 0;
    z-index: -1;
    object-fit: cover;
`;

export const UserIcon = styled.img`
    cursor : pointer;
    transition: transform 0.1s;
    
    &:hover{
      transform : scale(1.1);
    }
`;

export const MainContainer = styled.div`
    width : 100%;
    height : 300px;
    padding-left : 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const BrowseType = styled.div`
    height : 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MainTitle = styled.div`
    font-size : 70px;
    opacity: 0.94;
    color : white;
    font-weight: 700;
    display: flex;
    margin-bottom: 25px;
`;

export const Button = styled.div`
  border-radius: 3px;
  margin: 0px 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 44px;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    background: #dbdbdb !important;
  }
`;

export const MoviesAreaWrapper = styled.div`
    margin : 10px 0px;
    box-sizing: border-box;
    width : 100%;
    padding : 20px 32px;
`;

export const MovieLine = styled.div`
    display : flex;
    flex-direction: row;
    margin-bottom : 35px;
`;

export const MovieLineTitle = styled.div`
    font-size : 28px;
    color : white;
    font-weight: 600;
`;

export const SelectBox = styled.select`
  margin-left : 50px;
  display: block;
  font-size: 13px;
  font-family: sans-serif;
  font-weight: 700;
  color: #efefef;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 120px;
  max-width: 100%;
  box-sizing: border-box;
  border: 1px solid white;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
  border-radius: 1px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  height: 30px;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
  linear-gradient(to bottom, #1d1d1d 0%, #2d2d2d 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #aaa;
    outline: none;
  }

  option {
    font-weight: normal;
  }
`;

export const MovieCardDetails = styled.div`
  width: 260px;
  height: ${props => props.expanded ? '120px' : '1px'};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #1d1d1d;
  box-sizing: border-box;
  padding: 10px 20px;
  position: absolute;
  transform: ${props => props.expanded ? 'scale(1.4)' : 'scale(1)'};
  z-index: 101;
  opacity: ${props => props.expanded ? 1 : 0};

  transition: ease-in opacity 0.1s, ease-in height 0.1s, ease-in transform 0.1s;
  transition-delay: 100ms;
`;

export const IconButton = styled.div`
  border: 1px solid white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 4px 5px;
  color: white;
  background: #353535;
  cursor: pointer;

  &:hover {
    background: #919191;;
  }

  &:active {
    background: #292929;
  }
`;

export const FullPageOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: ${props => props.timer<4 ? 302 : -2};
    visibility: ${props => props.timer<4 ? 'visible' : 'hidden'};
    background: ${props => props.timer<4 ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0)'};
    transition: linear background 1.3s;
`;

export const CloseLoadButton = styled.div`
  position: fixed;
  right: 50px;
  top: 30px;
  font-size: 34px;
  color: white;
  cursor : pointer;
  
  &:hover {
    color: #c3c3c3;
  }
`;
export const MovieImage = styled.img`
    border-radius: 6px;
    width : 260px;
    height : 180px;
    object-fit: cover;
    transition : ease-in transform 0.2s;
    transform : ${props => props.expanded ? 'scale(1.4)' : 'scale(1)'};
    box-shadow: ${props => props.expanded ? 'rgba(0, 0, 0, 0.95) 0px 5px 15px' : null};
    z-index : ${props => props.expanded ? 99 : 1};
    position : relative;
    cursor : pointer;
`;

export const MovieName = styled.h1`
  position: absolute;
  left: 20px;
  top: 34px;
  margin: 0;
  color: white;
  font-size: 22px;
  transform : ${props => props.expanded ? 'scale(1.4)' : 'scale(1)'};
  transition : ease-in transform 0.2s;
  z-index : ${props => props.expanded ? 101 : 98};
  width: 80px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #3b3b3b;
  font-family : ${props => props.font};
`;
export const CardWrapper = styled.div`
    margin : 10px 12px;
    position : relative;
`;