import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

export const Popup = ({ visible, onClose, onAdd }) => {
    const [inputText, setInputText] = useState('');

    const handleAdd = () => {
        if(inputText.length === 0){
            return;
        }
        onAdd(inputText);
        setInputText('');
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View>

                <TextInput
                    style={styles.textInput}
                    placeholder="Task name"
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                />
                <View style={styles.buttonsCont}>
                    <View style={styles.buttons}>
                        <Button title={"Add"} onPress={handleAdd}  />
                    </View>
                    <View style={styles.buttons}>
                        <Button  title={"Close"} onPress={onClose} />
                    </View>

                </View>

            </View>
        </Modal>
    );
};

const styles = new StyleSheet.create({

    textInput: {
        padding: 10,
        margin: 10,
        fontSize: 22,
        borderWidth: 2,
        borderColor: "#4184f2"
    },
    buttonsCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

        width: '100%'
    },
    buttons:{
        width: '45%',

    }
});