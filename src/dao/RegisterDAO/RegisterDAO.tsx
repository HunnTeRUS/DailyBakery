import api from '../../services/apiDailyBakery'
import RegisterInterface from '../../Interfaces/RegisterInterface';

export default async function registerDAO(name: String, phone: String, password: String, email: String) {
  let user: RegisterInterface = {};

  if (!phone || !name || !password || !email)
    return user;

  await api.post('/userRegister', { numero_celular: '55' + phone, nome: name, email: email, senha: password}, {
    timeout: 1000
  }).then(response => {
    user = {
      numero_celular: response.data ? response.data?.numero_celular : "",
      email: response.data ? response.data?.email : "",
      nome: response.data ? response.data?.nome : "",
      senha: response.data ? response.data?.senha : "",
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