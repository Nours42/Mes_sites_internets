import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";

import { styles } from '../styles';
import { setLogout } from "../../slices/userSlice";


const Logout = (props) => {

    const dispatch = useDispatch()
    const [removeIsOk, setRemoveIsOk] = useState(false)

    useEffect( async () => {
        //appel de la fonction de suppression du storage
        await removeData();
        setRemoveIsOk(true);
        
    }, [])

    useEffect(()=>{
        //appel de l'action de déconnexion du store de redux
        dispatch(setLogout())
    },removeIsOk)

    const removeData = async () => {
        try {
            //suppression de l'AsyncStorage
            await AsyncStorage.removeItem('RPGTT-token');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.text}>Logout</Text>
        </View>
    )
}

export default Logout