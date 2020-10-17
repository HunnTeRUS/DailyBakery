import { AsyncStorage } from "react-native";
import UserInterface from "../Interfaces/UserInterface";

export default async function getLoggedUser(){
    let objUser : UserInterface = {};
    let user;
    var i;

    for(i = 0; i<3; i++)
        user = await AsyncStorage.getItem('loggedUser');
    
    if(user)
        objUser = JSON.parse(user) as UserInterface;

    return objUser;
}

export async function setAndChangeLoggedUser(obj: UserInterface){
    const objResponse = await AsyncStorage.getItem('loggedUser'); 
    
    if(objResponse) {
        await AsyncStorage.removeItem('loggedUser')
        await AsyncStorage.setItem('loggedUser', JSON.stringify(obj));
    }

    else{
        await AsyncStorage.setItem('loggedUser', JSON.stringify(obj));
    }
}

export async function removeLoggedUser(indexId: string){
    const objResponse = await AsyncStorage.getItem(indexId); 

    if(objResponse) {
        await AsyncStorage.removeItem(indexId)
    }
}