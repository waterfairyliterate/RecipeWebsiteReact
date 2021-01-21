import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer';
import Login from './components/Login';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';


class SignUpLogin extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Container style={{marginTop:'8rem', marginBottom:'15rem'}}>
                    <Row>
                        <Col> <Login /> </Col>
                        <Col>  <SignUp /> </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        );
    }
}

export default SignUpLogin;