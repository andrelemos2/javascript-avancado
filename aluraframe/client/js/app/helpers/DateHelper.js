/**
 * Created by andreasl on 31/05/17.
 */

class DateHelper {

    dataParaTexto(data) {
        return ${data.getDate()}/${data.getMonth+1}/${data.getFullYear};
    }

    static textoParaData(texto) {
        return new Date(...texto.split('-').map(item, indice) => item - indice % 2);
     }
}
