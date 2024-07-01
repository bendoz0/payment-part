import React from "react";
import {ImageBackground, Text, View} from "react-native"
import {router, Stack} from "expo-router";
// @ts-ignore
import backgroundImage from './flusso-pagamento/assets/parcheggi.png';
import {style} from "@/app/flusso-pagamento/Components/Stili"
import {FontAwesome5} from '@expo/vector-icons';
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
            <ImageBackground source={backgroundImage} resizeMode="cover" style={style.bg_style}/>
            <View style={style.starting_btn}>
                <Pressable onPress={() => router.push("/flusso-pagamento/Pagina-1")}
                           style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 8}}>
                    <FontAwesome5 name="map-marker-alt" size={42} color="red"/>
                    <Text style={{
                        fontSize: 24, fontWeight: "bold", color: "white", textShadowColor: '#000000',
                        textShadowRadius: 2,
                    }}>
                        Parcheggio SanGiovanni
                    </Text>
                </Pressable>
                <View style={{
                    position: "absolute",
                    height: 200,
                    width: "100%",
                    borderTopRightRadius: 69,
                    borderTopLeftRadius: 69,
                    backgroundColor: "white",
                    bottom: 50,
                    shadowRadius: 69,
                    shadowColor: "black",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8
                }}>
                    <Text style={{color: "#3895ff", fontWeight: "bold", fontSize: 32}}>You've arrived to the destination</Text>
                    <Pressable onPress={() => router.push("/flusso-pagamento/Pagina-1")}
                               style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 8}}>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "white",
                            textShadowColor: '#000000',
                            textShadowRadius: 2,
                            backgroundColor: "#3895ff",
                            padding: 8,
                            paddingHorizontal: 16,
                            borderRadius: 16
                        }}>
                            Proceed to payment
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Index