import favoriteBakery, { unFavoriteBakery } from '../../dao/FavoriteBakeryDAO/FavoriteBakeryDAO';
import BakeryInterface from '../../Interfaces/BakeryInterface';
import getLoggedUser, { setAndChangeLoggedUser } from '../../utils/LoggedUser';

export default async function favoriteBakeryServices(bakeryId: String) {
    if (!bakeryId) {
        throw "ID da padaria nao pode ser vazio";
    }

    let bakeries : BakeryInterface[] = [];
    const loggedUser = await getLoggedUser();
    await favoriteBakery(loggedUser._id ? loggedUser._id : "", bakeryId, loggedUser.token ? loggedUser.token : "")
        .then(response => {
            bakeries = response
            return bakeries
        });
    return bakeries
}

export async function unFavoriteBakeryServices(bakeryId: String) {
    if (!bakeryId) {
        throw "ID da padaria nao pode ser vazio";
    }

    let bakeries : BakeryInterface[] = [];
    const loggedUser = await getLoggedUser();
    await unFavoriteBakery(loggedUser._id ? loggedUser._id : "", bakeryId, loggedUser.token ? loggedUser.token : "")
        .then(response => {
            bakeries = response
            return bakeries
        });
    return bakeries
}