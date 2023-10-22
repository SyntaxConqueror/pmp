import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
export const ColorChanger = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);

    const changeColor = () => {
        // Обмежуємо значення R, G, B в межах від 0 до 255
        const newRed = Math.min(255, Math.max(0, red));
        const newGreen = Math.min(255, Math.max(0, green));
        const newBlue = Math.min(255, Math.max(0, blue));
        setRed(newRed);
        setGreen(newGreen);
        setBlue(newBlue);
    };

    const renderTable = () => {
        const table = [];
        for (let row = 0; row < 3; row++) {
            const rowItems = [];
            for (let col = 0; col < 3; col++) {
                rowItems.push(
                    <View
                        key={`second-${row}-${col}`}
                        style={styles.tableRow}
                    />
                );
            }
            table.push(
                <View key={`second-${row}`} style={{ flexDirection: 'row'}}>
                    {rowItems}
                </View>
            );
        }
        return table;
    };


    return (
        <View style={styles.container}>
            <View
                style={{
                    width,
                    height,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                }}
            />
            <View>
                <TextInput
                    placeholder="R"
                    keyboardType="numeric"
                    onChangeText={(text) => setRed(parseInt(text) || 0)}
                    value={red.toString()}
                />
                <TextInput
                    placeholder="G"
                    keyboardType="numeric"
                    onChangeText={(text) => setGreen(parseInt(text) || 0)}
                    value={green.toString()}
                />
                <TextInput
                    placeholder="B"
                    keyboardType="numeric"
                    onChangeText={(text) => setBlue(parseInt(text) || 0)}
                    value={blue.toString()}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Icon
                    name="add"
                    type="material"
                    onPress={() => setWidth(width + 10)}
                />
                <Text style={{ marginHorizontal: 10 }}>Ширина: {width}</Text>
                <Icon
                    name="remove"
                    type="material"
                    onPress={() => setWidth(width - 10)}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Icon
                    name="add"
                    type="material"
                    onPress={() => setHeight(height + 10)}
                />
                <Text style={{ marginHorizontal: 10 }}>Висота: {height}</Text>
                <Icon
                    name="remove"
                    type="material"
                    onPress={() => setHeight(height - 10)}
                />
            </View>
            <View style={styles.table}>
                {renderTable()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        color: '#88b1f2',
        fontSize: 24
    },
    table: {
        display: 'flex',
        marginTop: 20,
    },
    tableRow: {
        width: 40,
        height: 40,
        margin: 5,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'lightblue',
    }
});