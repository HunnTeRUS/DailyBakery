import ChangePasswordDAOInterface from '../../Interfaces/ChangePasswordDAOInterface';
import changePasswordDAO from '../../dao/ChangePasswordDAO/ChangePasswordDAO'

export default async function changePasswordServices(email: string, id: string, newPass: string) {
    if(!id || !email || !newPass) {
        throw "Não podem existir campos vazios";
    }

    let obj : ChangePasswordDAOInterface = {}

    await changePasswordDAO(email, id, newPass).then(response=>{
        obj = response;
    });

    return obj
}