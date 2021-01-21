import './Recipe.css';
import React, { Component } from 'react';
import Grocery from '../assets/grocery.png';
import Bake from '../assets/bake.png';



class Recipe extends Component {
  state = {}
  render() {
    return (<body onload="getRecipes(); getRecipe(); checkInserted();">
      <div class="pagetitle">
      <p id="name" class="recipe_name" style={{color:'whitesmoke'}}>{this.props.name}</p>

        <h1 id="title" class="recipe_title">{this.props.title}</h1>
        
        <h3 id="author" class="author"><i>{this.props.author}</i></h3>
      </div>

      <div id="content"><p id="description" class="description" style={{ color: 'rgb(83, 88, 94)' }}>{this.props.description}</p></div>

      <div id="div_ingredients" >
        <h2><img class="ingredient_icon" src={Grocery} /> Ingredients</h2><p id="ingredients" class="ingredients" style={{ color: 'rgb(83, 88, 94)' }}>{this.props.ingredients}</p></div>

      <div id="div_instructions" >
        <h2><img class="instructions_icon" src={Bake} /> Instructions</h2><p id="instructions" class="instructions" style={{ color: 'rgb(83, 88, 94)' }}>{this.props.instructions}</p></div>
    </body>);
  }
}

export default Recipe;


function getRecipes() {
  if (localStorage) {
    if (localStorage.getItem("recipeIndex") > 0) {
      var index = localStorage.getItem("recipeIndex");
      for (var i = 0; i < index; i++) {
        var recipe = JSON.parse(localStorage.getItem("recipe" + i));
        var option = document.getElementById(recipe.category);
        var recipeOpt = document.createElement("option");
        recipeOpt.text = recipe.name;
        recipeOpt.value = recipe.index;
        option.appendChild(recipeOpt);
      }
    }
  } else {
    alert("Sorry, your browser does not support local storage");
  }
}

function getRecipe() {
  if (localStorage) {
    var recipeIndex = readRecipeIndex("recipes");
    var recipe = JSON.parse(localStorage.getItem(recipeIndex));
    document.getElementById("author").innerHTML = recipe.author;
    document.getElementById("name").innerHTML = recipe.title;
    document.getElementById("description").innerHTML = recipe.description;
    document.getElementById("ingredients").innerHTML = recipe.ingredients;
    document.getElementById("instructions").innerHTML = recipe.instructions;
  }
  else {
    alert("Sorry, your browser does not support local storage");
  }
}


function readRecipeIndex(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function checkInserted() {
  if (localStorage) {
    if (localStorage.getItem("inserted") == null) {
      setTimeout(function () { document.location.href = "../home/index.html"; }, 250);
    }
  }
  else {
    alert("Sorry, your browser does not support local storage");
  }
}