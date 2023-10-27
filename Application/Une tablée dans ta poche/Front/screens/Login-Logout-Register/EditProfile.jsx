import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView, View} from 'react-native';
import { CheckBox } from 'react-native-btr';
import { useSelector, useDispatch } from "react-redux";

import { styles } from '../styles';
import { selectUser, setUser } from "../../slices/userSlice";
import { updateUser, getOneUser } from '../../api/user';

const EditProfile = (props) => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState(user.infos.firstname);
    const [lastName, setLastName] = useState(user.infos.lastname);
    const [age, setAge] = useState(user.infos.age);
    const [pseudo, setPseudo] = useState(user.infos.pseudo);   
    const [address, setAddress] = useState(user.infos.address);
    const [zip, setZip] = useState(user.infos.zip);
    const [city, setCity] = useState(user.infos.city);
    const [phone, setPhone] = useState(user.infos.phone);
    const [pronouns, setPronouns] = useState(user.infos.pronouns);
    const [MJ, setMJ] = useState(user.infos.MJ);
    const [handy, setHandy] = useState(user.infos.handy);
    const [msg, setMsg] = useState(null);
    const [modifyOK, setmodifyOK] = useState(false);

    const updateProfile = () => {
        let data = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            pseudo: pseudo,
            address: address,
            zip: zip,
            city: city,
            phone: phone,
            pronouns: pronouns,
            MJ: MJ,
            handy: handy
        }
        //console.log(data)

        updateUser(data, user.infos.key_id)
            .then((res) => {
                getOneUser(user.infos.key_id)
                .then((response)=>{
                    if (res.status === 200) {
                        //console.log("coucou", response)
                        dispatch(setUser(response.user))
                        setMsg('Profil modifié, vous pouvez revenir au menu de départ en cliquant sur "home" ')
                    }
                })
                .catch((err)=>{console.log(err)})
            })
            .catch((err) =>{console.log(err)})
    }

    const GoHome = () => {
        props.navigation.goBack()
    }

    return (<View style={styles.container}>
        <Text style={styles.title}>Modifier votre Profil</Text>
        {modifyOK === false ? 
        <View><ScrollView>
            <TextInput
                secureTextEntry={false}
                value={firstName}
                style={styles.input}
                placeholder="Prénom"
                onChangeText={(text) => {
                    setFirstName(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={lastName}
                style={styles.input}
                placeholder="Nom"
                onChangeText={(text) => {
                    setLastName(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={age}
                style={styles.input}
                placeholder="Age"
                onChangeText={(text) => {
                    setAge(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={pseudo}
                style={styles.input}
                placeholder="Pseudo"
                onChangeText={(text) => {
                    setPseudo(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={address}
                style={styles.input}
                placeholder="address"
                onChangeText={(text) => {
                    setAddress(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={zip}
                style={styles.input}
                placeholder="zip"
                onChangeText={(text) => {
                    setZip(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={city}
                style={styles.input}
                placeholder="city"
                onChangeText={(text) => {
                    setCity(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={phone}
                style={styles.input}
                placeholder="phone"
                onChangeText={(text) => {
                    setPhone(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={pronouns}
                style={styles.input}
                placeholder="Pronoms"
                onChangeText={(text) => {
                    setPronouns(text)
                }}
            />
            <Text
                style={styles.textblack}>Je suis MJ   <CheckBox
                checked={MJ}
                color={MJ === true ? 'green' : 'black'}
                onPress={() => {
                    setMJ(!MJ)
                    //console.log(MJ)
                }}
            /></Text>
            <Text style={styles.textblack}>Je suis handicapé   <CheckBox
                checked={handy}
                color={handy === true ? 'green' : 'black'}
                onPress={() => {
                    setHandy(!handy)
                    //console.log(handy)
                }}
            /></Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    updateProfile()
                    setmodifyOK(true)
                }}
            >
                <Text style={styles.buttonText}>Mettre à jour votre profil</Text>
            </TouchableOpacity>
            </ScrollView></View> : <View style={styles.container}>
                {msg !== null && <Text>{msg}</Text>}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        GoHome()
                    }}
                >
                    <Text style={styles.buttonText}>Retourner au menu principal</Text>
                </TouchableOpacity>
            </View>}
        </View>
    )
}

export default EditProfile
