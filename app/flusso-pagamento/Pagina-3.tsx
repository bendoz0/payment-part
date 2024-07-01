import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js";
import PaymentForm from "@/app/flusso-pagamento/Components/PaymentForm";
import {ImageBackground, Text, View} from 'react-native'
import {ApplicationProvider} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import {Stack} from "expo-router";
import backgroundImage from './assets/bg-1.jpg';
import {style} from "@/app/flusso-pagamento/Components/Stili";


export const stripePromise = loadStripe(String(process.env.PUBLISHABLE_KEY));
export default function Pagina3() {
    return (
        <>
            <Stack.Screen options={{
                headerLeft: null,
                headerStyle:{
                    backgroundColor: "#0077ff"
                },
                headerTitleAlign: "center",
                headerTitleStyle:{
                    color: "white",
                    fontSize: 32,
                    fontWeight: 16
                },
                title: "Pay n Park",
            }} />

            <ApplicationProvider {...eva} theme={eva.light}>
                <Elements stripe={stripePromise}>
                    <PaymentForm/>
                </Elements>
            </ApplicationProvider>
        </>
    );
}