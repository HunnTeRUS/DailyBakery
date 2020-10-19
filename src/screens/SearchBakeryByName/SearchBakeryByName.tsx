import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles'
import ModalPopupInfos from '../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos';
import ModalPopupLoading from '../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading';
import ModalPopupWarns from '../../components/ModalPopup/ModalPopupWarn/ModalPopupWarns'
import ModalPopupInterrogs from '../../components/ModalPopup/ModalPopupInterrog/ModalPopupInterrogs'
import { ScrollView } from 'react-native-gesture-handler';
import NotificationPhone from '../../../assets/svgs/NotificationPhone';
import Baker from '../../../assets/svgs/Baker';
import { getBakeryByName } from '../../services/MapServices/MapServices';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import NotFound from '../../../assets/svgs/NotFound';

interface Search{
    bakeryName: String
}

export default function SearchBakeryByName() {
    const navigation = useNavigation();
    const [show, setShow] = React.useState(false);
    const [showWarn, setShowWarn] = React.useState(false);
    const [showLoading, setShowLoading] = React.useState(false)
    const [showAsk, setShowAsk] = React.useState(false)
    const [bakeryName, setBakeryName] = React.useState("")
    const [bakeries, setBakeries] = React.useState<BakeryInterface[]>([])

    const route = useRoute();
    const routeParams : Search= route.params as Search;

    React.useEffect(() => {
        setBakeryName(String(routeParams.bakeryName))
        loadBakeryByName(String(routeParams.bakeryName))
    }, [])

    async function loadBakeryByName(text: String) {
        if (!text) { 
            let bakeries: BakeryInterface[] = [];
            setBakeries(bakeries)
        }
        if (text) {
            await getBakeryByName(text).then(response => {
                setBakeries(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    return (
        <View style={styles.container}>
            {!show ? <></> : <ModalPopupInfos onPressCloseButton={() => { navigation.navigate('BottomTabNavigator') }}
                textToShow='Sua senha foi alterada com sucesso!' showModal={show} setShow={setShow} />}
            {!showWarn ? <></> : <ModalPopupWarns functionToButton={() => { }} textToShow={""} showModal={showWarn} setShow={setShowWarn} />}
            {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
            {!showAsk ? <></> : <ModalPopupInterrogs functionToYesButton={() => { }} textToTitle='Padaria do Yuri gay'
                textToShow='Deseja ser notificado sobre esta padaria?' showModal={showAsk} setShow={setShowAsk} />}

            <View style={[styles.searchForm]}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar padarias por nome..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    value={bakeryName}
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setBakeryName(text)
                    }}
                />
                <TouchableOpacity onPress={() => { loadBakeryByName(bakeryName) }} style={styles.loadButton}>
                    <MaterialIcons name="my-location" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.secondContainer}>
                {bakeries.length === 0 ?
                    <View style={styles.notFoundContainer}>
                        <NotFound widthImage={250} heightImage={250}/>
                        <Text style={styles.notFoundText}>Nenhum resultado encontrado!</Text>
                    </View>
                    : <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
                        {bakeries.map(bakery => (
                            <TouchableOpacity key={bakery._id} onPress={() => {navigation.navigate("BottomTabNavigator", {bakery})}} style={styles.beNotifiedContainer}>
                                <View style={styles.notificationIconContainer}>
                                    <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
                                </View>
                                <View style={styles.notificationTextContainer}>
                                    <Text style={styles.notificationAlertText}>
                                        {bakery.nome}
                                    </Text>
                                    <Text style={styles.notificationInfoText}>
                                        Clique aqui para ver mais informações!
                            </Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={25} style={styles.arrow} />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>}

            </View>


        </View>
    );
}
