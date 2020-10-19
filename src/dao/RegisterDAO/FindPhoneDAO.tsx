import api from '../../services/apiDailyBakery'
import RegisterInterface from '../../Interfaces/RegisterInterface';

export default async function findPhone(phone: String) {
    let user: RegisterInterface = {};

    if (!phone)
        return user;

    await api.post('/findUserByPhone', { numero_celular: phone, }, {
        timeout: 1000
    }).then(response => {
      user = {
          numero_celular: response.data ? response.data?.numero_celular : "",
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