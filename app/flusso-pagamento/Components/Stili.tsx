import {StyleSheet} from "react-native";

const style = StyleSheet.create({

    sfondo:{
        backgroundColor: "#89bedc",
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    titoli:{
        color: '#0B3B57FF',
        fontSize: 24,
        fontWeight: 'bold',
        bottom: 5
    },
    blocco1:{
        top: 50
    },
    blocco2:{
        top: 150
    },
    blocco3:{
        top: 300
    },
    input:{
      backgroundColor: '#0B3B57FF',
        color: '#89bedc',
        height: 40,
        padding: 5,
        borderRadius: 15,
        textAlign: 'center',
    },
    barramenu:{
        backgroundColor: '#0B3B57FF',
        height: 40,
        padding: 5,
        borderRadius: 15,
    },
    textbarramenu:{
        color: '#89bedc',
        textAlign: 'center',
        fontSize: 20,
    },
    menu:{
        backgroundColor: '#174b69',
        borderRadius: 10,
    },
    elementomenu:{
        color: '#89bedc',
        padding: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    button:{
        backgroundColor: '#0B3B57FF',
        color: '#89bedc',
        height: 40,
        width: 80,
        borderRadius: 10,
        fontSize: 16,
        textAlign: 'center',
        justifyContent: 'center',
    },


    dropdownButton: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        alignItems: 'center',
    },
    dropdownButtonText: {
        fontSize: 22,
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        padding: 8,
        borderRadius: 5

    },
    dropdownMenu: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginTop: 5,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    dropdownItemText: {
        fontSize: 16,
    },
});

export {style};
