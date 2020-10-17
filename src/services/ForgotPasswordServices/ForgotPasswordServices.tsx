import sendVerificationEmail from '../../dao/ForgotPasswordDAO/ForgotPasswordDAO'
import ForgotPasswordDAOInterface from '../../Interfaces/ForgotPasswordDAOInterface';

export default async function sendVerificationEmailServices(email: string) {
    if(!email) {
        throw "Email não pode ser vazio";
    }

    let obj : ForgotPasswordDAOInterface = {};

    await sendVerificationEmail(email).then(response => {
        obj = response;
    });

    return obj;
}