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
import backgroundImage from './assets/BG_car.jpg';
import {DataContext} from "@/app/flusso-pagamento/context/DataProvider";

const ButtonPagamento = ({tariffa = 10}) => {
    const [parkingTime, setParkingTime] = useState<number | null>(null);
    const [totalToPay, setTotalToPay] = useState(0);
    const {setDuration} = useContext(DataContext);

    useEffect(() => {
        if (parkingTime !== null && parkingTime > 0) {
            const total = (parkingTime / 60) * tariffa;
            setTotalToPay(parseFloat(total.toFixed(2)));
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
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: "#3895ff"},
                    headerTitleAlign: "center",
                    headerTitleStyle: {color: "white", fontSize: 32, fontWeight: "heavy"},
                    title: "Durata",
                }}
            />
            <ImageBackground source={backgroundImage} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.steps}>
                        <Text style={styles.stepComplete}
                              onPress={() => router.push("/flusso-pagamento/Pagina-1")}>✔</Text>
                        <Text style={styles.stepCurrent}>○</Text>
                        <Text style={styles.stepIncomplete}>○</Text>
                        <Text style={styles.stepIncomplete}>○</Text>
                    </View>
                    <View style={styles.section_group}>
                        <View style={styles.section}>
                            <Text style={styles.label}>Impostare il tempo della sosta:</Text>
                            <TextInput
                                style={styles.textArea}
                                placeholder="How many minutes do you stay away?"
                                keyboardType="numeric"
                                onChangeText={handleInputChange}
                                maxLength={5}
                                value={parkingTime !== null ? parkingTime.toString() : ''}
                            />
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Totale da pagare :</Text>
                            <View style={styles.resultBox}>
                                <Text style={styles.resultText}>{totalToPay}€</Text>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <TouchableOpacity style={styles.nextButton}>
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

const styles = StyleSheet.create({
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
});

export default ButtonPagamento;
