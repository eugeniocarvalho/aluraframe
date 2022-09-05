class DateHelper {
  constructor() {
    throw new Error("DateHelper is a static class")
  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error("Date incorrect format, try yyyy-mm-dd")
    
    //YYYY-MM-DD
    texto = texto.split('-');

    texto = texto.map((number, index) => parseInt(number) - index % 2);

    //[YYYY, MM, DD]
    return new Date(...texto);
  }
}