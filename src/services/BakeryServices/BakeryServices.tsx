import BakeryInterface from '../../Interfaces/BakeryInterface';
import listBakeriesByIds from '../../dao/BakeryDAO/BakeryDAO'

export default async function getBakeriesByIdList(idList: Array<string>) {

    let bakeries : BakeryInterface[] = [];
    
    await listBakeriesByIds(idList)
        .then(response => {
            bakeries = response
            return bakeries
        });

    return bakeries
}