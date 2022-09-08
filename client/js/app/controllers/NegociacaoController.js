class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    let self = this;

    this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {

      get(target, prop, receiver) {

        if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop]) == typeof (Function)) {
          // essa função retornada irá substituir o método no proxy. Ou seja, usando o handler do proxy para modificar o próprio proxy, que loucura!
          return function () {

            console.log(`método '${prop}' interceptado`);
            // Quando usarmos Reflect.apply, Reflect.get e Reflect.set precisamos retornar o resultado da operação com return
            // arguments é uma variável implícita que dá acesso à todos os parâmetros recebidos pelo método/função
            Reflect.apply(target[prop], target, arguments);
            
            self._negociacoesView.update(target);

          }
        }
        // só executa se não for função
        return Reflect.get(target, prop, receiver);
      }
    });

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));

    this._mensagemView.update(this._mensagem);
    this._negociacoesView.update(this._listaNegociacoes);
  }

  adiciona(event) {
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = "Negociação adicionada com sucesso!";

    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();
    this._limpaMensagem();

  }

  apaga() {
    this._listaNegociacoes.esvazia();

    this._mensagem.texto = "Lista apagada com sucesso!";
    this._mensagemView.update(this._mensagem);
    this._limpaMensagem();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }

  _limpaMensagem() {
    setTimeout(() => {
      this._mensagem.texto = "";
      this._mensagemView.update(this._mensagem);

    }, 3000);
  }
}