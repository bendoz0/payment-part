import React, {useContext, useEffect, useState} from 'react';
import {
    Button,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {router, Stack} from "expo-router";
// @ts-ignore
import backgroundImage from './assets/bg-1.jpg';
import {DataContext} from "@/app/flusso-pagamento/context/DataProvider";
import {style} from "@/app/flusso-pagamento/Components/Stili"


const ButtonPagamento = ({tariffa = 10}) => {
    const [parkingTime, setParkingTime] = useState<number | null>(null);
    const [totalToPay, setTotalToPay] = useState(0);
    const {setDuration} = useContext(DataContext);

    useEffect(() => {
        if (parkingTime !== null && parkingTime > 0) {
            const total = (parkingTime / 60) * tariffa;
            setTotalToPay(parseFloat(total.toFixed(2)));
            // @ts-ignore
            setDuration(parkingTime * 60);
        } else {
            setTotalToPay(0.00);
        }
    }, [parkingTime]);

    const handleInputChange = (input: string) => {
        const numericValue = parseInt(input);
        if (!isNaN(numericValue) && numericValue > 0) {
            setParkingTime(numericValue);
        } else {
            setParkingTime(null);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: "#3895ff"},
                    headerTitleAlign: "center",
                    headerTitleStyle: {color: "white", fontSize: 32, fontWeight: "heavy"},
                    title: "Durata",
                }}
            />
            <ImageBackground source={backgroundImage} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={style.scrollView}>
                    <View style={style.steps}>
                        <Text style={style.stepComplete}
                              onPress={() => router.push("/flusso-pagamento/Pagina-1")}>✔</Text>
                        <Text style={style.stepCurrent}>○</Text>
                        <Text style={style.stepIncomplete}>○</Text>
                        <Text style={style.stepIncomplete}>○</Text>
                    </View>
                    <View>
                        <View style={style.section}>
                            <Text style={style.label}>Impostare il tempo della sosta:</Text>
                            <TextInput
                                style={style.textArea}
                                placeholder="How many minutes do you stay away?"
                                keyboardType="numeric"
                                onChangeText={handleInputChange}
                                maxLength={5}
                                value={parkingTime !== null ? parkingTime.toString() : ''}
                            />
                        </View>
                        <View style={style.section}>
                            <Text style={style.label}>Totale da pagare :</Text>
                            <View style={style.resultBox}>
                                <Text style={style.resultText}>{totalToPay}€</Text>
                            </View>
                        </View>
                        <View style={style.section}>
                            <TouchableOpacity style={style.nextButton}>
                                <Button
                                    title={"Vai al pagamento"}
                                    onPress={() => {
                                        parkingTime !== null ? router.push("/flusso-pagamento/Pagina-3") : null
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default ButtonPagamento;
