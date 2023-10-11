import React, {useState} from 'react';
import {
    BrowseType,
    HeaderButton,
    HeaderImage,
    HeaderWrapper,
    SelectBox,
    SideWrapper, UserIcon
} from "../styles/Main.styles";
import userImage from "../assets/userIcon.jpg"
import {GoBell} from "react-icons/go";
import Search from "./Search";
import {onSelect$, onType$} from "../data/observables";
import {useNavigate} from "react-router-dom";


const Header = () => {
    const [currentType, setCurrentType] = useState('Movies');
    const [select, setSelect] = useState('');
    let navigate = useNavigate();

    const onChangeHandler = (type) => {
        setCurrentType(type);
        onType$.next(type);
    };

    const onSelectChangeHandler = (e) => {
        setSelect(e.target.value);
        onSelect$.next(e);
    }

    return(
        <>
            <HeaderWrapper>
                <SideWrapper>
                    <HeaderImage alt="NetRXis" src={'https://fontmeme.com/permalink/211110/e87c8a1e2bbb91c5a9ee56f8152b5125.png'}/>
                    <HeaderButton onClick={() => onChangeHandler('Movies')} isActive={currentType === 'Movies'}>Movies</HeaderButton>
                    <HeaderButton onClick={() => onChangeHandler('TVShows')} isActive={currentType === 'TV Shows'}>TV Shows</HeaderButton>
                    <HeaderButton onClick={() => onChangeHandler('New-Popular')} isActive={currentType === 'New&Popular'}>New&Popular</HeaderButton>
                </SideWrapper>
                <SideWrapper>
                    <Search/>
                    <HeaderButton>Kids</HeaderButton>
                    <div style={{margin : '0px 22px', position : 'relative', top : '2px'}}>
                        <GoBell size={'1.3em'}/>
                    </div>
                    <UserIcon onClick={() => navigate("/user")} alt="User Icon" style={{width : '30px', borderRadius : '6px'}} src={userImage}/>
                </SideWrapper>
            </HeaderWrapper>
            <div style={{marginLeft : '50px'}}>
                <BrowseType style={{height : '100px', marginBottom : '80px'}}>
                    <h1 style={{color : 'white'}}>Movies</h1>
                    <SelectBox value={select} onChange={onSelectChangeHandler}>
                        <option value={""}>Genres</option>
                        <option value={"comedy"}>Comedy</option>
                        <option value={"adventure"}>Adventure</option>
                        <option value={"romance"}>Romance</option>
                        <option value={"scifi"}>SciFi</option>
                        <option value={"horror"}>Horror</option>
                        <option value={"drama"}>Drama</option>
                    </SelectBox>
                </BrowseType>
            </div>
        </>
    );
}

export default Header;