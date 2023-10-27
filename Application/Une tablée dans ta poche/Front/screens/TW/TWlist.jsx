import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";

import { styles } from '../styles'
import { selectUser } from "../../slices/userSlice";
import { deleteTW, getTWbyUser } from '../../api/TW';

const TW = (props) => {

    const user = useSelector(selectUser);
    const user_id = user.infos.id
    const [TWList, setTWList] = useState([]);
    const [msg, setMsg] = useState(null);

    useEffect(()=>{
        recupTW(user_id)
    }, []);

    const recupTW = (user_id) =>{
        getTWbyUser(user_id)
        .then((res)=>{
            //console.log("je passe ici")
            setTWList(res.result);
            //console.log("TWList", res)
        })
        .catch((err)=>{setMsg(err)});
    }

    const TWDef = () => {
        props.navigation.navigate("TWdef")
    }

    const TWCreate = (id) => {
        props.navigation.navigate("TWcreate", { id: user.infos.id })
    }   
    
    const myTW = () => {
        props.navigation.navigate("MyTW")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Triggers Warning</Text>
            {msg !== null && <Text>{msg}</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    TWDef()
                }}
            >
                <Text style={styles.buttonText}>C'est quoi un Trigger Warning ?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    TWCreate(user.infos.id)
                }}
            >
                <Text style={styles.buttonText}>Créer un TW qui me concerne</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    myTW(user.infos.id)
                }}
            >
                <Text style={styles.buttonText}>Mes Triggers Warnings</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default TW