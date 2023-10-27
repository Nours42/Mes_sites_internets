import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from "react-redux";

import { styles } from '../styles'
import { selectUser } from "../../slices/userSlice"; 
import { deleteTW, getTWbyUser } from '../../api/TW';

const MyTW = (props) => {

    const user = useSelector(selectUser);
    const user_id = user.infos.id
    const [TWList, setTWList] = useState([]);
    const [msg, setMsg] = useState(null);

    const recupTW = (user_id) => {
        getTWbyUser(user_id)
            .then((res) => {
                //console.log("je passe ici")
                setTWList(res.result);
                //console.log("TWList", res)
            })
            .catch((err) => { setMsg(err) });
    }

    useEffect(()=>{
        getTWbyUser(user_id)
            .then((res) => {
                //console.log("je passe ici")
                setTWList(res.result);
                //console.log("TWList", res)
            })
            .catch((err) => { setMsg(err) });
    }, []);

    const goToEdit = (TWid) =>{
        props.navigation.navigate("TWedit", {id: TWid})
    }

    const supprTW = (TWid) =>{
        deleteTW(TWid)
        .then((res)=>{
            if(res.status === 200){
                recupTW(user_id)
                setMsg("TW supprimé")
            }
        })
        .catch((err)=>{setMsg(err)})
    }

    const GoBack = () => {
        props.navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mes Triggers Warning</Text>
            {msg !== null && <Text>{msg}</Text>}
            {TWList.length > 0 ? <ScrollView style={styles.containerList}>
                {TWList.map((TW)=>{
                    return (<View
                            key={TW.id}
                            >
                                <View style={styles.title2}>
                                    <Text style={styles.textblackbold}>{TW.name}</Text>
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {
                                                goToEdit(TW.id)
                                            }}
                                        >
                                            <Text style={styles.buttonText}>modifier</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {
                                                supprTW(TW.id)
                                            }}
                                        >
                                            <Text style={styles.buttonText}>supprimer</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                    )
                })}
            </ScrollView> : <Text style={styles.textblack}>Vous n'avez pas de TW déclarés</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    GoBack()
                }}
            >
                <Text style={styles.buttonText}>Retourner au menu précédent</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default MyTW