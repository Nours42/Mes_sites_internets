import React, { useState } from 'react';
import { Image, ScrollView, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginUser } from '../../api/user';
import { setUser } from "../../slices/userSlice";
import { styles } from '../styles'

const Login = (props) => {

    const dispatch = useDispatch()
    //déclaration de state email et password
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState(null);

    const storeData = async (token) => {
        try {
            //mise dans le AsyncStorage
            await AsyncStorage.setItem('RPGTT-token', token);
        } catch (error) {
            return error
        }
    }

    const onSubmitForm = () => {
        //on crée l'objet
        let data = {
            email: email,
            password: password
        }

        //appel de la fonction api pour connecter
        loginUser(data)
            .then((res) => {
                //console.log('RES login', res);
                //on stock dans le AsyncStorage
                storeData(res.token);

                //on crée un objet user qui recup les infos utilisateur retourné par le login
                let user = res.user;
                //on ajoute le token à l'objet
                user.token = res.token

                //envoi dans le store
                dispatch(setUser(user))
            })
            .catch((err) => setMsg(err))
    }
    
    return (
        <View style={styles.login}>
            <ScrollView>
                <View style={styles.center}>
                <Image source={{ uri: 'https://gobelin.tech/favicon1024.png'}} style={styles.image} />
                </View>
                {msg !== null && (
                    <View>
                        {msg}
                    </View>
                )}
                <Text style={styles.title}> Se connecter </Text>
                <TextInput
                    style={styles.input}
                    type="text"
                    placeholder="Email"
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                />
                <TextInput
                    style={styles.input}
                    type="text"
                    placeholder="Mot de passe"
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        onSubmitForm();
                    }}
                >
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )

}

export default Login