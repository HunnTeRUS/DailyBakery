import VerifyTokenDao from '../../dao/VerifyTokenDAO/VerifyTokenDao'
import UserInterface from '../../Interfaces/UserInterface';
import getLoggedUser from '../../utils/LoggedUser';

export default async function verifyToken() {

    let objResponse : UserInterface = {};

    const obj = await getLoggedUser();

    console.log(obj)

    if(obj.token && obj.email){
        await VerifyTokenDao(obj.email, obj.token)
            .then(response => {
                objResponse = response;
        })
    }

    return objResponse;
}