import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Stack} from "expo-router";
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import {useDataContext} from "@/app/flusso-pagamento/context/DataProvider";
// @ts-ignore
import backgroundImage from "@/app/flusso-pagamento/assets/bg-1.jpg";
import {Card} from "@ui-kitten/components";

function Pagina5() {
    const {duration} = useDataContext();
    return (
        <>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={{width: '100%', height: '100%'}}>

                <Stack.Screen options={{
                    headerLeft: null,
                    title: "Timer",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 32,
                        color: "white"
                    },
                    headerStyle: {
                        backgroundColor: "#3badff"
                    }
                }}/>
                <View style={style.main_container}>
                    <Card style={style.card}>

                        <Text style={style.heading}>
                            Scade fra
                        </Text>
                        <CountdownCircleTimer
                            isPlaying
                            duration={duration}
                            colors={['#004777', '#F7B801', '#18ff00', '#A30000']}
                            colorsTime={[166, 55, 20, 0]}
                            size={369}
                            onComplete={() => {
                                return {shouldRepeat: false,}
                            }}
                        >
                            {({remainingTime}) => {
                                const hours = Math.floor(remainingTime / 3600)
                                const minutes = Math.floor((remainingTime % 3600) / 60)
                                const seconds = remainingTime % 60
                                return (
                                    <>
                                        {duration ?
                                            <>
                                                <Text style={{
                                                    fontSize: 32,
                                                    padding: 16,
                                                    marginBottom: 16
                                                }}>Remaining</Text>
                                                <Text style={{fontSize: 42}}>{`${hours}:${minutes}:${seconds}`}</Text>
                                            </> :
                                            <Text style={{textAlign: "center"}}>User has not entered the duration.
                                                <hr/>
                                                This page shouldn't be visible to the user unless <br/>its a verified
                                                user. <br/>Its visible to you've either broke the application<br/>or
                                                right now
                                                for the sake of prod</Text>
                                        }
                                    </>
                                )
                            }}
                        </CountdownCircleTimer>
                    </Card>
                </View>
            </ImageBackground>
        </>
    );
}

const style = StyleSheet.create({
    main_container: {
        alignItems: "center",
        padding: 16,
        width: "100%",
        height: "100%",
        justifyContent: "center"
        // backgroundColor: "#c8d3ff"
    },
    heading: {
        fontFamily: "Tahoma",
        fontSize: 42,
        marginBottom: 42,
        textAlign: "center"
    },
    card: {
        padding: 8,
        justifyContent: "center",
        borderRadius: 69,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 2,
        alignSelf: "center",
    }
})
export default Pagina5;
