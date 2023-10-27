import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { useSelector } from "react-redux";
import { Picker } from '@react-native-picker/picker';

import { styles } from '../styles';
import { selectUser } from "../../slices/userSlice";
import { saveParty } from '../../api/party';

const AddParty = (props) => {

    const user = useSelector(selectUser)
    //console.log(user)
    const creator = user.infos.key_id
    //console.log(creator)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dayBegin, setDayBegin] = useState('');
    const [dayEnd, setDayEnd] = useState('');
    const [timeBegin, setTimeBegin] = useState('');
    const [timeEnd, setTimeEnd] = useState('');
    const [salleId, setSalleId] = useState(1);
    const [nbrPlayersMax, setNbrPlayersMax] = useState(0);
    const [nbrPlayersOn, setNbrPlayersOn] = useState(0);
    const [ageMin, setAgeMin] = useState(0);
    const [msg, setMsg] = useState(null);
    const [modifyOK, setmodifyOK] = useState(false);

    const onSubmitForm = () => {
        
        let data = {
            name: name,
            description: description,
            creator_id : creator,
            dayBegin : dayBegin,
            dayEnd : dayEnd,
            timeBegin: timeBegin,
            timeEnd: timeEnd,
            salle_id: salleId,
            nbrPlayersMax: nbrPlayersMax,
            nbrPlayersOn: nbrPlayersOn,
            ageMin: ageMin
        }
        console.log(data)
        saveParty(data)
            .then((res) => {
                if (res.status === 200) {
                    //console.log("parti sauvegardée")
                    setMsg('Partie créé, vous pouvez revenir au menu précédent en cliquant ci-dessous')
                }
            })
            .catch(err => setMsg(err))
    }

    const GoBack = () => {
        props.navigation.goBack()
    }

    return (
        <View style={styles.container}>
            {modifyOK === false ?
            <ScrollView>
                <Text style={styles.title}>Créer une partie</Text>
                <TextInput
                    secureTextEntry={false}
                    value={name}
                    style={styles.input}
                    placeholder="Nom de votre Jeu - Nom du scénario"
                    onChangeText={(text) => {
                        setName(text)
                    }}
                />
                <TextInput
                    secureTextEntry={false}
                    value={description}
                    style={styles.inputLarge}
                    placeholder="Pitch de votre partie"
                    onChangeText={(text) => {
                        setDescription(text)
                    }}
                />
                <Text style={styles.title2}>Les horaires de la partie</Text>
                <Picker 
                    style={styles.select}
                    onValueChange={(value) => { setDayBegin(value) }}>
                    <Picker.Item label="Jour de début de la partie" value="x" />
                    <Picker.Item label="Vendredi" value="vendredi"/>
                    <Picker.Item label="Samedi" value="samedi" />
                    <Picker.Item label="Dimanche" value="dimanche" />
                </Picker>
                <Picker
                    style={styles.select}
                    onValueChange={(value) => { setTimeBegin(value) }}>
                    <Picker.Item label="Heure de début" value="x" />
                    <Picker.Item label="10h" value="10" />
                    <Picker.Item label="11h" value="11" />
                    <Picker.Item label="12h" value="12" />
                    <Picker.Item label="13h" value="13" />
                    <Picker.Item label="14h" value="14" />
                    <Picker.Item label="15h" value="15" />
                    <Picker.Item label="16h" value="16" />
                    <Picker.Item label="17h" value="17" />
                    <Picker.Item label="18h" value="18" />
                    <Picker.Item label="19h" value="19" />
                    <Picker.Item label="20h" value="20" />
                    <Picker.Item label="21h" value="21" />
                    <Picker.Item label="22h" value="22" />
                    <Picker.Item label="23h" value="23" />
                    <Picker.Item label="00h" value="00" />
                    <Picker.Item label="01h" value="01" />
                    <Picker.Item label="02h" value="02" />
                    <Picker.Item label="03h" value="03" />
                    <Picker.Item label="04h" value="04" />
                    <Picker.Item label="05h" value="05" />
                    <Picker.Item label="06h" value="06" />
                    <Picker.Item label="07h" value="07" />
                    <Picker.Item label="08h" value="08" />
                    <Picker.Item label="09h" value="09" />
                </Picker>
                <Picker
                    style={styles.select}
                    onValueChange={(value) => { setDayEnd(value) }}>
                    <Picker.Item label="Jour de fin" value="x" />
                    <Picker.Item label="Vendredi" value="vendredi" />
                    <Picker.Item label="Samedi" value="samedi" />
                    <Picker.Item label="Dimanche" value="dimanche" />
                </Picker>
                <Picker
                    style={styles.select}
                    onValueChange={(value) => { setTimeEnd(value) }}>
                    <Picker.Item label="Heure de fin" value="x" />
                    <Picker.Item label="10h" value="10" />
                    <Picker.Item label="11h" value="11" />
                    <Picker.Item label="12h" value="12" />
                    <Picker.Item label="13h" value="13" />
                    <Picker.Item label="14h" value="14" />
                    <Picker.Item label="15h" value="15" />
                    <Picker.Item label="16h" value="16" />
                    <Picker.Item label="17h" value="17" />
                    <Picker.Item label="18h" value="18" />
                    <Picker.Item label="19h" value="19" />
                    <Picker.Item label="20h" value="20" />
                    <Picker.Item label="21h" value="21" />
                    <Picker.Item label="22h" value="22" />
                    <Picker.Item label="23h" value="23" />
                    <Picker.Item label="00h" value="00" />
                    <Picker.Item label="01h" value="01" />
                    <Picker.Item label="02h" value="02" />
                    <Picker.Item label="03h" value="03" />
                    <Picker.Item label="04h" value="04" />
                    <Picker.Item label="05h" value="05" />
                    <Picker.Item label="06h" value="06" />
                    <Picker.Item label="07h" value="07" />
                    <Picker.Item label="08h" value="08" />
                    <Picker.Item label="09h" value="09" />
                </Picker>
                <Text>Nombre de joueuses</Text>
                <Picker
                    style={styles.select}
                    onValueChange={(value) => { setNbrPlayersMax(value) }}>
                    <Picker.Item label="Nombre de joueuses maximum" value="x" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                </Picker>
                <Text>Age minimum des joueuses</Text>
                <Picker
                    style={styles.select}
                    onValueChange={(value) => { setAgeMin(value) }}>
                    <Picker.Item label="Age minimum" value="x" />
                    <Picker.Item label="Pegi 3" value="0" />
                    <Picker.Item label="Pegi 7" value="7" />
                    <Picker.Item label="Pegi 12" value="12" />
                    <Picker.Item label="Pegi 16" value="16" />
                    <Picker.Item label="Pegi 18" value="18" />
                    <Picker.Item label="Au delà..." value="999" />
                </Picker>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        onSubmitForm()
                        setmodifyOK(true)
                    }}
                >
                    <Text style={styles.buttonText}>Créer votre Partie</Text>
                </TouchableOpacity>
                </ScrollView> 
                : <View style={styles.container}>
                    { msg !== null && <Text>{msg}</Text>}
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

export default AddParty
