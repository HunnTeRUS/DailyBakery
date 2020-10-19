import RegisterInterface from '../../Interfaces/RegisterInterface'
import findPhone from '../../dao/RegisterDAO/FindPhoneDAO'

export default async function doLoginServices(phone: String) {
    if (!phone) {
        throw "Número de telefone dever ser preenchido";
    }
    
    let obj : RegisterInterface = {}

    await findPhone(phone).then(response => {
        obj = response;
    })

    return obj;
}