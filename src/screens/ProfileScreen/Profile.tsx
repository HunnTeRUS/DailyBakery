import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import getLoggedUser from '../../utils/LoggedUser';

const Profile = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("") 

    useFocusEffect(() =>{
        const num = async () => {
            const obj = await getLoggedUser();
            setName(obj.nome ? obj.nome : "");
            setEmail(obj.email ? obj.email : "");
        }
        num();
    })

    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <Text style={styles.profileText}>PERFIL</Text>
                <View style={styles.userInfoContainer}>
                    <MaterialIcons style={styles.profileIcon} name="perm-identity" color="#FEC044" size={70} />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
                <TouchableOpacity style={styles.option} onPress={() => {navigation.navigate("ChangeContactInfo")}}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="contact-phone" size={30} style={styles.iconOption} color="white" />
                    </View>
                    <Text style={styles.textOption}>Atualizar dados de contato</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => {navigation.navigate("ChangeProfilePasswordScreen")}}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="vpn-key" size={30} style={styles.iconOption} color="white" />
                    </View>
                    <Text style={styles.textOption}>Trocar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => {navigation.navigate("HelpMe")}}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="help-outline" size={30} style={styles.iconOption} color="white" />
                    </View>
                    <Text style={styles.textOption}>Preciso de ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <View style={[styles.iconContainer]}>
                        <MaterialIcons name="power-settings-new" size={30} style={styles.iconOption} color="white" />
                    </View>
                    <Text style={styles.textOption}>Sair desta conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Profile;