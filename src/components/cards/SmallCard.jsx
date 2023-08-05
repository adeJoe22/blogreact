import React from 'react'
import styled from 'styled-components'
import bcg from '../../assets/img1.jpg'
export default function SmallCard({image, title, category}) {
  return (
    <>
    <Container>

    <ImageWrap>
      <img alt={bcg} src={bcg}/>
    </ImageWrap>
    <TextWrap>
      <Title>The beauty of CSS</Title>
      <Category>Web Development</Category>
    </TextWrap>
    </Container>
    </>
  )
}


const Container = styled.div`
width: 180px;
height: 280px;
margin: 10px 0;
margin-right: 10px;
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
`
const ImageWrap = styled.div`
width: 100%;
height: 160px;
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

const TextWrap = styled.div`
width: 100%;
padding: 5px 0px;
display: flex;
flex-direction: column;
`