import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { styles } from '../styles';
import { selectUser } from "../../slices/userSlice";
import { updatePlayers } from '../../api/party';


const Inscription = (props) =>{

    const user = useSelector(selectUser);
    const [msg, setMsg] = useState(null);
    const [inscriptionImpossible, setInscriptionImpossible] = useState(false);

    let game_id = props.route.params.party.id;
    let user_key_id = user.infos.key_id;
    //console.log(game_id, props.route.params.party )


    const partyData = props.route.params.party
    
    
    useEffect(async()=>{
        await isCreator()
        //console.log(partyData, inscriptionImpossible)
    }, []);

    const isCreator = async () => {
        console.log("test pour comparer le créateur et l'id joueur", partyData)
        if (partyData.creator_id === user_key_id) {
            console.log("vous êtes le créateur")
            setMsg("vous êtes le créateur de cette partie, vous ne pouvez vous inscrire en tant que joueuse")
            setInscriptionImpossible(true);
        } else {
            //console.log("vous n'êtes pas le créateur, je vais maintenant vérifier que vous ne soyez pas déjà inscrite à cette partie")
            await Age()
        }
    }

    const Age = async () =>{
        console.log("vérification que la joueuse est l'age requis")
        if(user.infos.age < partyData.ageMin){
            console.log("vous n'avez pas l'age requis");
            setMsg("Vous n'avez pas l'age de vous inscrire à cette tablée")
            setInscriptionImpossible(true);
        } else {
            console.log("la joueuse a l'age requis")
            await dejaInscrit()
        }
    }

    const dejaInscrit = async () => {
        //console.log(partyData, user_key_id)
        console.log("test pour comparer si l'id joueur est déjà dans les id inscrits à la partie")
        if (partyData.id_player1 !== user_key_id) {
            if (partyData.id_player2 !== user_key_id) {
                if (partyData.id_player3 !== user_key_id) {
                    if (partyData.id_player4 !== user_key_id) {
                        if (partyData.id_player5 !== user_key_id) {
                            if (partyData.id_player6 !== user_key_id) {
                                if (partyData.id_player7 !== user_key_id) {
                                    if (partyData.id_player8 !== user_key_id) {
                                        console.log("l'id joueur est introuvable dans les joueurs déjà inscrits, poursuite du processus d'inscription")
                                        verifPlanning()
                                        //console.log(partyData, inscriptionImpossible)
                                    } else {
                                        console.log("vous êtes déjà inscrite sur cette partie")
                                        setMsg("vous êtes déjà l'une des joueuse de cette partie, vous ne pouvez vous inscrire à nouveau")
                                        setInscriptionImpossible(true);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    const verifPlanning = async () => {
        let i = user.infos.party.length;
        //console.log(i)
        if(i === 0){
            firstNull()
        }else {
        console.log("la joueuse est déjà inscrite sur des parties")
        i = i-1
        verifChqPartie(i);
        }
    }
    
    const verifChqPartie = async (i) => {
        console.log("je rentre dans verifChqPartie avec i = " + i)
        console.log("user.infos.party", user.infos.party)
        console.log("user.infos.party.length", user.infos.party.length)
        console.log("user.infos.party[i]", user.infos.party[i])
        console.log("partyData", partyData)
        if (partyData.dayBegin === user.infos.party[i].dayBegin) {
            console.log("la partie " + partyData.name + " est sur le même jour que la partie " + user.infos.party[i].name)
            if (partyData.timeBegin - user.infos.party[i].timeBegin < 0) {
                console.log("la partie " + partyData.name + " commence avant la partie de " + user.infos.party[i].name)
                //verif heure de fin compatible
                if (partyData.timeEnd - user.infos.party[i].timeBegin < 0) {
                    console.log("la partie " + partyData.name + " finit avant le début de la partie de " + user.infos.party[i].name)
                } else {
                    console.log("la partie " + partyData.name + " finit après le début de la partie de " + user.infos.party[i].name + ": rejet de l'inscription")
                    setMsg("vous êtes déjà inscrite sur une partie dont les horaires sont incompatibles avec celle-ci.")
                    setInscriptionImpossible(true);
                }
            } else {
                console.log("la partie " + partyData.name + " commence après la partie de " + user.infos.party[i].name)
                //verif que l'heure de fin de userparties[i] soit compatible
                if (user.infos.party[i].timeEnd - partyData.timeBegin < 0) {
                    console.log("la partie " + partyData.name + " finit avant la partie de " + user.infos.party[i].name)
                    if (i === 0) {
                        //la joueuse est libre sur tous les créneaux et on passe à l'inscription
                        firstNull()
                    } else {
                        i--;
                        console.log(i)
                        verifChqPartie(i);
                    }
                } else {
                    console.log("la partie " + partyData.name + " finit après la partie de " + user.infos.party[i].name + " : inscription rejetée")
                    setMsg("vous êtes déjà inscrite sur une partie dont les horaires sont incompatibles avec celle-ci.")
                    setInscriptionImpossible(true);
                }
            }
        } else {
            console.log("la joueuse est libre ce jour là")
            if (i === 0) {
                //la joueuse est libre sur tous les créneaux et on passe à l'inscription
                firstNull()
            } else {
                i--;
                console.log(i)
                verifChqPartie(i);
            }
        }
    }

    const firstNull = async () => {
        console.log("j'entre dans firstNull", game_id, user_key_id, partyData)
        let partyPlayers = {
            id_player1: null,
            id_player2: null,
            id_player3: null,
            id_player4: null,
            id_player5: null,
            id_player6: null,
            id_player7: null,
            id_player8: null,
        }
        //console.log("party player null: ", partyPlayers, "party data : ", partyData)
        if (partyData.id_player1 === null) {
            partyPlayers.id_player1 = user_key_id
            partyPlayers.id_player2 = partyData.id_player2
            partyPlayers.id_player3 = partyData.id_player3
            partyPlayers.id_player4 = partyData.id_player4
            partyPlayers.id_player5 = partyData.id_player5
            partyPlayers.id_player6 = partyData.id_player6
            partyPlayers.id_player7 = partyData.id_player7
            partyPlayers.id_player8 = partyData.id_player8
        } else {
            if (partyData.id_player2 === null) {
                partyPlayers.id_player1 = partyData.id_player1
                partyPlayers.id_player2 = user_key_id
                partyPlayers.id_player3 = partyData.id_player3
                partyPlayers.id_player4 = partyData.id_player4
                partyPlayers.id_player5 = partyData.id_player5
                partyPlayers.id_player6 = partyData.id_player6
                partyPlayers.id_player7 = partyData.id_player7
                partyPlayers.id_player8 = partyData.id_player8
            } else {
                if (partyData.id_player3 === null) {
                    partyPlayers.id_player1 = partyData.id_player1
                    partyPlayers.id_player2 = partyData.id_player2
                    partyPlayers.id_player3 = user_key_id
                    partyPlayers.id_player4 = partyData.id_player4
                    partyPlayers.id_player5 = partyData.id_player5
                    partyPlayers.id_player6 = partyData.id_player6
                    partyPlayers.id_player7 = partyData.id_player7
                    partyPlayers.id_player8 = partyData.id_player8
                } else {
                    if (partyData.id_player4 === null) {
                        partyPlayers.id_player1 = partyData.id_player1
                        partyPlayers.id_player2 = partyData.id_player2
                        partyPlayers.id_player3 = partyData.id_player3
                        partyPlayers.id_player4 = user_key_id
                        partyPlayers.id_player5 = partyData.id_player5
                        partyPlayers.id_player6 = partyData.id_player6
                        partyPlayers.id_player7 = partyData.id_player7
                        partyPlayers.id_player8 = partyData.id_player8
                    } else {
                        if (partyData.id_player5 === null) {
                            partyPlayers.id_player1 = partyData.id_player1
                            partyPlayers.id_player2 = partyData.id_player2
                            partyPlayers.id_player3 = partyData.id_player3
                            partyPlayers.id_player4 = partyData.id_player4
                            partyPlayers.id_player5 = user_key_id
                            partyPlayers.id_player6 = partyData.id_player6
                            partyPlayers.id_player7 = partyData.id_player7
                            partyPlayers.id_player8 = partyData.id_player8
                        } else {
                            if (partyData.id_player6 === null) {
                                partyPlayers.id_player1 = partyData.id_player1
                                partyPlayers.id_player2 = partyData.id_player2
                                partyPlayers.id_player3 = partyData.id_player3
                                partyPlayers.id_player4 = partyData.id_player4
                                partyPlayers.id_player5 = partyData.id_player5
                                partyPlayers.id_player6 = user_key_id
                                partyPlayers.id_player7 = partyData.id_player7
                                partyPlayers.id_player8 = partyData.id_player8
                            } else {
                                if (partyData.id_player7 === null) {
                                    partyPlayers.id_player1 = partyData.id_player1
                                    partyPlayers.id_player2 = partyData.id_player2
                                    partyPlayers.id_player3 = partyData.id_player3
                                    partyPlayers.id_player4 = partyData.id_player4
                                    partyPlayers.id_player5 = partyData.id_player5
                                    partyPlayers.id_player6 = partyData.id_player6
                                    partyPlayers.id_player7 = user_key_id
                                    partyPlayers.id_player8 = partyData.id_player8
                                } else {
                                    if (partyData.id_player8 === null) {
                                        partyPlayers.id_player1 = partyData.id_player1
                                        partyPlayers.id_player2 = partyData.id_player2
                                        partyPlayers.id_player3 = partyData.id_player3
                                        partyPlayers.id_player4 = partyData.id_player4
                                        partyPlayers.id_player5 = partyData.id_player5
                                        partyPlayers.id_player6 = partyData.id_player6
                                        partyPlayers.id_player7 = partyData.id_player7
                                        partyPlayers.id_player8 = user_key_id
                                    } else {
                                        setMsg(`erreur aucune place de libre sur la partie de ${partyData.name} ayant lieu entre le ${partyData.dayBegin} à ${partyData.timeBegin}h et le ${partyData.dayEnd} à ${partyData.timeEnd}h. Cette partie est peut-être victime de son succès.`)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        let data = partyPlayers
        let party_id = game_id
        await updatePlayers(data, party_id);
        setMsg(`Vous vous êtes bien inscrit sur la tablée ${partyData.name} ayant lieu entre le ${partyData.dayBegin} à ${partyData.timeBegin}h et le ${partyData.dayEnd} à ${partyData.timeEnd}h`)
    }
    
    const GoBack = () => {
        props.navigation.navigate("MyParty", { onGoBack: () => Refresh() })
    }
    

return (
    <View style={styles.container}>
        <Text style={styles.title}>S'inscrire</Text>
        {msg !== null &&    
            <View>
                <Text style={styles.textblack}>{msg}</Text>
                <Text style={styles.textblack}>Cliquez sur ce bouton pour revenir au menu précédent</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        GoBack()
                    }}
                >
                    <Text style={styles.buttonText}>Retourner au menu principal</Text>
                </TouchableOpacity>
            </View>}
    </View>
)
}

export default Inscription