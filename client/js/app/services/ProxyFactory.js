class ProxyFactory {
  static create(objeto, props, acao) {
    return new Proxy(objeto, {
      get(target, prop, receiver) {
        //props é um array com as propriedades que quero monitorar
        if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
          // essa função retornada irá substituir o método no proxy. Ou seja, usando o handler do proxy para modificar o próprio proxy, que loucura!
          return function () {
            // console.log(`método '${prop}' interceptado`);
            // Quando usarmos Reflect.apply, Reflect.get e Reflect.set precisamos retornar o resultado da operação com return
            // arguments é uma variável implícita que dá acesso à todos os parâmetros recebidos pelo método/função
            Reflect.apply(target[prop], target, arguments);

            return acao(target);
          }
        }
        // só executa se não for função
        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver) {
        if (props.includes(prop)) {
          target[prop] = value;
          acao(target);
        }

        return Reflect.set(target, prop, value, receiver);
      }
    });
  }

  static _ehFuncao(func) {
    return typeof (func) == typeof (Function);
  }
}