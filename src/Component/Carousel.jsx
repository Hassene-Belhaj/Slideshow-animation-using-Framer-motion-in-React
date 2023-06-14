import React, { useState } from 'react'
import { styled } from 'styled-components'
import { BsChevronLeft,BsChevronRight} from 'react-icons/bs'


const Container = styled.div`
width: 100%;
height: 100vh;
padding: 2rem  0;

`
const CarouselContainer = styled.div`
position: relative;
width : 80% ;
max-height : 100% ;
margin: auto;
border-radius: 25px;
overflow: hidden;
img{
    width: 100%;
    object-fit: cover;

}
`

const LeftArrowSpan = styled.span`
position: absolute;
top: 50%;
left: 2rem;
transform: translateY(-50%);
width: 5rem;
height: 5rem ;
border-radius: 50%;
background: rgba(0,0,0,0.5);
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
const RightArrowSpan = styled.span`
position: absolute;
top: 50%;
right: 2rem;
transform: translateY(-50%);
width: 5rem;
height: 5rem ;
border-radius: 50%;
background: rgba(0,0,0,0.5);
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

const LeftArrow = styled(BsChevronLeft)`
fill: #fff;
`

const RightArrow = styled(BsChevronRight)`
fill: #fff;
`



const Carousel = ({Images}) => {
const [index,setIndex] = useState(0)


const nextSlide = () => {
const curr = index === Images.length - 1
setIndex(curr ? 0 : index + 1)
}

const prevSlide = () => {
const curr = index === 0
setIndex(curr ? Images.length - 1 : index -1)
}



  return (
     <Container>
        <CarouselContainer>
          <LeftArrowSpan onClick={prevSlide}><LeftArrow  size={40}/></LeftArrowSpan>  
           <RightArrowSpan onClick={nextSlide}><RightArrow size={40}/></RightArrowSpan>
         <img src={Images[index].img} alt="" />
        </CarouselContainer>
     </Container>
    )
}

export default Carousel