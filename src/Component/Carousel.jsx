import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { BsChevronLeft,BsChevronRight, BsDot} from 'react-icons/bs'
import { motion } from 'framer-motion'


const Container = styled.div`
width: 100%;
height: 100vh;
padding: 5rem 0 0 0;

`
const CarouselContainer = styled.div`
position: relative;
width : 80% ;
height : 90% ;
margin: auto;
border-radius: 25px;
overflow: hidden;
background: #000;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
}
@media screen and (max-width : 768px){

}
`
const Opacity = styled.div`
position:absolute;
inset: 0;
width: 100%;
height: 100%;
background:rgba(0,0,0,0.2);
z-index: 9;
`

const LeftArrowSpan = styled.span`
position: absolute;
top: 50%;
left: 2rem;
transform: translateY(-50%);
width: 4rem;
height: 4rem ;
border-radius: 50%;
background: rgba(0,0,0,0.5);
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
z-index: 10;
`

const RightArrowSpan = styled.span`
position: absolute;
top: 50%;
right: 2rem;
transform: translateY(-50%);
width: 4rem;
height: 4rem ;
border-radius: 50%;
background: rgba(0,0,0,0.4);
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
z-index: 10;

`

const LeftArrow = styled(BsChevronLeft)`
fill: #fff;
`

const RightArrow = styled(BsChevronRight)`
fill: #fff;
`
const DotDiv = styled.div`
width: auto;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

const Carousel = ({Images}) => {


const [index,setIndex] = useState(0)

useEffect(()=>{

const timeout = setTimeout(() => {
    nextSlide()
}, 4000); 
    
return ()=>clearTimeout(timeout)

},[index])



const nextSlide = () => {
const curr = index === Images.length - 1
setIndex(curr ? 0 : index + 1)
}

const prevSlide = () => {
const curr = index === 0
setIndex(curr ? Images.length - 1 : index - 1 )
}



  return (
     <Container>
        <CarouselContainer>
            <Opacity></Opacity>
          <LeftArrowSpan onClick={prevSlide}><LeftArrow  size={40}/></LeftArrowSpan>  
           <RightArrowSpan onClick={nextSlide}><RightArrow size={40}/></RightArrowSpan>
        
        <motion.img  
        variants={{
        initial : { x:500 , opacity  : 0 },  
        visible: { x: 0 , opacity : 1  } ,
        exit: { x: 0 , opacity : 1  } ,
        }}
        animate='visible'
        transition={{
            duration : 0.5 ,
            type : "spring" ,
            bounce : 0.3 
        }}
        initial='initial'
        exit='exit'
        

        src={Images[index].img} 
        key={Images[index].img}
        />
      
        </CarouselContainer>
        <DotDiv>
       {Images.map((i,index)=>{
        return (
                <BsDot size={40} onClick={()=>setIndex(index)} /> 
                )
            })}
            </DotDiv>
     </Container>
    )
}

export default Carousel