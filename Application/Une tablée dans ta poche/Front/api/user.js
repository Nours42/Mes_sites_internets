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

export const saveUser = async (data) => {
    return axios.post(config.api_url + '/api/v1/user/save', data)
        .then((res) => {
            //console.log(res)
            return res.data;
        })
        .catch((err) => {
            //console.log(err)
            return err
        })
}

export const updateUser = async (data, key_id) => {
    return axios.put(config.api_url + '/api/v1/user/update/' + key_id, data)
        .then((res) => {
            //console.log("update user res",res)
            return res.data;
        })
        .catch((err) => {
            //console.log(err)
            return err
        })
}

export const loginUser = async (data) => {
    return axios.post(config.api_url + '/api/v1/user/login', data)
        .then((res) => {
            //console.log("res",res)
            return res.data;
        })
        .catch((err) => {
            //console.log("err",err)
            return err
        })
}

export const checkToken = async () => {
    let token = await getData();
    //console.log(token);
    return axios.get(config.api_url + '/api/v1/auth/checkToken', { headers: { 'x-access-token': token } })
        .then((response) => {
            //console.log(response)
            return response.data;
        })
        .catch((err) => {
            //console.log(err)
            return err
        })
}

export const getOneUser = async (key_id) => {
    let token = await getData()
    return axios.get(config.api_url + '/api/v1/user/one/' + key_id, { headers: { 'x-access-token': token } })
        .then((response) => {
            //console.log("is", response)
            return response.data;
        })
        .catch((err) => {
            return err
        })
}