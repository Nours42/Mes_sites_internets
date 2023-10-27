import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-btr';

import { styles } from '../styles';
import { getTWbyID, updateTW } from '../../api/TW';


const TWEdit = (props) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [user_id, setUser_id] = useState('');
    const [ligne, setLigne] = useState(false);
    const [voile, setVoile] = useState(true);
    const [msg, setMsg] = useState(null);
    const [modifyOK, setmodifyOK] = useState(false);
    
    let id = props.route.params.id

    useEffect(() => {
        getTWbyID(id)
            .then((res) => {
                //console.log(res.result);

                setName(res.result.name);
                setDescription(res.result.description);
                if (res.result.ligne == 0) {
                    setLigne(false)
                    setVoile(true)
                } else {
                    setLigne(true)
                    setVoile(false)
                };
                setUser_id(res.result.user_id)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    const onSubmitForm = () => {
        let data = {
            name: name,
            description: description,
            ligne: ligne,
            voile: voile,
            user_id: user_id
        }

        updateTW(data, id)
            .then((res) => {
                if (res.status === 200) {
                    //console.log("coucou")
                    setMsg('TW modifié, vous pouvez revenir au menu précédent en cliquant ici ')
                }

            })
            .catch(err => setMsg(err))
    }

    const GoBack = () => {
        props.navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modifier votre TW</Text>
        { modifyOK === false ? <View style={styles.container}>
            <ScrollView>
                
                <TextInput
                    secureTextEntry={false}
                    defaultValue={name}
                    style={styles.input}
                    onChangeText={(text) => {
                        setName(text)
                    }}
                />
                <TextInput
                    secureTextEntry={false}
                    defaultValue={description}
                    style={styles.inputLarge}
                    multiline
                    numberOfLines={5}
                    onChangeText={(text) => {
                        setDescription(text)
                    }}
                />
                <Text style={styles.textblack}>C'est une ligne (infranchissable)
                    <CheckBox
                        checked={ligne}
                        color={ligne === true ? 'green' : 'black'}
                        onPress={() => {
                            setLigne(!ligne)
                            setVoile(!voile)
                            //console.log(ligne)
                        }}
                    />
                </Text>
                <Text style={styles.textblack}>C'est un voile (opaque)
                    <CheckBox
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
                        setmodifyOK(true)
                    }}
                >
                    <Text style={styles.buttonText}>Enregistrer</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
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

export default TWEdit
