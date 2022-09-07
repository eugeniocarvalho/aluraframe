class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adciciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  esvazia() {
    this._negociacoes = [];
  }

  get negociacoes() {
    // Defense Programming: creating a copy from array this._negociacoes
    return [].concat(this._negociacoes);
  }
}