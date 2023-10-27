import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles'


const TWdef = (props) => {

    const GoBack = () => {
        props.navigation.goBack()
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Triggers Warning</Text>
                <View style={styles.textblackwithwhiteback}>
                <Text style={styles.textblack}>les TW ou triggers warning (éléments déclencheurs en français) sont les sujets qui vous mettent mal à l'aise.</Text>
                <Text style={styles.textblack}>Que ce soit une <Text style={styles.textblackbold}>Ligne</Text> à ne pas franchir ou un sujet sur lequel on dépose un <Text style={styles.textblackbold}>Voile</Text> et dont on approfondit pas la scène.</Text>
                <Text style={styles.textblack}>Vous avez la possibilité de faire la liste des sujets qui éveillent chez vous un mal-être et celui-ci sera transmis à votre MJ sans lui révéler qui lui a demandé de ne pas parler de tel ou tel sujet et ce afin de ne pas être juger sur ceux-ci.</Text>
                <Text style={styles.textblack}>Attention, certains sujets peuvent vous paraître futiles mais être important pour les personnes concernées.</Text>
                <Text style={styles.textblack}>Merci de rester bienveillants envers ces sujets et de ne pas faire de plaisanteries déplacées.
                {'\n'}
                {'\n'}
                </Text>
                <Text style={styles.textblack}><Text style={styles.textblackbold}>Ligne : </Text> C'est un sujet qui ne doit pas être ni abordé ni évoqué.</Text>
                <Text style={styles.textblack}><Text style={styles.textblackbold}>Voile : </Text> C'est un sujet qui peut être abordé mais sur lequel la narration ne s'arretera pas pour en décrire les détails</Text>
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
        </ScrollView>
    )
}

export default TWdef