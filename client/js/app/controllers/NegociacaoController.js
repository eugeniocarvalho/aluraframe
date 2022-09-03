class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    //YYYY-MM-DD
    let data = this._inputData.value.split('-');

    data = data.map((number, index) => number - index % 2);

    const negociacao = new Negociacao(
      new Date(...data),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);

    
    //TODO: adicionar negociação em uma lista
  }
} 