import React from 'react';
import styled from 'styled-components';
import {BsHandThumbsUp, BsHandThumbsDown} from "react-icons/bs";
import {useStore} from "../data/hooks";

const Wrapper = styled.div`
    width : 100%;
    padding : 20px 50px;
    color : white;
`;

const UserPage = () => {
    const [store] = useStore();

    return(
        <Wrapper>
            <h2>Hello, User! Your movie preference is :</h2>
            {store && store?.moviePreference && Object.keys(store.moviePreference).map(key =>
                <div>
                    {key}
                    {store.moviePreference[key] ? <BsHandThumbsUp/> : <BsHandThumbsDown/>}
                </div>)}
        </Wrapper>
    )
};

export default UserPage;