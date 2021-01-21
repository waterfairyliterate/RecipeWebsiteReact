import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        let user = JSON.parse(localStorage.getItem(this.state.email));
        console.log(user);
        if (localStorage) {
            console.log(user.email);

            if (user.email === this.state.email && user.password === this.state.password) {
                sessionStorage.setItem("isLoggedIn", true);
                alert("You Logged In");

            }

            else if (user.email === this.state.email && user.password !== this.state.password) {
                alert("Password is wrong");
            }

            else {
                alert("User does not exist");
            }
        }
        setTimeout(function () { document.location.href = "/"; }, 250);
        event.preventDefault();
    }


    render() {
        return (
            <React.Fragment>
                <h2 className="m-5">Login</h2>
                <Form className="m-5" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control onChange={this.handleEmailChange} value={this.state.email} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control onChange={this.handlePasswordChange} value={this.state.password} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                        </Button>


                </Form>
            </React.Fragment>
        );
    }
}

export default Login;