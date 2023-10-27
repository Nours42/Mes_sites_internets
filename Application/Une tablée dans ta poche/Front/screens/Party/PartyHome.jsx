import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";

import { styles } from '../styles'
import { selectUser } from "../../slices/userSlice";
import { useState } from 'react';

const PartyHome = (props) => {

    const user = useSelector(selectUser);
    const [msg, setMsg] = useState(null)
    console.log(user)

    const goToAllParty = () =>{
        props.navigation.navigate("AllParty")
    }

    const goToMyParty = () => {
        props.navigation.navigate("MyParty")
    }

    const AddParty = () => {
        props.navigation.navigate("AddParty")
    }    

    const HowTo = () => {
        props.navigation.navigate("HowTo")
    } 

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Voulez vous :</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    HowTo()
                }}
            >
                <Text style={styles.buttonText}>Comment ca marche ?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    goToAllParty()
                }}
            >
                <Text style={styles.buttonText}>Voir toutes les tablées</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    goToMyParty()
                }}
            >
                <Text style={styles.buttonText}>Voir seulement mes parties</Text>
            </TouchableOpacity>
            {user.infos.MJ === 1 ? <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    AddParty()
                }}
            >
                <Text style={styles.buttonText}>Créer une nouvelle tablée</Text>
            </TouchableOpacity> : <TouchableOpacity
                style={styles.buttonInactif}
                onPress={() => {
                    setMsg("Vous n'êtes pas inscrite en tant que MJ")
                }}
            >
                <Text style={styles.buttonTextInactif}>Créer une nouvelle tablée</Text>
                {msg !== null && <Text style={styles.textblack}>{msg}</Text>}
            </TouchableOpacity>}
        </View>
    )
}

export default PartyHome