import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
// @ts-ignore
import {style} from "@/app/flusso-pagamento/Components/Stili"

const Dropdown = ({options, onSelect} : {options: string[], onSelect: () => void}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect();
    };
    console.log("options", options);

    return (
        <View>
            <TouchableOpacity style={style.barramenu} onPress={() => setIsOpen(!isOpen)} >
                <Text style={style.textbarramenu}>{selectedOption || 'Seleziona la targa'}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={style.menu}>
                    {options?.map((option, index) => {
                            console.log("option", option)
                            return (
                                <TouchableOpacity key={index} onPress={() => handleSelect(option)}>
                                    <Text >{option}</Text>
                                </TouchableOpacity>
                            )
                        }
                    )}
                </View>
            )}
        </View>
    );
};

export {Dropdown};

