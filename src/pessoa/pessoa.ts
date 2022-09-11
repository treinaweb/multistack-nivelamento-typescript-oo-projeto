export abstract class Pessoa{
  public id!: number
  constructor(
  public nome: string,
  public telefone: string,
  public endereco: string,
  ){

  }
}