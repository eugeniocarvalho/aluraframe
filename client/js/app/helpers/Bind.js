class Bind {
  constructor(model, view, props) {
    // cria a proxy com os parâmetros passado por parametro
    let proxy = ProxyFactory.create(model, props, (model) => view.update(model));

    //antes de devolver a proxy, atualiza o modelo
    view.update(model);

    return proxy;
  }
}