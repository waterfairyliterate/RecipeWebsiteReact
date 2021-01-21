import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: "",
            surname: "",
        }

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSurnameChange(event) {
        this.setState({ surname: event.target.value });
    }



    handleSubmit(event) {
        let user = {
            "email": this.state.email,
            "name": this.state.name,
            "surname": this.state.surname,
            "password": this.state.password,
        }


        if (this.state.password === "") {
            return alert("Please provide a password");
        }

        for (let i = 0; i < localStorage.length; i++) {

            const key = localStorage.key(i);
            let item = JSON.parse(localStorage.getItem(key)).email;
            if (item === this.state.email) {
                alert("This e-mail is already taken");
                return;
            }
        }

        localStorage.setItem(this.state.email, JSON.stringify(user));
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="m-5">Sign Up</h2>
                <Form className="m-5" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control onChange={this.handleEmailChange} value={this.state.email} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Row>
                        <Col>
                            <Form.Control value={this.state.name} onChange={this.handleNameChange} placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control value={this.state.surname} onChange={this.handleSurnameChange} placeholder="Last name" />
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control onChange={this.handlePasswordChange} value={this.state.password} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign Up
                        </Button>





                </Form>


            </React.Fragment>
        );
    }
}

export default SignUp;