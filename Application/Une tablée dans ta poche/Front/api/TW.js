import axios from "axios";
import { config } from '../config';

export const saveOneTW = async (data) => {
    return axios.post(config.api_url + '/api/v1/TW/save', data)
        .then((res) => {
            //console.log(res)
            return res.data;
        })
        .catch((err) => {
            //console.log(err)
            return err
        })
}

export const getTWbyUser = async (user_id) => {
    return axios.get(config.api_url + '/api/v1/TW/user/' + user_id)
        .then((res) => {
            //console.log("TW by Owners", res)
            return res.data;
        })
        .catch((err) => {
            //console.log(err)
            return err
        })
}

export const getTWbyID = async (id) => {
    return axios.get(config.api_url + '/api/v1/TW/' + id)
        .then((res) => {
            //console.log("TW by ID to edit", res)
            return res.data;
        })
        .catch((err) => {
            //console.log(err)
            return err
        })
}

export const updateTW = async (data, id) => {
    return axios.put(config.api_url + '/api/v1/TW/update/' + id, data)
        .then((res) => {
            //console.log("update TW",res.data)
            return res.data;
        })
        .catch((err) => {
            //console.log(err)
            return err
        })
}

export const deleteTW = async (id) => {
    return axios.delete(config.api_url + '/api/v1/TW/delete/' + id)
        .then((res) => {
            //console.log("delete TW by ID", res)
            return res.data;
        })
        .catch((err) => {
            //console.log(err)
            return err
        })
}