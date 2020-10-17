import api from '../../services/apiDailyBakery'
import ForgotPasswordDAOInterface from '../../Interfaces/ForgotPasswordDAOInterface';

export default async function sendVerificationEmail(email: string) {
    if (!email) {
        throw "Email não pode ser vazio";
    }

    let obj: ForgotPasswordDAOInterface = {};

    await api.post('/userForgotPassword', {
        email: email,
    }).then(response => {
        obj = {
            cnpj: response.data.cnpj,
            email: response.data.email,
            codigoEnviado: response.data.codigoEnviado,
            _id: response.data._id
        }
        console.log(obj)
        return obj
    }).catch(error => {
        console.log(error.response.data.message ? error.response.data.message : error.response.data.error)

        obj = {
            error: error.response.data.message ? error.response.data.message : error.response.data.error
        }
        return obj
    });

    console.log(obj)

    return obj
}
