import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';
import { recipes } from "../data";


class PotatoLeekSoup extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe  title={this.getTitle("Potato Leek Soup")} author={this.getAuthor("Potato Leek Soup")} description={this.getDesc("Potato Leek Soup")} ingredients={this.getIngredients("Potato Leek Soup")} instructions={this.getInstructions("Potato Leek Soup")} />
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
export default PotatoLeekSoup;