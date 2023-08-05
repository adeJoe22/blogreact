import React from 'react'
import styled from 'styled-components'
import bcg1 from '../../assets/img2.jpg'

export default function LargeCard({title, category, bcg}) {
  return (
    <>
    <Container>
    <Overlay></Overlay>
    <Content>
        <Title>Hard times makes strong men, strong men create good times</Title>
    <Category>
      Life quotes
    </Category>
    </Content>
  
    </Container>
    </>
  )
}


const Container = styled.div`
width: 350px;
height: 280px;
background: url(${bcg1});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
display: flex;
align-items: flex-end;
justify-content: center;
margin: 10px 0;

@media screen and (max-width:425px){
  width: 270px;
  height: 200px;
}
`
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, #0000005c 60%, #000000);
`
const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 12px;
z-index: 2;
`
const Category = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #dc143c;
`
const Title = styled.div`
 font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
  color: #ffffff;
`