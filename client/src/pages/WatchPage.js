import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    width : 100%;
`;
const MainVideo = styled.video`
    width : 100%;
    height : 99vh;
    object-fit: cover;
`
const WatchPage = () => {
    return(
        <Wrapper>
            <MainVideo controls src={"http://localhost:6767/video/watch"}/>
        </Wrapper>
    )
};

export default WatchPage;