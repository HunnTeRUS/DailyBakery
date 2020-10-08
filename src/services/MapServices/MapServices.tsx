import findByLatitudeAndLongitude from '../../dao/MapDAO/MapDAO'
import BakeryInterface from '../../Interfaces/BakeryInterface';
import getDtoFromDao from '../../utils/BakeryDAOtoDTO'

export default async function getBakeriesByLatitudeAndLongitude(latitude: Number, longitude: Number) {
    let bakeries : BakeryInterface[] = [];
    let i;

    if(latitude || longitude){
        await findByLatitudeAndLongitude(latitude, longitude)
            .then(response => {

            for(i = 0; i < response.length; i++) {
                bakeries.push(getDtoFromDao(response[i]));
            }
        })
    }

    return bakeries;
}