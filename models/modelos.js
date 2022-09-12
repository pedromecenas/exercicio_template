class Projeto {
  constructor(projeto, tipo, tecnologia, inicio, fim) {
    this.projeto = projeto;
    this.tipo = tipo;
    this.tecnologia = tecnologia;
    this.inicio = inicio;
    this.fim = fim;
  }
}

module.exports = {
  Projeto: Projeto,
};
