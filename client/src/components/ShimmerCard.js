import React from 'react';
import styled, {keyframes} from 'styled-components';

const placeholderShimmer = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
`;
const Wrapper = styled.div`
  width: 260px;
  height: 150px;
  margin: 10px 6px;

  background: #1c1c1c;
  background-image: linear-gradient(to right, #1c1c1c 0%, #2b2929 20%, #1c1c1c 40%, #1c1c1c 100%);
  background-repeat: no-repeat;
  background-size: 800px 204px;
  display: inline-block;
  position: relative;
  border-radius: 4px;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeholderShimmer};
  -webkit-animation-timing-function: linear;
`;


const ShimmerCard = () => {
    return(
        <Wrapper>

        </Wrapper>
    )
};

export default ShimmerCard;