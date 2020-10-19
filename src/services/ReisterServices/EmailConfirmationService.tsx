import RegisterInterface from '../../Interfaces/RegisterInterface'
import findEmail from '../../dao/RegisterDAO/FindEmailDAO'

export default async function emailConfirmationService(email: String) {
    if (!email) {
        throw "E-mail dever ser preenchido";
    }
    
    let obj : RegisterInterface = {}

    await findEmail(email).then(response => {
        obj = response;
    })

    return obj;
}