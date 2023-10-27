import axios from "axios";
import { config } from '../config';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async () => {
    //récup du token ds le storage
    try {
        const value = await AsyncStorage.getItem('RPGTT-token');
        if (value !== null) {
            // value previously stored
            //console.log(value)
            return value;
        }
    } catch (e) {
        // error reading value
        return e;
    }
}

//sauvegarde d'une tablée
export const saveParty = async (data) => {
    let token = await getData()
    return axios.post(config.api_url + '/api/v1/partys/save', data, { headers: { 'x-access-token': token } })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err
        })
}

//récupération des tablées d'un utilisateur (pour l'admin)
export const getAllPartyByUser = async (user_key_id) => {
    let token = await getData()
    return axios.get(config.api_url + '/api/v1/partys/user/' + user_key_id, { headers: { 'x-access-token': token } })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err
        })
}

//récupération des tablées d'un créateur (pour l'admin)
export const getAllPartyByCreator = async (creator_id) => {
    let token = await getData()
    return axios.get(config.api_url + '/api/v1/partys/creator/' + creator_id, { headers: { 'x-access-token': token } })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err
        })
}

//récupération d'une tablée
export const getOnePartyById = async (id) => {
    let token = await getData()
    return axios.get(config.api_url + '/api/v1/partys/' + id, { headers: { 'x-access-token': token } })
        .then((response) => {
            //console.log('getOnePartybyID res', response)
            return response.data;
        })
        .catch((err) => {
            //console.log('getOnePartybyID err', err)
            return err
        })
}

//récupération de toutes les tablées
export const getAllPartys = async () => {
    return axios.get(config.api_url + '/api/v1/partys')
        .then((response) => {
            //console.log(response)
            return response.data;
        })
        .catch((err) => {
            //console.log(err)
            return err
        })
}

//modification d'une tablée
export const updateParty = async (data, id) => {
    let token = await getData()
    return axios.put(config.api_url + '/api/v1/partys/update/' + id, data, { headers: { 'x-access-token': token } })
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

export const updatePlayers = async (data, party_id) => {
    let token = await getData()
    return axios.put(config.api_url + '/api/v1/partys/update/playersUpdate/' + party_id, data, { headers: { 'x-access-token': token } })
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            return err
        })
}

//suppression d'une tablée
export const deleteOneParty = async (id) => {
    let token = await getData()
    return axios.delete(config.api_url + '/api/v1/partys/delete/' + id, { headers: { 'x-access-token': token } })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err
        })
}

export const desinscription = async (game_id, user_key_id) =>{
    await getOnePartyById(game_id)
    .then((res)=>{
        //console.log(res)
        let partyPlayers = {
            id_player1: res.result.id_player1,
            id_player2: res.result.id_player2,
            id_player3: res.result.id_player3,
            id_player4: res.result.id_player4,
            id_player5: res.result.id_player5,
            id_player6: res.result.id_player6,
            id_player7: res.result.id_player7,
            id_player8: res.result.id_player8,
        }
        console.log("party player: ", partyPlayers, "party data : ", res, "user", user_key_id)
        if (partyPlayers.id_player1 === user_key_id) {
            partyPlayers.id_player1 = null
        } else {
            if (partyPlayers.id_player2 === user_key_id) {
                partyPlayers.id_player2 = null
            } else {
                if (partyPlayers.id_player3 === user_key_id) {
                    partyPlayers.id_player3 = null
                } else {
                    if (partyPlayers.id_player4 === user_key_id) {
                        partyPlayers.id_player4 = null
                    } else {
                        if (partyPlayers.id_player5 === user_key_id) {
                            partyPlayers.id_player5 = null
                        } else {
                            if (partyPlayers.id_player6 === user_key_id) {
                                partyPlayers.id_player6 = null
                            } else {
                                if (partyPlayers.id_player7 === user_key_id) {
                                    partyPlayers.id_player7 = null
                                } else {
                                    if (partyPlayers.id_player8 === user_key_id) {
                                        partyPlayers.id_player8 = null
                                    } else {
                                        console.log(`erreur la joueuse ayant le user_key_id ${user_key_id} n'a pas été trouvée dansles joueuses inscrites à la partie de ${res.result.name} ayant lieu entre le ${res.result.dayBegin} à ${res.result.timeBegin} et le ${res.result.dayEnd} à ${res.result.timeEnd}.`)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        let data = partyPlayers
        let party_id = game_id
        updatePlayers(data, party_id);
        console.log(`désinscription OK`)
    })
    .catch ((err) => { console.log(err) })
}
