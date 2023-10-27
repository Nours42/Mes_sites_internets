import { Platform, StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    height: (Platform.OS === 'ios') ? 200 : 100,
    button: {
        backgroundColor: "#321aed",
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: '#666666',
                width: wp('60%'),
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                borderRadius: 20
            },
            default: {
                // other platforms, web for example
                backgroundColor: '#666666',
                width: wp('60%'),
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                borderRadius: 20
            }
        })
    },
    buttonInactif: {
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: '#FFFFFE',
                width: wp('60%'),
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                borderRadius: 20
            },
            default: {
                // other platforms, web for example
                backgroundColor: '#FFFFFE',
                width: wp('60%'),
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                borderRadius: 20
            }
        })
    },
    buttonText: {
        color: "white"
    },
    buttonTextInactif: {
        color: "#666666"
    },
    center: {
        alignItems: 'center'
    },
    container: {
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                flex: 2,
                paddingTop: hp('5%'),
                alignItems: 'center',
                backgroundColor: '#FFFFFE'
            },
            default: {
                flex: 1,
                paddingTop: hp('5%'),
                alignItems: 'center',
                backgroundColor: '#FFFFFE'
            }
        })
    },
    containerList: {
        flex: 2
        //padding: 10
    },
    containerListRed: {
        flex: 2,
        padding: 10,
        backgroundColor: '#f4abce'
    },
    containerListBlue: {
        flex: 2,
        padding: 10,
        backgroundColor: '#adabf4'
    },
    image: {
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                width: hp('25%'),
                height: wp('25%')
            },
            android: {
                width: hp('14%'),
                height: wp('25%'),
                marginBottom: hp('2%'),
                alignSelf: 'center'
            },
            default: {
                // other platforms, web for example
                width: hp('12%'),
                height: wp('20%'),
                alignSelf: 'center'
            }
        })
        
        
    },
    input: {
        ...Platform.select({
            ios: {
                //a faire
                backgroundColor: '#9cedcb',
                paddingTop: hp('30%')
            },
            android: {
                backgroundColor: '#CCCCCC',
                width: wp('60%'),
                height: 40,
                marginBottom: 15,
                paddingLeft: wp('5%')
            },
            default: {
                // other platforms, web for example
                backgroundColor: '666666',
                width: wp('60%'),
                height: hp('5%'),
                marginBottom: hp('1%'),
                paddingLeft: wp('5%')
        }
        })
    },
    inputLarge: {
        backgroundColor: 'white',
        width: wp('60%'),
        height: hp('40%'),
        marginBottom: 15,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 15
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: "space-between",
        marginBottom: 25
    },
    itemParty: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 25
    },
    login: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: '#9cedcb',
                paddingTop: hp('30%')
            },
            android: {
                backgroundColor: '#FFFFFE',
                paddingTop: hp('30%'),
                alignItems: 'center'
            },
            default: {
                // other platforms, web for example
                backgroundColor: '#FFFFFE',
                paddingTop: hp('30%'),
                alignItems: 'center'
            }
        })
        
    },
    scrollview: {
        width: wp('90%'),
        marginLeft: wp('5%'),
        paddingTop: 25
    },
    textblack: {
        color: 'black',
        textAlign: 'center'
    },
    textblackwithwhiteback: {
        backgroundColor: 'white',
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        color: 'black',
        textAlign: 'justify'
    },
    textblackbold: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        color: "black"
    },
    title2: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: "black",
        flex: 3,
        justifyContent: 'center'
    },
    
    
    
    
    
    
    /*buttonGreen: {
        backgroundColor: "green",
        width: wp('20%'),
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: wp('40%'),
        marginTop: 10
    },
    buttonDelete: {
        backgroundColor: "red",
        padding: 10,

    },
    buttonEdit: {
        backgroundColor: "#321aed",
        padding: 10,
        marginBottom: 5,
        width: wp('60%'),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center'
    },
    name: {
        color: "white",
        fontSize: 20
    },
    address: {
        color: "white",
        fontSize: 16
    },
    
    
    containerLogout: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 25
    },
    containerParty: {
        flex: 1,
        flexDirection: "row",
        padding: "1%",
        justifyContent: "center"
    },
    containerPartyMenu: {
        flex: 1,
        flexDirection: "row",
        padding: "1%",
        justifyContent: "center",
        alignSelf: "center"
    },
    titleAddParty: {
        color: "white",
        fontSize: 26,
        textAlign: "center",
        marginTop: 50
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    textLogout: {
        color: "black",
        fontSize: 20
    },
    scrollContainer: {
        width: wp('100%'),
        textAlign: 'center',
        paddingBottom: 50
    },
    select: {
        backgroundColor: "white",
        width: wp('60%'),
        height: 40,
        marginBottom: 15,
        marginLeft: wp('20%'),
        paddingLeft: wp('5%')
    },
    textarea: {
        backgroundColor: 'white',
        width: wp('60%'),
        height: 120,
        marginBottom: 15,
        marginLeft: wp('20%'),
        paddingLeft: wp('5%')
    },
    red: {
        color: "red"
    },
    TW: {
        padding: wp('3%'),
        color: "black"
    },
    commande: {
        flex: 1
    },
    checkBoxContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: wp('10%'),
    },
    checkBox: {
        flex: 1,
        paddingLeft: wp("20%"),
        paddingBottom: 10
    },
    */
});
export { styles }