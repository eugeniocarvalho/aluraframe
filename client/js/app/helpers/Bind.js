class Bind {
  // REST operator, a partir do segundo paramento, o que vier vai ser condensado num array em props
  constructor(model, view, ...props) {
    // cria a proxy com os parâmetros passado por parametro, modelo, propriedades e ação
    //toda vez que essas propriedades forem acessadas ele atualiza o view passando o model
    let proxy = ProxyFactory.create(model, props, (model) => view.update(model));

    //antes de devolver a proxy, atualiza o modelo
    view.update(model);

    return proxy;
  }
}