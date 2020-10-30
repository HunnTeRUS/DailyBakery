import favoriteBakery, { unFavoriteBakery } from '../../dao/FavoriteBakeryDAO/FavoriteBakeryDAO';
import getLoggedUser, { setAndChangeLoggedUser } from '../../utils/LoggedUser';

export default async function favoriteBakeryServices(bakeryId: String) {
    if (!bakeryId) {
        throw "ID da padaria nao pode ser vazio";
    }

    const loggedUser = await getLoggedUser();
    await favoriteBakery(loggedUser._id ? loggedUser._id : "", bakeryId, loggedUser.token ? loggedUser.token : "")
        .then(response => {
            if (response.error === "" || response.error === undefined || response.error === null) {
                loggedUser.favoritos = response.favoritos;
                setAndChangeLoggedUser(loggedUser);
            }

            return response
        });
}

export async function unFavoriteBakeryServices(bakeryId: String) {
    if (!bakeryId) {
        throw "ID da padaria nao pode ser vazio";
    }

    const loggedUser = await getLoggedUser();
    await unFavoriteBakery(loggedUser._id ? loggedUser._id : "", bakeryId, loggedUser.token ? loggedUser.token : "").then(response => {
        if (response.error === "" || response.error === undefined || response.error === null) {
            loggedUser.favoritos = response.favoritos;
            setAndChangeLoggedUser(loggedUser);
        }

        return response
    });
}