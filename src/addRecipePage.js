import React, { Component } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

class AddRecipePage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <Footer />
            </React.Fragment>
        );
    }
}

export default AddRecipePage;