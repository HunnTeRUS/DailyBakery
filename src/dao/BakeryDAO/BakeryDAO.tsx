import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import api from '../../services/api'

export default async function listBakeriesByIds(idList: Array<string>) {
    if (!idList) {
        throw "Lista de ids não pode ser vazia";
    }

    var objectFavorite : BakeryInterface[] = []

    const data = {
        idList: idList,
    }

    await api({
        method: 'post', //you can set what request you want to be
        url: '/listBakeryByListIds',
        data,
    }).then(response => {
        console.log(response.data)

        objectFavorite = response.data

        return objectFavorite
    }).catch(error => {
        console.log(error.response.data.message ? error.response.data.message : error.response.data.error)

        const newObject : BakeryInterface = {}

        newObject.error = error.response.data.message ? error.response.data.message : error.response.data.error;

        objectFavorite.push(newObject)

        return objectFavorite
    });

    return objectFavorite;
}