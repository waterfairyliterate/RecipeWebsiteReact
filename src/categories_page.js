import React, { Component } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Carousel from 'react-bootstrap/Carousel'
import Category from './components/Category';
import Babka from './assets/babka.jpg';
import Brownie from './assets/brownie.jpg';
import Profiterol from './assets/profiterol.jpg';
import MongolianBeef from './assets/mongolianbeef.jpg';
import Lasagna from './assets/lasagna.jpg';
import Falafel from './assets/falafel.jpg';
import CeasarSalad from './assets/ceasarsalad.jpg';
import TuscanChicken from './assets/TuscanChicken.jpg';
import PotatoLeekSoup from './assets/PotatoLeekSoup.jpg';
import { Link } from 'react-router-dom'
import './index.css'
import { Button } from 'bootstrap';

class CategoriesPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <h1 style={{textAlign: "center", marginTop: '2rem', marginBottom: '1rem', color: 'rgb(83, 88, 94)'}}>Starters</h1>
                <Category
                /*Starters*/
                path1="/recipe_page/Falafel" img1={Falafel} title1="Falafel" desc1={this.getDesc("Falafel")}
                path2="/recipe_page/CeasarSalad" img2={CeasarSalad} title2="Ceasar Salad" desc2={this.getDesc("CeasarSalad")}
                path3="/recipe_page/PotatoLeekSoup" img3={PotatoLeekSoup} title3="Potato Leek Soup" desc3={this.getDesc("PotatoLeekSoup")}
                />
                <h1 style={{textAlign: "center", marginTop: '2rem', marginBottom: '1rem', color: 'rgb(83, 88, 94)'}}>Main Dishes</h1>
                <Category
                /*Main Dishes*/
                path1="/recipe_page/MongolianBeef" img1={MongolianBeef} title1="Mongolian Beef" desc1={this.getDesc("MongolianBeef")}
                path2="/recipe_page/Lasagna" img2={Lasagna} title2="Lasagna" desc2={this.getDesc("Lasagna")}
                path3="/recipe_page/TuscanChicken" img3={TuscanChicken} title3="Tuscan Chicken" desc3={this.getDesc("TuscanChicken")}
                />
                <h1 style={{textAlign: "center", marginTop: '2rem', marginBottom: '1rem', color: 'rgb(83, 88, 94)'}}>Desserts</h1>
                <Category
                /*Desserts*/
                path1="/recipe_page/Babka" img1={Babka} title1="Chocolate Babka" desc1={this.getDesc("Babka")}
                path2="/recipe_page/Brownie" img2={Brownie} title2="Brownies" desc2={this.getDesc("Brownie")}
                path3="/recipe_page/Profiterol" img3={Profiterol} title3="Profiterole" desc3={this.getDesc("Profiterol")}
                /> 
                <Footer />
            </React.Fragment>
        );
    }

    getDesc(recipe) {
        if      (recipe === "Babka") return          "Baking a chocolate babka is no casual undertaking. The Eastern European yeast-risen coffee cake has 14 steps and takes all day to make. But the results are worth every sugarcoated second...";
        else if (recipe === "Profiterol") return     "Choux pastry dough is piped through a pastry bag or dropped with a pair of spoons into small balls and baked to form largely hollow puffs .After cooling, the baked profiteroles are injected...";
        else if (recipe === "Brownie") return        "According to legend, the brownie was invented by one Brownie Schrumph when she tried to make a chocolate cake without baking powder or baking soda. Instead of rising, the brownie collapses...";
        else if (recipe === "MongolianBeef") return  "Mongolian Beef is a recipe that I’ve been cooking for clients for many years for a number of reasons. One, people love anything that tastes like Chinese takeout.";
        else if (recipe === "Lasagna") return        "There are three kinds of cheese in this recipe. First you have the classic lasagna filling of ricotta cheese. Use whole milk ricotta cheese in this recipe for best results...";
        else if (recipe === "Falafel") return        "Falafel are delicious balls of chickpea and herb goodness that you find in Middle Eastern cooking. Naturally vegan and vegetarian, falafel are great in wraps, pitas, sandwiches and salads...";
        else if (recipe === "CeasarSalad") return    "My son, David, is to thank for this recipe. He is 9 years old and took kids cooking classes at Sur La Table where he learned and fell in love with this caesar salad recipe, so we re-created...";
        else if (recipe === "TuscanChicken") return  "It’s convenient to grab a pack of chicken breasts from the market, but the big question is how to turn it into something special. To spice things, try stuffing them with a savory vegetable and cheese...";
        else if (recipe === "PotatoLeekSoup") return "It rained, sleeted, and snowed all day last Saturday, and I loved it every minute of it. The kids stayed in their pajamas and watched movies all day, my husband made a roaring fire...";
        else return "";
    }
}

export default CategoriesPage;