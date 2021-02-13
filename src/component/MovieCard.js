import React from "react";
import {Card,Button,Container,Row,Col} from "react-bootstrap" ;


export default function MovieCard({movie}){
    
    return(
        <>
        <Container id="cards">
            <Row >
                <Col>
                    <Card style={{ width: '50rem',border: "1px solid #212529",height:"400px"}} id="card">
                        <div style={{display:"flex"}}>
                            <Card.Img variant="top" src={movie.image} style={{height:"400px",width: '30rem'}}/>
                            <Card.Body style={{backgroundColor:"#212529",width: "",height:"400px"}} className="ctext">
                                <Card.Title>{movie.name}</Card.Title>
                                <Card.Title><h6>{movie.date}</h6></Card.Title>
                                <Card.Title><h6>{movie.title}</h6></Card.Title>
                                <Card.Text >
                                {movie.description}
                                </Card.Text>
                                <Button variant="outline-secondary">Watch Now</Button>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>    
        </Container>
        </>
    )
}

