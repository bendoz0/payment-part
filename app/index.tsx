import React from "react";
import {TextInput, Text, View, StyleSheet, Button, ImageBackground} from "react-native"
import {router, Stack} from "expo-router";
// @ts-ignore
import backgroundImage from './flusso-pagamento/assets/parcheggi.png';
import {style} from "@/app/flusso-pagamento/Components/Stili"
import { FontAwesome5 } from '@expo/vector-icons';
import {Pressable} from "expo-router/build/views/Pressable";


const Index = () => {
    return (
        <View style={{backgroundColor: "black"}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: "#3895ff"},
                    headerTitleAlign: "center",
                    headerTitleStyle: {color: "white", fontSize: 32, fontWeight: "heavy"},
                    title: "Home",
                }}
            />
            <ImageBackground source={backgroundImage} resizeMode="cover" style={style.bg_style} />
            <View style={style.starting_btn}>
                <Pressable onPress={() => router.push("/flusso-pagamento/Pagina-1")} style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 8}} >
                    <FontAwesome5 name="map-marker-alt" size={42} color="red" />
                    <Text style={{fontSize: 24, fontWeight: "bold", color: "white",  textShadowColor:'#000000',
                        textShadowRadius:2,}}>
                        Parcheggio SanGiovanni
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Index