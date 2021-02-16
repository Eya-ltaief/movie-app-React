import React, {useState} from "react" ;
import {Nav, Navbar,Form , FormControl,Button} from "react-bootstrap" ;


export default function NavigationBar({setTitle, setRate,rating}){
    const stylesBar = {width : "400px", position: "absolute",
    left: "20%"}
    const stylesRate = {width : "250px", position: "absolute",
    left: "55%"}
    return(
        <Navbar expand="lg"  bg="dark" variant="dark" fixed="top">
            <Navbar.Brand><img src="/images/pop-corn.png"  alt="profile" style={{marginTop: "-15px",position:"relative"}}></img></Navbar.Brand>
            <Navbar.Brand href="/"><h3 >MoviesAddict</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Form className="form-center" style={stylesBar}>
                <FormControl type="text" placeholder="Search for movies, series ..." className="search-bar" onChange={(e)=>setTitle(e.target.value)}  />
            </Form>
            <Form className="formm-center" style={stylesRate}>
                <FormControl type="value" placeholder="Enter the movie rate" className="rate-bar" onChange={(e)=>setRate(e.target.value) } value={rating} />
            </Form>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Button variant="danger" className="button" style={{width: "8rem"}}><h6>Log In</h6></Button>{' '}</Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}