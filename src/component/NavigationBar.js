import React from "react" ;
import {Nav, Navbar,Form , FormControl,Button} from "react-bootstrap" ;
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavigationBar(){
    const stylesBar = {width : "400px", position: "absolute",
    left: "20%"}
    return(
        <Navbar expand="lg"  bg="dark" variant="dark" fixed="top">
            <Navbar.Brand><img src="/images/pop-corn.png"  alt="profile" style={{marginTop: "-15px",position:"relative"}}></img></Navbar.Brand>
            <Navbar.Brand href="/"><h3 >MoviesAddict</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Form className="form-center" style={stylesBar}>
                <FormControl type="text" placeholder="Search for movies, series ..." className="search-bar"  />
            </Form>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Button variant="danger" className="button" style={{width: "8rem"}}><h6>Log In</h6></Button>{' '}</Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}