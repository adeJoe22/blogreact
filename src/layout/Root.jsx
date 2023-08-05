import React from 'react'
import Navigation from '../components/navigation/Navigation'
import { Outlet } from 'react-router-dom'
import styled from'styled-components'

export default function Root() {
  return (
    <Container>
      <Wrapper>
         <Navigation/>
      <Outlet/>
      </Wrapper>
     
    </Container>
  )
}


const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: calc(100% - 80px);
height: 100%;
border-right: 2px solid grey;

`