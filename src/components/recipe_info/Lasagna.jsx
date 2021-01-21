import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';
import { recipes } from "../data";


class Lasagna extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe  title={this.getTitle("Lasagna")} author={this.getAuthor("Lasagna")} description={this.getDesc("Lasagna")} ingredients={this.getIngredients("Lasagna")} instructions={this.getInstructions("Lasagna")} />
                <Footer />
            </React.Fragment>
        );
    }

    getTitle(name) {
        return recipes.map((data) => {
            if (data.name === name)
                return data.title;
        });
    }


    getAuthor(name) {
        return recipes.map((data) => {
            if (data.name === name)
                return data.author;
        });
    }

    getDesc(name) {
        return recipes.map((data) => {
            if (data.name === name)
                return data.description;
        });}

    getIngredients(name) {
        return recipes.map((data) => {
            if (data.name === name)
                return data.ingredients;
        });
    }

    getInstructions(name) {
        return recipes.map((data) => {
            if (data.name === name)
                return data.instructions;
        });}
}

export default Lasagna;