import React, { Component } from 'react';
import HomeRecipe from './HomeRecipe';
import Babka from '../assets/babka.jpg';
import Brownie from '../assets/brownie.jpg';
import Profiterol from '../assets/profiterol.jpg';
import { Container, Row } from 'react-bootstrap';
import Link from 'react-router-dom';
import { recipes } from "./data";

class HomeRecipes extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <ul className="list-unstyled" >
                        <HomeRecipe name="Babka" image={Babka} author={this.getAuthor("Babka")} recipe={this.getRecipe("Babka")} />
                        <HomeRecipe name="Brownie" image={Brownie} author={this.getAuthor("Brownie")} recipe={this.getRecipe("Brownie")} />
                        <HomeRecipe name="Profiterole" image={Profiterol} author={this.getAuthor("Profiterole")} recipe={this.getRecipe("Profiterole")} />
                    </ul>
                </Container>
            </React.Fragment>
        );
    }

    getAuthor(name) {
        return recipes.map((data) => {
            if (data.name === name)
                return data.author;
        });
    }

    getRecipe(name) {
        return recipes.map((data) => {
            if (data.name === name)
                return data.home_desc;
        });
    }
}

export default HomeRecipes;