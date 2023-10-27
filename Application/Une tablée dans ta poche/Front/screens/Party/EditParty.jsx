import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles';
import { getOnePartyById } from '../../api/party';
import { useSelector } from "react-redux";
import { selectUser } from "../../slices/userSlice";
import { updateParty } from '../../api/party';

const EditParty = (props) => {
    
    const user = useSelector(selectUser)
    //console.log(user)
    const creator = user.infos.key_id
    //console.log(creator)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [creator_id, setCreator_id] = useState('');
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

    let game_id = props.route.params.game_id

    useEffect(() => {
        getOnePartyById(game_id)
            .then((res) => {
                console.log(res.result.ageMin);
                setName(res.result.name);
                setDescription(res.result.description);
                setCreator_id(res.result.creator_id);
                setDayBegin(res.result.dayBegin);
                setTimeBegin(res.result.timeBegin);
                setDayEnd(res.result.dayEnd);
                setTimeEnd(res.result.timeEnd);
                setSalleId(res.result.salleId);
                setNbrPlayersMax(res.result.nbrPlayersMax);
                setNbrPlayersOn(res.result.nbrPlayersOn);
                setAgeMin(res.result.ageMin);
            })
            .catch((err) => {setMsg(err)})
    }, [])
    
    const onSubmitForm = () => {

        let data = {
            name: name,
            description: description,
            creator_id: creator,
            dayBegin: dayBegin,
            dayEnd: dayEnd,
            timeBegin: timeBegin,
            timeEnd: timeEnd,
            salle_id: salleId,
            nbrPlayersMax: nbrPlayersMax,
            nbrPlayersOn: nbrPlayersOn,
            ageMin: ageMin
        }
        //console.log(data)
        updateParty(data, game_id)
            .then((res) => {
                if (res.status === 200) {
                    //console.log("parti sauvegardée")
                    setMsg('Partie modifiée, vous pouvez revenir au menu précédent en cliquant ci-dessous ')
                    setmodifyOK(true)
                }
            })
            .catch(err => setMsg(err))
    }

    const GoBack = () => {
        props.navigation.goBack()
    }

    return (<View style={styles.container}>
        <Text style={styles.title}>Modifier votre partie</Text>
        {modifyOK === false ? <View style={styles.container}>
            <ScrollView>
                <TextInput
                    secureTextEntry={false}
                    defaultValue={name}
                    style={styles.input}
                    placeholder="Nom de votre Jeu - Nom du scénario"
                    onChangeText={(text) => {
                        setName(text)
                    }}
                />
                <TextInput
                    secureTextEntry={false}
                    defaultValue={description}
                    style={styles.inputLarge}
                    multiline
                    numberOfLines={6}
                    placeholder="Pitch de votre partie"
                    onChangeText={(text) => {
                        setDescription(text)
                    }}
                />
                <Text style={styles.title2}>Les horaires de la partie</Text>
                <Picker
                    style={styles.select}
                    selectedValue={dayBegin}
                    onValueChange={(value) => { setDayBegin(value) }}>
                    <Picker.Item label="Jour de début de la partie" value="x" />
                    <Picker.Item label="Vendredi" value="vendredi" />
                    <Picker.Item label="Samedi" value="samedi" />
                    <Picker.Item label="Dimanche" value="dimanche" />
                </Picker>
                <Picker
                    style={styles.select}
                    selectedValue={timeBegin}
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
                    <Picker.Item label="0h" value="0" />
                    <Picker.Item label="1h" value="1" />
                    <Picker.Item label="2h" value="2" />
                    <Picker.Item label="3h" value="3" />
                    <Picker.Item label="4h" value="4" />
                    <Picker.Item label="5h" value="5" />
                    <Picker.Item label="6h" value="6" />
                    <Picker.Item label="7h" value="7" />
                    <Picker.Item label="8h" value="8" />
                    <Picker.Item label="9h" value="9" />
                </Picker>
                <Picker
                    style={styles.select}
                    selectedValue={dayEnd}
                    onValueChange={(value) => { setDayEnd(value) }}>
                    <Picker.Item label="Jour de fin" value="x" />
                    <Picker.Item label="Vendredi" value="vendredi" />
                    <Picker.Item label="Samedi" value="samedi" />
                    <Picker.Item label="Dimanche" value="dimanche" />
                </Picker>
                <Picker
                    style={styles.select}
                    selectedValue={timeEnd}
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
                    <Picker.Item label="0h" value="0" />
                    <Picker.Item label="1h" value="1" />
                    <Picker.Item label="2h" value="2" />
                    <Picker.Item label="3h" value="3" />
                    <Picker.Item label="4h" value="4" />
                    <Picker.Item label="5h" value="5" />
                    <Picker.Item label="6h" value="6" />
                    <Picker.Item label="7h" value="7" />
                    <Picker.Item label="8h" value="8" />
                    <Picker.Item label="9h" value="9" />
                </Picker>
                <Text>Nombre de joueuses</Text>
                <Picker
                    style={styles.select}
                    selectedValue={nbrPlayersMax}
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
                    selectedValue={ageMin}
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
                    }}
                >
                    <Text style={styles.buttonText}>Modifier</Text>
                </TouchableOpacity>
            </ScrollView>
        </View> : <View style={styles.container}>
            {msg !== null && <Text>{msg}</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    GoBack()
                }}
            >
                <Text style={styles.buttonText}>Retourner au menu principal</Text>
            </TouchableOpacity>
        </View>}
    </View>
    )
}

export default EditParty
