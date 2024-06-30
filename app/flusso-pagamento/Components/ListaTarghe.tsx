import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Dropdown = ({options, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };
    console.log("options", options);

    return (
        <View>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.dropdownButton}>
                <Text style={styles.dropdownButtonText}>{selectedOption || 'Seleziona la targa'}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdownMenu}>
                    {options?.map((option, index) => {
                            console.log("option", option)
                            return (
                                <TouchableOpacity key={index} onPress={() => handleSelect(option)}
                                                  style={styles.dropdownItem}>
                                    <Text style={styles.dropdownItemText}>{option}</Text>
                                </TouchableOpacity>
                            )
                        }
                    )}
                </View>
            )}
        </View>
    );
};

export {Dropdown, styles};

const styles = StyleSheet.create({

    dropdownButton: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        alignItems: 'center',
    },
    dropdownButtonText: {
        fontSize: 22,
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        padding: 8,
        borderRadius: 5

    },
    dropdownMenu: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginTop: 5,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    dropdownItemText: {
        fontSize: 16,
    },
});