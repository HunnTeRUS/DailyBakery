import api from '../../services/apiDailyBakery'
import UserInterface from '../../Interfaces/UserInterface';

export default async function doLogin(email: String, password: String) {
    let user: UserInterface = {};

    if (!email || !password)
        return user;

    await api.post('/userLogin', { email: email, senha: password, }, {
        timeout: 1000
    }).then(response => {
        user = {
            id_user: response.data._id,
            nome: response.data?.nome,
            email: response.data?.email,
            senha: response.data?.senha,
            numero_celular: response.data?.numero_celular,
            token: response.headers['x-access-token'],
            error: ""
        }
        return user

    }).catch(error => {
        console.log(error.response.data.message ? error.response.data.message : error.response.data.error)

        user = {
            error: error.response.data.message ? error.response.data.message : error.response.data.error
        }
        return user

    });

    return user
}