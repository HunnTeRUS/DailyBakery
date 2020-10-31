import changeContactInfoDAO from '../../dao/ChangeContactInfoDAO/ChangeContactInfoDAO'
import getLoggedUser from '../../utils/LoggedUser';
import ChangeContactInfoDAOInterface from '../../Interfaces/ChangeContactInfoDAOInterface';

export default async function changeContactInfoServices(numero_celular: string) {
    let objResponse: ChangeContactInfoDAOInterface = {};

    if (!numero_celular){
        objResponse.error = "Número de celular não pode ser vazio"
        return objResponse;
    }
    
    const obj = await getLoggedUser();

    if(obj?.id_user && obj?.token)
        await changeContactInfoDAO(obj.id_user ? obj.id_user : "", obj.token ? obj.token : "", numero_celular)
        .then(response => {
            objResponse = response;
        });
    
    else {
        objResponse.error = "Não foi possivel recuperar o usuario logado";
        return objResponse;
    }

    return objResponse;
}