import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // Fazer um loop para adicionar os ingredientes exigiria muito processamento, pensando em larga escala.
    // for (const ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    // ... spread Operator: permite fazer um push em cada item do array. Caso passasse o array como parâmetro, ele seria inserido no array local como um objeto único, em vez de inserir cada um de seus elementos Ingredient.
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
