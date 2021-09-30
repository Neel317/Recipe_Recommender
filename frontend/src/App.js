import logo from './logo.svg';
import './App.css';
import  Form from './components/Form.js';
import Header from './components/Header';
import recipeDB from './apis/recipeDB';
import RecipeList from './components/RecipeList';
import React,{Component} from 'react';

class App extends Component{
    constructor(){
      super()
      this.state={
          cuisine : "Any",
          NoIngredients : 0,
          ingredients: new Set(),
          video: null,
          recipe: null,
          recipeList: []
        }
      }

    formGetter = (cuisineInput, NoIngredientsInput, ingredientInput) => {
      this.setState({
        cuisine : cuisineInput,
        NoIngredients: NoIngredientsInput ,
        ingredients: ingredientInput 
      })
    }

    handleSubmit = async (cuisineInput,noIngredientsInput,ingredientsInput) => {
      this.setState({
        cuisine: cuisineInput,
        NoIngredients: noIngredientsInput,
        ingredients:ingredientsInput

      })
  
      const items = Array.from(ingredientsInput)
      this.getRecipeDetails(items[0]);

  };
 
  getRecipeDetails = async (ingredient) => {
    try {
      const response = await recipeDB.get('/recipes', {
        params: {
          'CleanedIngredients' : ingredient
        }
      })
      this.setState({
        recipeList: response.data.recipes
      });
    } catch (err) {
        console.log(err);
    }    
 }

  render(){
    return(
      <div>
        <Header/>
        <Form sendFormData = {this.handleSubmit}/>
        <RecipeList recipes={this.state.recipeList}/>
      </div>
    )
  }
}

export default App;