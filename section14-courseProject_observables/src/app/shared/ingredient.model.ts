export class Ingredient {
  // public name: string;
  // public amount: number;

  // constructor(name: string, amount: number){
  //   this.name = name;
  //   this.amount = amount;
  // }

  constructor(public name: string, public amount: number) {}
  //Declarando o construtor dessa forma, todos os parâmetros são automagicamente associados como propriedades dessa classe, permitindo substituir todas aquelas linhas de código acima.
}
