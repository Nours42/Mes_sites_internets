import React, { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import { useIsFocused } from '@react-navigation/native';

import { styles } from '../styles'
import { selectUser } from "../../slices/userSlice"; 
import { deleteOneParty, desinscription, getAllPartyByCreator } from '../../api/party';

const MyParty = (props) => {

    const user = useSelector(selectUser);
    const user_key_id = user.infos.key_id;
    //console.log(user)
    const [list, setList] = useState([]);
    const [listMJ, setListMJ] = useState([]);
    const [msg, setMsg] = useState(null);
    const [modifyOK, setmodifyOK] = useState(false);
    const IsFocused = useIsFocused()
    

    useEffect(()=>{
        setList(user.infos.party);
        getAllPartyByCreator(user_key_id)
        .then((res)=>{
            //console.log(res);
            setListMJ(res.result);
        })
        .catch((err)=>{setMsg(err)})
    }, [IsFocused]);



    const Delete = (game_id) =>{
        setMsg("partie supprimée")
        deleteOneParty(game_id)
        .then((res)=>{
            if (res.status === 200) {
                getAllPartyByCreator(user_key_id)
                    .then((res) => {
                        //console.log(res);
                        setListMJ(res.result);
                    })
                    .catch((err) => { setMsg(err) })
                }})
        .catch((err)=>{setMsg(err)})
    }

    const Desinscription = (game_id, user_key_id) =>{
        setMsg("Vous vous êtes désincrite")
        desinscription(game_id, user_key_id)
    }

    const Modify = (game_id) =>{
        props.navigation.navigate("EditParty", {game_id: game_id})
    }

    const GoBack = () => {
        props.navigation.goBack()
    }

    return (
    <View style={styles.container}>
        {IsFocused ? <Text>focused</Text>:<Image source={{ uri: 'https://gobelin.tech/favicon1024.png' }} style={styles.image} />}
        {modifyOK === false ?
        <View style={styles.container}>
            
            <Text style={styles.title}>Liste des parties où je suis inscrite</Text>
            {list.length > 0 ? <ScrollView style={styles.containerListBlue}>
                {list.map((Party)=>{
                    return (<View
                        style={styles.itemParty}
                        key={Party.id}
                        >
                        <Text style={styles.textblackbold}>{Party.name}</Text>
                        <Text style={styles.textblack}>{Party.description}</Text>
                        <Text style={styles.textblack}>Nombre de joueuses inscrites : {Party.nbrPlayersOn} / {Party.nbrPlayersMax}</Text>
                        <Text style={styles.textblack}>Age Minimum demandé : {Party.ageMin}</Text>
                        <Text style={styles.textblack}>Pitch : {Party.description}</Text>
                        <Text style={styles.textblack}>Cette partie commence le {Party.dayBegin} à {Party.timeBegin}h</Text>
                        <Text style={styles.textblack}>Cette partie termine le {Party.dayEnd} à {Party.timeEnd}h</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                Desinscription(Party.id, user_key_id)
                                setmodifyOK(true)
                            }}
                        >
                            <Text style={styles.buttonText}>Se désinscrire de la tablée</Text>
                        </TouchableOpacity>
                        </View>)
                })}
                </ScrollView> : <Text style={styles.text}>Vous n'êtes pas encore inscrit sur une tablée</Text>}
            {user.infos.MJ === 1 ? <View style={styles.container}><Text style={styles.title}>Liste des parties que j'ai crée</Text>
                {listMJ.length > 0 ? <ScrollView style={styles.containerListRed}>
                    {listMJ.map((PartyMJ) => {
                        return (<View
                            style={styles.itemParty}
                            key={PartyMJ.id}
                        >
                            <Text style={styles.textblackbold}>{PartyMJ.name}</Text>
                            <Text style={styles.textblack}>{PartyMJ.description}</Text>
                            <Text style={styles.textblack}>Nombre de joueuses inscrites : {PartyMJ.nbrPlayersOn} / {PartyMJ.nbrPlayersMax}</Text>
                            <Text style={styles.textblack}>Age Minimum demandé : {PartyMJ.ageMin}</Text>
                            <Text style={styles.textblack}>Pitch : {PartyMJ.description}</Text>
                            <Text style={styles.textblack}>Cette partie commence le {PartyMJ.dayBegin} à {PartyMJ.timeBegin}h</Text>
                            <Text style={styles.textblack}>Cette partie termine le {PartyMJ.dayEnd} à {PartyMJ.timeEnd}h</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    Modify(PartyMJ.id)
                                }}
                            >
                                <Text style={styles.buttonText}>Modifier la tablée</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    Delete(PartyMJ.id)
                                    setmodifyOK(true)
                                    console.log(PartyMJ)
                                }}
                            >
                                <Text style={styles.buttonText}>supprimer la tablée</Text>
                            </TouchableOpacity>
                        </View>)
                    })}
                </ScrollView> : <Text style={styles.text}>Vous n'avez pas encore créer de tablée</Text>}</View>
            :<View></View>
            }
            
        </View> : <View style={styles.container}>
            {msg !== null && <Text>{msg}</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    GoBack()
                }}
            >
                <Text style={styles.buttonText}>Retourner au menu précédent</Text>
            </TouchableOpacity>
        </View>}
    </View>
    )
}

export default MyParty