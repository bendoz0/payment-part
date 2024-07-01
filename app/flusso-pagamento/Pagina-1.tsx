import React, {useEffect, useState} from "react";
import {TextInput, Text, StyleSheet, View, TouchableOpacity, ImageBackground, Button} from "react-native";
import {Dropdown} from "@/app/flusso-pagamento/Components/ListaTarghe";
import {router, Stack} from "expo-router";
// @ts-ignore
import backgroundImage from './assets/bg-1.jpg';
// import {getTarga, InsertTarga} from "@/app/flusso-pagamento/Query/Query_TargheUtente";
import {style} from "@/app/flusso-pagamento/Components/Stili"


// const useTarghe = (id_utente) => {
//     const [loading, setLoading] = useState(true);
//     const [targhe, setTarghe] = useState([]);
//
//     // useEffect(() => {
//     //     (async () => {
//     //         // const res = await getTarga(id_utente)
//     //         // @ts-ignore
//     //         setTarghe(res)
//     //     })();
//     // }, []);
//     // return {loading, targhe};
// }

const FirstPage = () => {
    const [isEditable, setIsEditable] = useState(true);
    const [input, setInput] = useState("");
    const handleSelect = () => {
        setInput("")
        setIsEditable(false)
    };
    // const {loading, targhe} = useTarghe(1)


    const insertTarga = async () => {
        try {
            console.log(input);
            // await InsertTarga(1, input);
        } catch (error) {
            console.error('Failed to insert targa:', error);
        }
    };

    const handlePress = async () => {
        await insertTarga();
        router.push("/flusso-pagamento/Pagina-2");
    };


    return (
        <View style={style.container}>

            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: "#3895ff"},
                    headerTitleAlign: "center",
                    headerTitleStyle: {color: "white", fontSize: 32, fontWeight: "heavy"},
                    title: "Targhe",
                }}
            />
            <ImageBackground source={backgroundImage} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                <View style={style.steps}>
                    <Text style={style.stepCurrent}>○</Text>
                    <Text style={style.stepIncomplete}>○</Text>
                    <Text style={style.stepIncomplete}>○</Text>
                    <Text style={style.stepIncomplete}>○</Text>
                </View>

                <View style={style.section}>
                    <Text style={style.label}>Seleziona la targa dell'auto parcheggiata: </Text>
                    <Dropdown options={["EJ896KA", "GH494DP","HT599LM", "DS287UT"]} onSelect={handleSelect}/>
                </View>

                <View style={style.section}>
                    <Text style={style.label}>Inserisci una nuova targa: </Text>
                    <TextInput style={style.textArea} editable={isEditable} placeholder="AA 000 AA" value={input}
                               onChangeText={text => setInput(text)}/>
                </View>

                <View style={style.section}>
                    <TouchableOpacity style={style.nextButton} onPress={handlePress}>
                        <Button title={'Prosegui'} onPress={() => input !== "" || !isEditable ? router.push("/flusso-pagamento/Pagina-2"): null}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>

    )
}
export default FirstPage