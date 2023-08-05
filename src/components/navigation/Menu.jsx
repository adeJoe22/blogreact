import React from 'react'
import { styled } from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'
export default function Menu({isOpen, toggleDrawer, links}) {
  return (
    <>
     {isOpen && <Backdrop onClick={toggleDrawer} />}
     <Container isOpen={!isOpen}>
      <Close onClick={toggleDrawer}><AiOutlineClose/></Close>
      Container
    </Container>
    </>
  )
}

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.6s ease;

  background-color: #ffffffc5;
`;
const Container = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  right: 0;
  min-height: 100vh;
  width: 300px;
  background-color: #ffffff;
  transition: 0.3s ease;
  transform: translateY(${(props) => (props.isOpen ? "-100%" : "0")});
`


const Close = styled.div``