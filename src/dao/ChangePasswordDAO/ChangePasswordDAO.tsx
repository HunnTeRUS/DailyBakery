import api from '../../services/apiDailyBakery'
import ChangePasswordDAOInterface from '../../Interfaces/ChangePasswordDAOInterface'

export default async function changePasswordDAO(email: string, _id: string, newPass: string) {
    if (!email || !_id || !_id) {
        throw "Todos os dados tem ser ser preenchidos.";
    }

    let obj : ChangePasswordDAOInterface = {}

    await api.put('/userUpdatePassword', {
        email: email,
        _id: _id,
        novaSenha: newPass
    }).catch(error=> {
        console.log(error.response.data.message ? error.response.data.message : error.response.data.error)
        obj = {
            error: error.response.data.message ? error.response.data.message : error.response.data.error
        }
    });

    return obj
    
}
