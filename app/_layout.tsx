import {Stack} from "expo-router";
import {useState} from "react";
import {DataContext} from "@/app/flusso-pagamento/context/DataProvider";

export default function RootLayout() {
    const [duration, setDuration] = useState(0);

    return (
        <DataContext.Provider value={{duration, setDuration}}>

            <Stack>
                <Stack.Screen name="index"/>
            </Stack>
        </DataContext.Provider>
    );
}
