import api from '../../services/apiDailyBakery'
import RegisterInterface from '../../Interfaces/RegisterInterface';

export default async function findEmail(email: String) {
  let user: RegisterInterface = {};

  if (!email)
    return user;

  await api.post('/emailVerification', { email: email, }, {
    timeout: 1000
  }).then(response => {
    user = {
      email: response.data ? response.data?.email : "",
      codigoEnviado: response.data ? response.data?.codigoEnviado : "",
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