import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";

import { styles } from '../styles'
import { selectUser } from "../../slices/userSlice"; 
import { getOnePartyById } from '../../api/party';

const DetailsParty = (props) => {

    const user = useSelector(selectUser);
    const user_key_id = user.infos.key_id
    const game_id = props.route.params.game_id;
    const [party, setParty] = useState([])
    //console.log(user)

    useEffect(()=>{
        getOnePartyById(game_id)
            .then((res) => {
                //console.log(res);
                setParty(res.result)
            })
            .catch((err) => { console.log(err) });
    }, []);

    const Inscription = (party, user_key_id) => {
        //console.log("tu essais de t'inscrire à la partie " + game_id + " et tu es l'user ayant le key_id " + user_key_id)
        props.navigation.navigate("Inscription", {party: party, user_key_id : user_key_id})
    }

    

    return (
        <View style={styles.container}>
            
            <Text style={styles.textblackbold}>{party.name}</Text>
            <Text style={styles.textblack}>{party.description}</Text>
            <Text style={styles.textblack}>Nombre de joueuses inscrites : {party.nbrPlayersOn} / {party.nbrPlayersMax}</Text>
            <Text style={styles.textblack}>Age Minimum demandé : {party.ageMin}</Text>
            <Text style={styles.textblack}>Pitch : {party.description}</Text>
            <Text style={styles.textblack}>Cette partie commence le {party.dayBegin} à {party.timeBegin}</Text>
            <Text style={styles.textblack}>Cette partie termine le {party.dayEnd} à {party.timeEnd}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    Inscription(party, user_key_id)
                }}
            >
            <Text style={styles.buttonText}>S'inscrire à la partie</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailsParty