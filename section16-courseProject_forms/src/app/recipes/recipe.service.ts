import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  // prettier-ignore
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]
    ),
    new Recipe(
      'Big fat burger',
      'What else you need to say?',
      'https://www.stockvault.net/data/2016/04/19/194208/preview16.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese Slice', 2),
        new Ingredient('Tomatoe Slice', 1),
        new Ingredient('Lettuce', 1)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
    // Caso retornasse apenas this.recipes, seria retornado uma referência do array local, permitindo que o mesmo pudesse ser modificado fora dessa classe. Com o slice(), é retornado uma "cópia" do array local.
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
