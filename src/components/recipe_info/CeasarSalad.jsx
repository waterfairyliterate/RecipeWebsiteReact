import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';
import { recipes } from "../data";


class CeasarSalad extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe title={this.getTitle("Ceasar Salad")} author={this.getAuthor("Ceasar Salad")} description={this.getDesc("Ceasar Salad")} ingredients={this.getIngredients("Ceasar Salad")} instructions={this.getInstructions("Ceasar Salad")} />
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

export default  CeasarSalad;