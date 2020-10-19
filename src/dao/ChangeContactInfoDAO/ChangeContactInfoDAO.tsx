import api from '../../services/apiDailyBakery'
import ChangeContactInfoDAOInterface from '../../Interfaces/ChangeContactInfoDAOInterface';

export default async function changeContactInfoDAO(id: string, token: string, numero_celular?: string) {
  if (!numero_celular)
    throw "Número de celular não podem ser vazios."

  var data = {};
  console.log(numero_celular + 'DAO');
  
  if (numero_celular && id) {
    data = {
      _id: id,
      numero_celular: '55' + numero_celular
    }
  }

  let obj: ChangeContactInfoDAOInterface = {}

  await api({
    method: 'put', //you can set what request you want to be
    url: '/userUpdatePhoneNumber',
    data,
    headers: {
      'x-auth-token': token
    }
  }).catch(error => {
    console.log(error.response.data.message ? error.response.data.message : error.response.data.error)
    obj = {
      error: error.response.data.message ? error.response.data.message : error.response.data.error
    }
    return obj;
  });

  return obj;
}

