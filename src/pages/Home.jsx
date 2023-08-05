import React from 'react'
import styled from 'styled-components'
import LargeCard from '../components/cards/LargeCard'
import SmallCard from '../components/cards/SmallCard'
export default function Home() {
  return (
    <Container>
      <Title>      
        <div>TOP STORIES</div>
      </Title>
      <Wrap>        
        <Left>
          <LargeCard/>
          <LargeCard/>
          {/* <LargeCard/> */}
          
        </Left>
        <Right>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
          {/* <SmallCard/>
          <SmallCard/>
          <SmallCard/> */}
          </Right>        
      </Wrap>

    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;

div{
  position: relative;
  font-weight: 500;
  font-size: 18px;
  ::before {
    position: absolute;
    content: "";
    height: 2px;
    width: 60px;
    background-color: red;
    top: -10px;
    text-align: center;
  }
}  
`
const Wrap = styled.div`
width: calc(100% - 300px);
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const Right = styled.div`
  /* padding: 10px 0px; */
  margin-left: 5px;
  width: 570px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`
const Left = styled.div`
width: 370px;
display: flex;
justify-content: center;
flex-wrap: wrap;
`