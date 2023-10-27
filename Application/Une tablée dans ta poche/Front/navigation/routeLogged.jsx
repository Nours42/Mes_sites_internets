import React from 'react';

//import { StyleSheet, Text, View } from 'react-native';
import Home from '../screens/Home';
import Logout from '../screens/Login-Logout-Register/Logout';
import PartyHome from '../screens/Party/PartyHome';
import AllParty from '../screens/Party/AllParty';
import DetailsParty from '../screens/Party/DetailsParty';
import MyParty from '../screens/Party/MyParty';
import Inscription from '../screens/Party/Inscription';
import AddParty from '../screens/Party/AddParty';
import HowTo from '../screens/Party/HowTo'
import EditParty from '../screens/Party/EditParty';
import ProfileEdit from '../screens/Login-Logout-Register/EditProfile';
import TWlist from '../screens/TW/TWlist';
import TWdef from '../screens/TW/TWdef';
import TWedit from '../screens/TW/TWedit';
import TWcreate from '../screens/TW/TWcreate';
import MyTW from '../screens/TW/MyTW';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';


const Stack = createBottomTabNavigator();
//Stack Navigator permet à votre application de passer d'un écran à l'autre, chaque nouvel écran étant placé au-dessus d'une pile. (on peut en créer plusieurs)
//stack.screen crée le lien du menu qui va nous afficher le composant lorsque l'on clique dessus.
const HomeStack = createStackNavigator();
const MJStack = createStackNavigator();
const TWStack = createStackNavigator();



function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={Home} />
            <HomeStack.Screen name="EditProfile" component={ProfileEdit} />
        </HomeStack.Navigator>
    );
}

function TWStackScreen() {

    return (
        <TWStack.Navigator screenOptions={{ headerShown: false }}>
            <TWStack.Screen name="TWlist" component={TWlist} />
            <TWStack.Screen name="TWdef" component={TWdef} />
            <TWStack.Screen name="MyTW" component={MyTW} />
            <TWStack.Screen name="TWcreate" component={TWcreate} />
            <TWStack.Screen name="TWedit" component={TWedit} />
        </TWStack.Navigator>
    );
}

function MJStackScreen() {

    return (
        <MJStack.Navigator screenOptions={{ headerShown: false }}>
            <MJStack.Screen name="PartyHome" component={PartyHome} />
            <MJStack.Screen name="AllParty" component={AllParty} />
            <MJStack.Screen name="DetailsParty" component={DetailsParty} />
            <MJStack.Screen name="HowTo" component={HowTo} />
            <MJStack.Screen name="MyParty" component={MyParty} />
            <MJStack.Screen name="Inscription" component={Inscription} />
            <MJStack.Screen name="AddParty" component={AddParty} />
            <MJStack.Screen name="EditParty" component={EditParty} />
        </MJStack.Navigator>
    );
}

const RouteLogged = (props) => {
    return (
        <NavigationContainer styles={{ flex: 1, flexDirection: 'row' }}>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        }
                        if (route.name === "ListOfTW") {
                            iconName = focused ? "color-filter" : "color-filter-outline";
                        }
                        if (route.name === "HomeParty") {
                            iconName = focused ? "cube" : "cube-outline";
                        }
                        if (route.name === "GetOut") {
                            iconName = focused ? "exit" : "exit-outline";
                        }
                        

                        // You can return any component that you like here!
                        return <Icons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "grey",
                    headerShown: false,
                })}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{ title: "Home" }}
                />
                <Stack.Screen
                    name="ListOfTW"
                    component={TWStackScreen}
                    options={{ title: "Triggers Warning" }}
                />
                <Stack.Screen
                    name="HomeParty"
                    component={MJStackScreen}
                    options={{ title: "Les tablées" }}
                />
                <Stack.Screen
                    name="GetOut"
                    component={Logout}
                    options={{ title: "Logout" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteLogged