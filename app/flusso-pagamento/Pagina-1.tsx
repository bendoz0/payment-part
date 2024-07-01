import React, {useEffect, useState} from "react";
import {TextInput, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {Dropdown} from "@/app/flusso-pagamento/Components/ListaTarghe";
import {router} from "expo-router";
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
        <View style={style.sfondo}>
            <View style={style.blocco1}>
                <Text style={style.titoli}>Seleziona la targa dell'auto parcheggiata: </Text>
                <Dropdown options={["ABSBS", "CSDCSC"]} onSelect={handleSelect}/>
            </View>

            <View style={style.blocco2}>
                <Text style={style.titoli}>Inserisci una nuova targa: </Text>
                <TextInput style={style.input} editable={isEditable}  placeholder="AA 000 AA" value={input} onChangeText={text => setInput(text)}/>
            </View>

            <View style={style.blocco3}>
                <TouchableOpacity  onPress={handlePress}>
                    <Text style={style.button}>Prosegui</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default FirstPage