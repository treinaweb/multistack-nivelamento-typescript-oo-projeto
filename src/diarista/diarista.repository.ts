import { Diarista } from "./diarista.js";
import { IRepository } from "./IRepository.js";

export class DiaristaRepository implements IRepository<Diarista, number> {
  diaristas: Diarista[] = [];
  id = 1;

  listar() {
    return this.diaristas;
  }

  exibir(id: number) {
    const diarista = this.diaristas.filter((diarista) => diarista.id === id);
    if (!diarista[0]) {
      console.log("Diarista não encontrado - ID inválido");
    }
    return diarista[0];
  }

  cadastrar(model: Diarista) {
    model.id = this.id++;
    this.diaristas.push(model);
    console.log("Diarista cadastrado(a) com sucesso!");
  }

  excluir(id: number) {
    const diaristaExists = this.diaristas.filter((diarista) => diarista.id === id);
    if (!diaristaExists[0]) {
      console.log("Diarista não encontrado - ID inválido");
      return false;
    }

    const diarista = this.diaristas.filter((diarista) => diarista.id != id);
    this.diaristas = diarista;
    console.log("Diarista excluido com sucesso!");
  }
}
