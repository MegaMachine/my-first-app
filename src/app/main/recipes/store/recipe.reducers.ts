import * as RecipeActions from './recipe.actions';
import { Ingredient } from './../../../shared/ingredient.model';
import { Recipe } from './../recipe.model';

export interface FeatureState {
  recipes: State;
}
export interface State {
  recipes: Recipe[];
}
const initialState: State = {
  recipes: [
    new Recipe(
      'Sendwitch',
      'Test1',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Breat', 1)
      ]
    ),
    new Recipe(
      'Fry Potatos',
      'Test2',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/09/1519654520-delish-glazed-carrots-1.jpg?crop=1.0xw:1xh;center,top&resize=480:*',
      [
        new Ingredient('Potato', 5),
        new Ingredient('Oil', 1)
      ]
    ),
    new Recipe(
      'Chiken',
      'Test3',
      'https://cdn.vox-cdn.com/thumbor/haPXSPnaeo-UIsaM-G3WLvNIUgc=/0x0:2400x1603/1200x675/filters:focal(1008x610:1392x994)/cdn.vox-cdn.com/uploads/chorus_image/image/58071251/NS019342.0.jpg',
      [
        new Ingredient('Chiken', 1)
      ]
    )
  ]
};
export function recipeReducer(state = initialState, action:RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES): {
      return {
        ...state,
        recipes: [...action.payload]
      };
    }
    case (RecipeActions.ADD_RECIPE): {
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    }
    case (RecipeActions.UPDATE_RECIPE): {
      const recipes = [...state.recipes];
      recipes[action.payload.index] = action.payload.updateRecipe;
      return {
        ...state,
        recipes: recipes
      };
    }
    case (RecipeActions.DELETE_RECIPE): {
      const recipes = [...state.recipes];
      recipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: recipes
      };
    }
    default: {
      return state;
    }
  }
}
