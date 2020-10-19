import UserInterface from '../../Interfaces/UserInterface'
import doLogin from '../../dao/LoginDAO/LoginDAO'

export default async function doLoginServices(email: String, password: String) {
    if (!email) {
        throw "CNPJ dever ser preenchido";
    } else if (!password) {
    throw "Senha dever ser preenchida";
    }
    
    let obj : UserInterface = {}

    await doLogin(email, password).then(response => {
        obj = response;
    })

    return obj;
}