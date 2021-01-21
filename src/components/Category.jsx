import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap';

class Category extends Component {
    render() {
        return (
            <Container >
                <Row>
                    <Col xs={12}>
                    <Carousel>
                        <Carousel.Item>
                        <Link to={this.props.path1}>
                            <img 
                                className = "d-block w-100"
                                src = {this.props.img1}
                                alt = {this.props.title1}
                            />
                            <Carousel.Caption>
                                <div style={{paddingTop:'0.5rem',paddingBottom:'0.5rem',paddingRight:'0.5rem',paddingLeft:'0.5rem', backgroundColor:'rgba(110, 117, 124, 0.40)', maxWidth: '900px', maxHeight: '600px'}}>
                                <h3 style={{fontSize: 20}}>{this.props.title1}</h3>
                                <p style={{fontSize: 11}} >{this.props.desc1}</p>
                                </div>
                            </Carousel.Caption>
                        </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to={this.props.path2}>
                            <img
                                className = "d-block w-100"
                                src = {this.props.img2}
                                alt = {this.props.title2}
                            />
                            <Carousel.Caption >
                                <div style={{paddingTop:'0.5rem',paddingBottom:'0.5rem',paddingRight:'0.5rem',paddingLeft:'0.5rem', backgroundColor:'rgba(110, 117, 124, 0.40)', maxWidth: '900px', maxHeight: '600px'}}>
                                <h3 style={{fontSize: 20}}>{this.props.title2}</h3>
                                <p style={{fontSize: 11}}>{this.props.desc2}</p>
                                </div>
                            </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to={this.props.path3}>
                            <img
                                className = "d-block w-100"
                                src = {this.props.img3}
                                alt = {this.props.title3}
                            />
                            <Carousel.Caption>
                                <div style={{paddingTop:'0.5rem',paddingBottom:'0.5rem',paddingRight:'0.5rem',paddingLeft:'0.5rem', backgroundColor:'rgba(110, 117, 124, 0.40)', maxWidth: '900px', maxHeight: '600px'}}>
                                <h3 style={{fontSize: 20}}>{this.props.title3}</h3>
                                <p style={{fontSize: 11}}>{this.props.desc3}</p>
                                </div>
                            </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    </Carousel>
                        </Col>
                    </Row>
            </Container>
        );
  }
}

export default Category