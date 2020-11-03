import { useState } from 'react';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import getLoggedUser, { setAndChangeLoggedUser } from '../../utils/LoggedUser';
import getBakeriesByIdList from '../BakeryServices/BakeryServices'

export default async function addRecentBakery(bakeryId: String) {
    if (!bakeryId) {
        throw "ID da padaria nao pode ser vazio";
    }

    var loggedUser = await getLoggedUser();
    const recents = loggedUser.recentes;
    console.log(loggedUser)
    const listLength = recents?.length ? recents?.length : 0;
    let exists = false;

    //Caso 1: Lista não existir pq nao conseguiu pegar do usuario logado
    //Caso 2: Lista existir mas estar vazia ou não estar cheia
    //Caso 3: Lista existir mas estar cheia
    //Caso 4: Lista existir, não estar vazia e existir uma padaria com o id recebido por parametro
    //Caso 5: Lista existir, nãoe estar vazia e não existir uma padaria com o id recebido por parametro
    //Caso 6: Lista existir, estar lotada e ter uma padaria com o id recebido por parametro
    //Caso 7: Lista existir, estar lotada e nao existir uma padaria com o id recebido por parametro
    if(recents) {
        //Verificar se a lista esta vazia
        if(listLength > 0) {
            //Pega o primeiro valor do vetor de recentes e a data de implementação dele na lista
            const [higherTime, setHigherTime] = useState(
                {time: recents[0].implementationDate.getTime(),
                listPosition: 0});
            
            //Verifica se ja existe uma padaria com este id dentro da lista
            for(let i = 0; i<recents?.length; i++) {
                if(recents[i]._id === bakeryId) {
                    exists = true;
                }
            }

            //Se ja existir uma padaria com este id na lista, apenas retorna
            if(exists)
                return recents

            //Verifica se a lista esta lotada
            if(recents.length === 10) {
                //Itera a lista procurando qual a padaria que tem a maior diferença de tempo entre a data de implementação
                //e a data de hoje
                for(let i = 0; i<recents?.length; i++) {
                    if(higherTime.time < (Date.now() - recents[i].implementationDate.getTime())) {
                        setHigherTime({
                            time: Date.now() - recents[i].implementationDate.getTime(),
                            listPosition: i
                        })
                    }                   
                }

                //A padaria com a data mais antiga, ele substitui pela nova padaria e retorna
                recents[higherTime.listPosition] = {
                    _id: bakeryId,
                    implementationDate: new Date()
                }
                
                loggedUser.recentes = recents;
                setAndChangeLoggedUser(loggedUser)
                console.log(loggedUser)

                return recents; 
            }
        }
        //Se a lista tiver vazia, so insere e retorna
        console.log(loggedUser)

        recents.push({_id: bakeryId, implementationDate: new Date()});
        loggedUser.recentes = recents;
        setAndChangeLoggedUser(loggedUser)
    }
    console.log(loggedUser)

    return recents;    
}

export async function getRecentBakeries(){
    var loggedUser = await getLoggedUser();
    const recents = loggedUser.recentes;
    var bakeries : BakeryInterface[] = [];
    var ids : Array<string> = [];

    if(recents) {
        for(let i = 0; i<recents?.length; i++) {
            ids.push(String(recents[i]._id));
        }

        await getBakeriesByIdList(ids).then(response => {
            bakeries = response
            return bakeries;
        }).catch(error => {
           console.log(error)
           return bakeries 
        });
    } else 
        return bakeries;

}