import api from '../../services/api'
import BakeryInterfaceDAO from '../../Interfaces/BakeryInterfaceDAO';

export default async function findByLatitudeAndLongitude(latitude: Number, longitude: Number){
    let bakeries : BakeryInterfaceDAO[] = [];
     
    if(!longitude || !latitude)
        return bakeries;

    await api({
        method: 'get',
        url: '/listByLocation',
        params: {
            latitude: latitude,
            longitude: longitude
        },
      }).then(response =>{
        bakeries = response.data.padarias;
        return bakeries 
    }).catch(error => {
        console.log(error.response.data.message ? error.response.data.message : error.response.data.error)

        return bakeries       
    }); 
    
    return bakeries;
}

export async function findBakeryByName(bakeryName: String){
    let bakeries : BakeryInterfaceDAO[] = [];
     
    if(!bakeryName)
        return bakeries;

    await api({
        method: 'get',
        url: '/listBakeryByName',
        params: {
            nome: bakeryName
        },
      }).then(response =>{
        bakeries = response.data.padarias;
    }).catch(error => {
        console.log(error.response.data.message ? error.response.data.message : error.response.data.error)
    }); 
    
    return bakeries;
}