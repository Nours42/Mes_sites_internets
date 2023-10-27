import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";

import { styles } from './styles'
import { selectUser } from "../slices/userSlice"; 


const Home = (props) => {

    const user = useSelector(selectUser)

    const EditProfile = (id) => {
        props.navigation.navigate("EditProfile", {id: user.infos.id})
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://gobelin.tech/favicon1024.png' }} style={styles.image} />
            <Text style={styles.title}>Une tablée dans ta poche</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    EditProfile(user.infos.id)
                }}
            >
                <Text style={styles.buttonText}>modifier votre profil</Text>
            </TouchableOpacity>

            
        </View>
    )
}

export default Home