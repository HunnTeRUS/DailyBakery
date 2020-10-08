import BakeryInterfaceDAO from '../Interfaces/BakeryInterfaceDAO';
import BakeryInterface from '../Interfaces/BakeryInterface';

export default function getDtoFromDao(objDAO: BakeryInterfaceDAO) {
    let obj : BakeryInterface = {};

    if(objDAO || obj){
        obj._id = objDAO._id;
        obj.aberto_fechado = objDAO.aberto_fechado;
        obj.bairro = objDAO.bairro;
        obj.cep = objDAO.cep;
        obj.cidade = objDAO.cidade;
        obj.cnpj = objDAO.cnpj;
        obj.email = objDAO.email;
        obj.estado = objDAO.estado;
        obj.nome = objDAO.nome;
        obj.numero = objDAO.numero;
        obj.numero_celular = objDAO.numero_celular;
        obj.numero_telefone = objDAO.numero_telefone;
        obj.rua = objDAO.rua;
        obj.tempo_espera = objDAO.tempo_espera;
        obj.ultima_fornada = objDAO.ultima_fornada;
        obj.error = objDAO.error;
        obj.latitude = objDAO.location?.coordinates[1]
        obj.longitude = objDAO.location?.coordinates[0]
    }

    return obj;
}