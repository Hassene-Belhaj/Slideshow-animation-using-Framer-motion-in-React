import React from 'react'
import { createGlobalStyle, styled } from 'styled-components'
import Carousel from './Component/Carousel'
import { Images } from './Component/Data/Data'



const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  scroll-behavior: smooth;
}
`



const Container = styled.div`
width: 100%;
height: 100%;
`


const App = () => {
  return (
    <Container>
    <GlobalStyle />
     <Carousel  Images={Images}/>
    </Container>
   

   
 
    )
}

export default App