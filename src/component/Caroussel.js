import React ,{useState} from "react" ;
import {Carousel} from "react-bootstrap" ;

export default function Caroussel(){
    const stylesCaroussel = {width : "70%", 
    left: "25%", marginTop: "6%"}
    return (
    <Carousel style={stylesCaroussel}>
        <Carousel.Item interval={1000} >
            <img className="d-block w-100" src="images/call.jpg"style={{height:"350px"}} />
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img className="d-block w-100" style={{height:"350px"}} src="images/holidate.jpg"alt="Third slide"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" style={{height:"350px"}} src="images/train.jpg"alt="Third slide"/>
        </Carousel.Item>
    </Carousel>
    )
}