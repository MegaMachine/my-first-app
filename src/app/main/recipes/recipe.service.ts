import { Recipe } from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'Test1',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'
    ),
    new Recipe(
      'A Test recipe',
      'Test2',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/09/1519654520-delish-glazed-carrots-1.jpg?crop=1.0xw:1xh;center,top&resize=480:*'
    ),
    new Recipe(
      'A Test recipe',
      'Test3',
      'https://cdn.vox-cdn.com/thumbor/haPXSPnaeo-UIsaM-G3WLvNIUgc=/0x0:2400x1603/1200x675/filters:focal(1008x610:1392x994)/cdn.vox-cdn.com/uploads/chorus_image/image/58071251/NS019342.0.jpg'
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
