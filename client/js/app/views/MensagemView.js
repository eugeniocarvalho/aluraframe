class MensagemView extends View{
  constructor(elemento) {
    super(elemento);
  }
  
  template(model) {
    return model.texto ? `<p class="alert alert-success w-25 text-center m-auto">${model.texto}</p>` : "<p></p>";
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);

    setTimeout(() => {
    this._elemento.innerHTML = "";
    }, 3000);
  }
}