import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles';
import { useSelector } from "react-redux";
import { selectUser } from "../../slices/userSlice";
import { saveOneTW } from '../../api/TW';
import { CheckBox } from 'react-native-btr';

const TWCreate = (props) => {

    const user = useSelector(selectUser)
    const user_id = user.infos.id;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ligne, setLigne] = useState(false);
    const [voile, setVoile] = useState(true);
    const [msg, setMsg] = useState(null);
    const [modifyOK, setmodifyOK] = useState(false);

    const recupTW = (user_id) => {
        getTWbyUser(user_id)
            .then((res) => {
                //console.log("je passe ici")
                setTWList(res.result);
                //console.log("TWList", res)
            })
            .catch((err) => { setMsg(err) });
    }

    const onSubmitForm = () => {
        let data = {
            name: name,
            description: description,
            ligne: ligne,
            voile: voile,
            user_id: user.infos.id
        }
    
        saveOneTW(data)
            .then((res) => {
                if (res.status === 200) {
                    //console.log("coucou", res)
                    recupTW(user_id)
                    setMsg('TW créé, vous pouvez revenir au menu de départ en cliquant ici ')
                    
                }
            })
            .catch(err => setMsg(err))
    }

    const GoHome = () => {
        props.navigation.navigate("Home")
    }

    return (<View style={styles.container}>
        <Text style={styles.title}>Créer votre TW</Text>
        {modifyOK === false ?<View style={styles.container}>
        <ScrollView>
            <TextInput
                secureTextEntry={false}
                value={name}
                style={styles.input}
                placeholder="Nom de votre TW"
                onChangeText={(text) => {
                    setName(text)
                }}
            />
            <TextInput
                secureTextEntry={false}
                value={description}
                style={styles.inputLarge}
                multiline
                numberOfLines={5}
                placeholder="description de votre TW"
                onChangeText={(text) => {
                    setDescription(text)
                }}
            />
            <Text style={styles.textblack}>C'est une ligne (infranchissable)   <CheckBox
                    checked={ligne}
                    color={ligne === true ? 'green' : 'black'}
                    onPress={() => {
                        setLigne(!ligne)
                        setVoile(!voile)
                        //console.log(ligne)
                    }}
                />
            </Text>
            <Text style={styles.textblack}>C'est un voile (opaque)   <CheckBox
                    checked={voile}
                    color={voile === true ? 'green' : 'black'}
                    onPress={() => {
                        setVoile(!voile)
                        setLigne(!ligne)
                        //console.log(voile)
                    }}
                />
            </Text>
                <View style={styles.center}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        onSubmitForm()
                        setmodifyOK()
                    }}
                >
                    <Text style={styles.buttonText}>Créer votre TW</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </View> : <View style={styles.container}>
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

export default TWCreate
