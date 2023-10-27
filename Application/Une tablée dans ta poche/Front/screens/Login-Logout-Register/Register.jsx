import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-btr';

import { styles } from '../styles';
import { saveUser } from "../../api/user";


const Register = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [pronouns, setPronouns] = useState("");
    const [MJ, setMJ] = useState(false);
    const [handy, setHandy] = useState(false);
    
    const onSubmitForm = () => {
        let data = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            pseudo: pseudo,
            email: email,
            password: password,
            address: address,
            zip: zip,
            city: city,
            phone: phone,
            pronouns: pronouns,
            MJ: MJ,
            handy: handy
        }
        console.log(data)
        saveUser(data)
            .then((res) => {
                if (res.status === 200) {
                    props.navigation.navigate("Login")
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.title}>S'enregistrer</Text>
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
                value={email}
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => {
                    setEmail(text)
                }}
            />
            <TextInput
                secureTextEntry={true}
                value={password}
                style={styles.input}
                placeholder="Mot de passe"
                onChangeText={(text) => {
                    setPassword(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={address}
                style={styles.input}
                placeholder="Adresse"
                onChangeText={(text) => {
                    setAddress(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={zip}
                style={styles.input}
                placeholder="Code postal"
                onChangeText={(text) => {
                    setZip(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={city}
                style={styles.input}
                placeholder="Ville"
                onChangeText={(text) => {
                    setCity(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={phone}
                style={styles.input}
                placeholder="Téléphone"
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
            <Text style={styles.textblack}>Je suis MJ   <CheckBox
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
                    onSubmitForm()
                }}
            >
                <Text style={styles.buttonText}>S'enregistrer</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Register