import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import FavoritesInterface from '../../Interfaces/FavoritesInterface';
import api from '../../services/apiDailyBakery'

export default async function favoriteBakery(userId: String, bakeryId: String, userToken: String) {
    if (!userId) {
        throw "Id do usuario não pode ser vazio";
    }
    if (!bakeryId) {
        throw "Id da padaria não pode ser vazio";
    }

    var data = {
        _id: bakeryId,
    };

    var objectFavorite : BakeryInterface[] = []

    await api({
        method: 'post', //you can set what request you want to be
        url: '/insertNewFavoriteBakery',
        data,
        headers: {
            'x-auth-token': userToken
        },
        params: {
            _id: userId
        }
    }).then(response => {
        objectFavorite = response.data as BakeryInterface[]

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

export async function unFavoriteBakery(userId: String, bakeryId: String, userToken: String) {
    if (!userId) {
        throw "Id do usuario não pode ser vazio";
    }
    if (!bakeryId) {
        throw "Id da padaria não pode ser vazio";
    }

    var data = {
        _id: bakeryId,
    };

    var objectFavorite : BakeryInterface[] = []

    await api({
        method: 'delete', //you can set what request you want to be
        url: '/removeFavoriteBakery',
        data,
        headers: {
            'x-auth-token': userToken
        },
        params: {
            _id: userId
        }
    }).then(response => {
        objectFavorite = response.data as BakeryInterface[]

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