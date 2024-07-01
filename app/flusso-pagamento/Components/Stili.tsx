import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container: {flex: 1,},
    scrollView: {paddingHorizontal: 20,},
    steps: {flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20, cursor: "pointer",},
    stepComplete: {color: 'blue', fontSize: 24,},
    stepCurrent: {color: 'blue', fontSize: 24,},
    stepIncomplete: {color: 'gray', fontSize: 24,},
    section: {marginVertical: 10, alignItems: 'center',},
    label: {fontSize: 18, color: '#333', marginBottom: 10, fontWeight: "bold",},
    textArea: {
        width: '30%',
        height: 50,
        borderColor: '#0000fc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f0f0f0',
    },
    resultBox: {
        width: '30%',
        height: 50,
        borderColor: '#0000fa',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    resultText: {fontSize: 18, color: '#002aff', fontWeight: "bold",},
    linkText: {fontSize: 18, color: 'blue', marginBottom: 10,},
    nextButton: {
        paddingTop: 30,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 24,
        color: 'white',
    },

    barramenu:{
        backgroundColor: 'white',
        borderColor: '#0000fc',
        borderWidth: 1,
        height: 40,
        padding: 5,
        borderRadius: 15,
    },
    textbarramenu:{
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 10,
    },
    elementomenu:{
        top: 5,
        backgroundColor: '#174b69',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        color: '#89bedc',
        padding: 10,
        fontSize: 16,
        textAlign: 'center',
    },

});

export {style};
