import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Stack} from "expo-router";
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import {useDataContext} from "@/app/flusso-pagamento/context/DataProvider";

function Pagina5() {
    const {duration} = useDataContext();
    return (
        <>
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
                    backgroundColor: "#435fd1"
                }
            }}/>
            <View style={style.main_container}>
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
                                {remainingTime !== 0 ?
                                    <>
                                        <Text style={{fontSize: 32, padding: 16, marginBottom: 16}}>Remaining</Text>
                                        <Text style={{fontSize: 42}}>{`${hours}:${minutes}:${seconds}`}</Text>
                                    </> :
                                    <Text style={{textAlign: "center"}}>User has not selected the duration.
                                        <hr/>
                                        This page shouldn't be visible to the user unless <br/>its a verified
                                        user. <br/>Its visible to you've either broke the application<br/>or right now
                                        for the sake of prod</Text>
                                }
                            </>
                        )
                    }}
                </CountdownCircleTimer>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    main_container: {
        alignItems: "center",
        padding: 16,
        // backgroundColor: "#c8d3ff"
    },
    heading: {
        fontFamily: "Tahoma",
        fontSize: 42,
        marginBottom: 42
    }
})
export default Pagina5;
