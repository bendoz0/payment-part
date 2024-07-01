import React from "react";
import {TextInput, Text, View, StyleSheet, Button} from "react-native"
import {router} from "expo-router";

const Index = () => {
    return (
        <View>
            <View style={styles.container}>
                <Button title={"Vai al Pagamento"} onPress={() => router.push("/flusso-pagamento/Pagina-1")}/>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        gap: 16
    },
    text: {
        color: "white"
    }
})