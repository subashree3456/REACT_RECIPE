import React from 'react'
import "./Recipes.css";
import Recipe from "./Recipe/Recipe";

const Recipes = () => {
  return (
    <div className="recipes">
     <div className="inputs">
    <div className="logo">
    <h2>T🍕dRecipes</h2>
   <small>Find the recipes for your favorite meals</small>
</div>
<input type="text"/>
<button>Search</button>
       </div>
       <div className="recipes-results"> 
<Recipe/>
<Recipe/>
<Recipe/>
<Recipe/>       
       </div>
    </div>
  );
};

export default Recipes;
