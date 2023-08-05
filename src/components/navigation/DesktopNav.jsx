import React from 'react'
import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'


export default function DesktopNav({toggleDrawer, links}) {
  return (
    <>
    <Container>
    <Search>
<Icon >
  <BiSearch/>
</Icon>
<SearchInput placeholder='Search' type='text'/>
    </Search>

    <Logo>LOGO</Logo>
    <Categories onClick={toggleDrawer}>
      CATEGORIES
    </Categories>

    <Hamburger>
      <FaBars/>
    </Hamburger>
    </Container>
    </>
  )
}


const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;

`

const Search = styled.div`
display: flex;
height: 45px;
width: 200px;
align-items: center;
margin-left: 25px;
border-bottom: 1px solid lightgray;
@media screen and (max-width: 425px) and (min-width: 320px){
  display: none;

}
`
const Icon = styled.div`
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
 margin-right: 5px;
svg{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
`
const SearchInput = styled.input`
padding: 10px 2px;
border: none;
background-color: transparent;
font-size: 14px;
width: 140px;
:focus{
  outline: none;
  border: none;
}
`
const Hamburger = styled.div``
// const Search = styled.div``
const Logo = styled.div`
font-weight: 600;
font-size: 15px;
`
const Categories = styled.div`
margin-right: 25px;
font-weight: 600;
font-size: 14px;

@media screen and (max-width: 425px) and (min-width: 320px){
  display: none;
  
}
`