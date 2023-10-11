import React, {useState} from 'react';
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import {onSearch$} from "../data/observables";


const SearchBar = styled.input`
  width: ${props => props.isActive ? '100%' : '0%'};
  height: 21px;
  color: #eeeeee;
  opacity: ${props => props.isActive ? '1' : '0'};
  background: #292929;
  outline: none;
  border: 1px solid white;
  margin-right: 12px;
  padding: 6px 10px 6px 30px;
  transition: ease width 1s, ease opacity 0.6s;
  float : right;
  border-radius: 1px;
`;


const Search = () => {
    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const onSearchChange = (e) => {
        setSearchValue(e.target.value);
        onSearch$.next(e);
    }

    return(
        <div style={{width : isActive ? '220px' : '80px', position : 'relative'}}>
            <SearchBar value={searchValue} onChange={onSearchChange} placeholder="Titles, peoples, genres" isActive={isActive}/>
            <FaSearch onClick={() => setIsActive(!isActive)}
                      style={{
                          position:'absolute',
                          top : '7px',
                          marginRight : '24px',
                          cursor : 'pointer',
                          right : '12px',
                          transform: isActive ? 'translateX(-211px)' : null,
                          transition : 'ease transform 1s',
                          transitionDelay : '20ms'
                      }}
                      size={'1.3em'}/>
        </div>
    )
};

export default Search;
