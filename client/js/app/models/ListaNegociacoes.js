class ListaNegociacoes {
  constructor(armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
  }

  adciciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadilha(this);
  }

  esvazia() {
    this._negociacoes = [];
    this._armadilha(this);
  }

  get negociacoes() {
    // Defense Programming: creating a copy from array this._negociacoes
    return [].concat(this._negociacoes);
  }
}