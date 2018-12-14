import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    recipes: State
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
    new Recipe(
        'Tasty Schnitzel', 
        'A super-tasty Schnitzel - just awesome !', 
        'https://previews.123rf.com/images/foodandmore/foodandmore1502/foodandmore150200150/36578073-close-up-tasty-recipe-of-crumbled-escalope-with-potato-fries-styled-with-slice-of-lemon-and-tomato-a.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French fries', 20)
        ]),
    new Recipe(
        'Big fat burger', 
        'What else you need to say ?', 
        'https://st2.depositphotos.com/1004118/11101/i/950/depositphotos_111015972-stock-photo-big-fat-burger.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            };    
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                    ...state,
                    recipes: recipes
            };
        case (RecipeActions.DELETE_RECIPE):
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload, 1)
            return {
                ...state,
                recipes: oldRecipes
            };
        default:
            return state;
    }
}