import { AsyncStorage } from "react-native";
import UserInterface from "../Interfaces/UserInterface";

export default async function getLoggedUser(){
    let objUser : UserInterface = {};
    var i;

    const user = await AsyncStorage.getItem('loggedUser');
    
    if(user)
        return JSON.parse(user) as UserInterface;

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

export async function removeLoggedUser(){
    await AsyncStorage.removeItem('loggedUser')
}