import RegisterInterface from '../../Interfaces/RegisterInterface'
import registerDAO from '../../dao/RegisterDAO/RegisterDAO';

export default async function doLoginServices(name: String, phone: String, password: String, email: String) {
    if (!phone || !name || !password || !email) {
        throw "Número de telefone dever ser preenchido";
    }
    
    let obj : RegisterInterface = {}

    await registerDAO(name, phone,  password, email).then(response => {
        obj = response;
    })

    return obj;
}