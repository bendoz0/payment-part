import React, {useEffect, useState} from "react";
import {TextInput, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {Dropdown, styles} from "@/app/flusso-pagamento/Components/ListaTarghe";
import {router, Stack} from "expo-router";
// import {getTarga, InsertTarga} from "@/app/flusso-pagamento/Query/Query_TargheUtente";


const useTarghe = (id_utente) => {
    const [loading, setLoading] = useState(true);
    const [targhe, setTarghe] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch("data.json")
            console.log("res", res)
        })();
    }, []);
    return {loading, targhe};
}

const FirstPage = () => {
    const handleSelect = (option: string) => {
    };
    const {loading, targhe} = useTarghe(1)

    const [input, setInput] = useState("");

    const insertTarga = async () => {
        try {
            console.log(input);
            // await InsertTarga(1, input);
        } catch (error) {
            console.error('Failed to insert targa:', error);
        }
    };

    const handlePress = async () => {
        // await insertTarga();
        router.push("/flusso-pagamento/Pagina-2");
    };

    return (
        <View style={styless.container}>

            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: "#3895ff"
                },
                headerTitleAlign: "center",
                headerTitleStyle: {
                    color: "white",
                    fontSize: 32,
                    fontWeight: "heavy"
                },
                title: "Macchina",
            }}/>
            <Text style={styless.label}>Seleziona la targa dell'auto parcheggiata: </Text>
            <Dropdown options={["ABAVB", "CDCDC", "DFDFDF"]} onSelect={handleSelect}/>

            <Text style={[styless.label]}>Inserisci una nuova targa: </Text>
            <TextInput style={styless.textArea} placeholder="AA 000 AA" value={input} onChangeText={text => setInput(text)}/>

            <TouchableOpacity style={styless.nextBtn} onPress={handlePress}>
                <Text style={{color: "white"}} >Prosegui</Text>
            </TouchableOpacity>
        </View>
    )
}
export default FirstPage

const styless = StyleSheet.create({
    container: {
        top: 50,
        alignItems: 'center',
        gap: 16,
    },
    label: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 10,
        fontWeight: "bold",
    },
    textArea: {
        width: '20%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f0f0f0',
        textAlign: 'center'
    },
    nextBtn: {
        top: 100,
        padding: 12,
        backgroundColor: 'blue', //#155e85
        borderRadius: 6,
    }
})