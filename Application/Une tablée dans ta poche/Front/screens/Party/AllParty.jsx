import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import { useIsFocused } from '@react-navigation/native';

import { styles } from '../styles'
import { selectUser } from "../../slices/userSlice"; 
import { getAllPartys } from '../../api/party';




const AllParty = (props) => {

    const user = useSelector(selectUser);
    console.log(user)
    const user_key_id = user.infos.key_id
    const [list, setList] = useState([]);
    const [userPartyListID, setUserPartyListID] = useState([]);
    const IsFocused = useIsFocused()

    
    useEffect(()=>{
        getAllPartys()
            .then((res) => {
                
                //console.log(user.infos.party)
                for (let i = 0; user.infos.party.length > i; i++) {
                    userPartyListID.push(user.infos.party[i].id)
                    console.log("userPartyListID", userPartyListID)
                }
                setList(res.result);
            })
            .catch((err) => { console.log(err) });
        
    }, [IsFocused]);

    const Modif = (game_id) =>{
        console.log("tu essais de modifier ?")
        //props.navigation.navigate("EditParty", { game_id: game_id })
    }

    const Desinscription = (game_id) => {
        console.log("tu essais de te désinscrire ?")
        //props.navigation.navigate("EditParty", { game_id: game_id })
    }

    const Delete = (game_id) =>{//ouverture d'une page de confirmation contenant l'user_key_id et le game_id
        console.log("tu essais de delete ?")
    }

    const DetailsParty = (game_id)=>{
        props.navigation.navigate("DetailsParty", { game_id: game_id })
        //console.log("tu veux voir les détails de la partie")
    }

    
    //console.log(user.infos.party)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des parties</Text>
            
            {list.length > 0 ? <ScrollView style={styles.containerList}>
                {list.map((Party)=>{
                    return (<View
                        key={Party.id}
                        >
                            <View style={styles.title2}>
                                <Text style={styles.textblackbold}>{Party.name}</Text>
                                <Text style={styles.textblack}>{Party.description}</Text>
                                <Text style={styles.textblack}>{Party.nbrPlayersOn} / {Party.nbrPlayersMax}</Text>
                            
                                {Party.creator_id !== user_key_id ?
                                <View style={styles.title2}>
                                    {/*console.log("toutes les parties",list,"user party",userPartyListID,"id de la partie",Party.id,'rechercher de id dans la liste',userPartyListID.includes(Party.id))*/}
                                    {userPartyListID.includes(Party.id) === false ?
                                        <View style={styles.container}>
                                            <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                    DetailsParty(Party.id)
                                                }}
                                            >
                                                <Text style={styles.buttonText}>Lire les informations de la partie</Text>
                                            </TouchableOpacity>
                                        </View> : <View style={styles.container}>
                                            <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                    Desinscription(Party.id)
                                                }}
                                            >
                                                <Text style={styles.buttonText}>Se désinscrire de la partie</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                </View> : <View style={styles.container}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => {
                                            Modif(Party.id)
                                        }}
                                    >
                                        <Text style={styles.buttonText}>Modifier la partie</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => {
                                            Delete(Party.id)
                                        }}
                                    >
                                        <Text style={styles.buttonText}>Supprimer la partie</Text>
                                    </TouchableOpacity>
                                </View>
                                }
                            </View>
                        </View>)
                })}
            </ScrollView> : <Text style={styles.text}>Il n'y a pas de tablées déclarées</Text>}
        </View>
        
    )
}

export default AllParty