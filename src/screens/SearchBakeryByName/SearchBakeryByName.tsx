import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import { getBakeryByName } from '../../services/MapServices/MapServices';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import NotFound from '../../../assets/svgs/NotFound';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

interface Search{
    bakeryName: String
}

export default function SearchBakeryByName() {
    const navigation = useNavigation();
    const [bakeryName, setBakeryName] = React.useState("")
    const [bakeries, setBakeries] = React.useState<BakeryInterface[]>([])
    const [loading, setLoading] = React.useState(false)
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
        else if (text) {
            setLoading(true)
            await getBakeryByName(text).then(response => {
                setLoading(false)
                setBakeries(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    function renderComponents(){
        if(loading){
            return (
            <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
            <View style={styles.beNotifiedContainer}>
              <View style={styles.notificationIconContainer}>
                <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
              </View>
              <ShimmerPlaceHolder style={styles.loaderContainer} autoRun={true} visible={false} />
            </View>
            <View style={styles.beNotifiedContainer}>
              <View style={styles.notificationIconContainer}>
                <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
              </View>
              <ShimmerPlaceHolder style={styles.loaderContainer} autoRun={true} visible={false} />
            </View>
          </ScrollView>)
        }
        else if(!loading && bakeries.length === 0){
            return (
                <View style={styles.notFoundContainer}>
                    <NotFound widthImage={250} heightImage={250}/>
                    <Text style={styles.notFoundText}>Nenhum resultado encontrado!</Text>
                </View>
            )
        }
        else {
            return (
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
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
            </ScrollView>)
        }
    }

    return (
        <View style={styles.container}>
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
                {renderComponents()}
            </View>


        </View>
    );
}
