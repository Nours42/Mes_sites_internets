import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";


const Howto = (props) =>{

    const GoBack = () => {
        props.navigation.goBack()
    }


return (
    <View style={styles.container}>
        <Text style={styles.title}>Comment ca marche ?</Text>
        <View style={styles.textblackwithwhiteback}>
            <Text style={styles.textblack}>Vous pouvez vous inscrire à la partie qui vous plaît à quatre conditions</Text>
            <Text style={styles.textblack}>Que vous soyez libre à cette heure là</Text>
            <Text style={styles.textblack}>Que vous ne soyez pas le créateur de la partie</Text>
            <Text style={styles.textblack}>Que vous ayez l'age requis</Text>
            <Text style={styles.textblack}>Qu'il reste de la place'</Text>
            <Text style={styles.textblack}>L'application se charge de vérifier tout cela et rejettera votre inscription si au moins l'une de ces conditions l'en empêche</Text>
            <Text style={styles.textblack}>Merci d'être présent à l'heure de la partie au lieu qui vous sera indiqué à l'accueil.
                {'\n'}
                {'\n'}
            </Text>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                GoBack()
            }}
        >
            <Text style={styles.buttonText}>Retour au menu précédent</Text>
        </TouchableOpacity>
    </View>
)
}

export default Howto