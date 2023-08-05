import React from 'react'
import { styled } from 'styled-components'

export default function MobileNav() {
  return (
    <>
    <Container>
    <div>MobileNav</div>
    </Container>
    </>
  )
}


const Container = styled.div`
@media screen and (max-width: 768px) {
  display: none;
}
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: crimson;
`