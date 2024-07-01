import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Input, Layout, Radio, RadioProps, Text} from '@ui-kitten/components';
import {stripePromise} from "@/app/flusso-pagamento/Pagina-3";
import {router} from "expo-router";


const PaymentForm = () => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [checked, setChecked] = React.useState(false);
    const useRadioState = (): RadioProps => {
        return {checked, onChange: setChecked};
    };
    const successRadioState = useRadioState();
    const handleSubmit = async () => {
        const stripe = await stripePromise;

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: {
                number: '4242 4242 4242 4242',
                exp_month: 12,
                exp_year: 2023,
                cvc: '123',
            },
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
            router.push("/flusso-pagamento/Pagina-5")
        } else {
            setPaymentSuccess(paymentMethod);
            setPaymentError(null);
            router.push("/flusso-pagamento/Pagina-5")
        }
    };

    const handlePayPalSubmit = () => {
        setPaymentError(null);
        setPaymentSuccess('PayPal payment successful!');
        router.push("/flusso-pagamento/Pagina-5")
    };

    return (
        <Layout style={styles.container}>

            <Card>
                <Radio
                    style={styles.radio}
                    status='success'
                    {...successRadioState}
                >
                    Use default payment method
                </Radio>
                <Button
                    onPress={() => {
                        if (checked) router.push("/flusso-pagamento/Pagina-5")
                    }}
                    style={styles.button}
                >Pay now</Button>
            </Card>
            <Card style={styles.card}>
                <Text category="h5" style={styles.title}>Pay with Card</Text>
                <Input
                    value="4242 4242 4242 4242"
                    style={styles.input}
                    disabled
                />
                <View style={styles.row}>
                    <Input
                        value="12/23"
                        style={[styles.input, {width: '42%'}]}
                        disabled
                    />
                    <Input
                        value="123"
                        style={[styles.input, {width: '42%'}]}
                        disabled
                    />
                </View>
                <Button
                    onPress={handleSubmit}
                    style={styles.button}
                >
                    Pay with Card
                </Button>
                {paymentError ? <Text style={styles.errorMessage}>{paymentError}</Text>: null}
                {paymentSuccess ? <Text style={styles.successMessage}>Payment successful!</Text>: null}
            </Card>

            <Card style={styles.card}>
                <Text category="h5" style={styles.title}>Pay with PayPal</Text>
                <Button
                    onPress={handlePayPalSubmit}
                    style={styles.button}
                >
                    Pay with PayPal
                </Button>
            </Card>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        gap: 16,
        borderRadius: 16
    },
    card: {
        width: '69%',
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        alignSelf: "center",
    },
    title: {
        marginBottom: 10,
        textAlign: 'center',
        color: '#007bff',
    },
    input: {
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        gap: 16,
    },
    button: {
        marginTop: 15,
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: '#007bff',
    },
    errorMessage: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    successMessage: {
        color: 'green',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
});

export default PaymentForm;
