import api from '../../services/apiDailyBakery'
import UserInterface from '../../Interfaces/UserInterface';

export default async function verifyToken(email: String, token: string){
    let obj : UserInterface = {}

    if(!token)
        return obj;
    
    await api.post(`/verifyToken`, {
        token: token,
        email: email
    }).then(response =>{
        obj =  {
            _id: response.data?._id,
            nome: response.data?.nome,
            email: response.data?.email,
            senha: response.data?.senha,
            numero_celular: response.data?.numero_celular,
            token: token,
            favoritos: response.data.favoritos,
            recentes: response.data.recentes,
          }

          return obj 
    }).catch(error => {
        console.log(error.response.data.message ? error.response.data.message : error.response.data.error)
        obj =  {
            error: error.response.data.message ? error.response.data.message : error.response.data.error 
        }
        return obj       
    }); 
    return obj;
}