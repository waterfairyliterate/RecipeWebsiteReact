import React, { Component } from 'react';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import NavBar from './components/NavBar';
import Babka from './components/recipe_info/Babka';
import Profiterole from './components/recipe_info/Profiterole';
import Brownie from './components/recipe_info/Brownie';
import CeasarSalad from './components/recipe_info/CeasarSalad';
import Falafel from './components/recipe_info/Falafel';
import Lasagna from './components/recipe_info/Lasagna';
import MongolianBeef from './components/recipe_info/MongolianBeef';
import TuscanChicken from './components/recipe_info/TuscanChicken';
import PotatoLeekSoup from './components/recipe_info/PotatoLeekSoup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class RecipePage extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/recipe_page/Babka" component={Babka} />
                    <Route path="/recipe_page/Brownie" component={Brownie} />
                    <Route path="/recipe_page/Profiterole" component={Profiterole} />
                    <Route path="/recipe_page/CeasarSalad" component={CeasarSalad} />
                    <Route path="/recipe_page/Falafel" component={Falafel} />
                    <Route path="/recipe_page/Lasagna" component={Lasagna} />
                    <Route path="/recipe_page/MongolianBeef" component={MongolianBeef} />
                    <Route path="/recipe_page/TuscanChicken" component={TuscanChicken} />
                    <Route path="/recipe_page/PotatoLeekSoup" component={PotatoLeekSoup} />
                </Switch>


            </Router>
        );
    }

}


export default RecipePage;