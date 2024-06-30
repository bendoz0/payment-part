import {Stack} from "expo-router";
import {useState} from "react";
import {DataContext} from "@/app/flusso-pagamento/context/DataProvider";
import {ApplicationProvider} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';

export default function RootLayout() {
    const [duration, setDuration] = useState(0);

    return (
        <DataContext.Provider value={{duration, setDuration}}>
            <ApplicationProvider {...eva} theme={eva.light}> {/* o eva.dark o il tuo tema personalizzato */}

                <Stack>
                <Stack.Screen name="index"/>
            </Stack>
            </ApplicationProvider>
        </DataContext.Provider>
    );
}
