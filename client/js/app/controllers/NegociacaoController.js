class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    const diaMesAno = DateHelper.dataParaTexto(negociacao.data);

    console.log(negociacao)

    console.log(diaMesAno);
  }
} 