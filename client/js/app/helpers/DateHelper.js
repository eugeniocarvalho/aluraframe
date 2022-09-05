class DateHelper {
  dataParaTexto(data) {
    return data.getDate()
      + '/' + (data.getMonth() + 1)
      + '/' + data.getFullYear();
  }

  textoParaData(texto) {
    //YYYY-MM-DD
    texto = texto.split('-');

    texto = texto.map((number, index) => parseInt(number) - index % 2);

    //[YYYY, MM, DD]
    return new Date(...texto);
  }
}