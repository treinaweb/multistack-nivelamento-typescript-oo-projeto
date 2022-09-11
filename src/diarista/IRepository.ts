export interface IRepository<T, ID>{
  listar(): T[];
  exibir(id: ID): T;
  cadastrar(model: T): void;
  excluir(id: ID): void;
}