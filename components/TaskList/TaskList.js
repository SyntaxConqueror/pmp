import React, {useEffect, useState} from "react";
import {View, FlatList, Text, Button, StyleSheet} from 'react-native';
import {Popup} from "./PopUp/PopUp";
export const TaskList = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        setTaskList([]);
        for(let i = 1; i < 6; i++){
            setTaskList((prevState) => {
                return [...prevState, {key: i + " task"}];
            });
        }
    }, []);

    const onDelete = (taskToDelete) => {
        setTaskList((prevState) => {
            return prevState.filter(task => task !== taskToDelete);
        });
    }

    const addTask = (taskName) => {
        setTaskList([...taskList, { key: taskName }]);
        closePopup();
    };

    const openPopup = () => {
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <FlatList
                data = {taskList}
                renderItem={({item})=>{
                    return (
                        <View style={styles.container}>
                            <Text>{item.key}</Text>
                            <Button title={'Delete'} onPress={() => onDelete(item)}/>
                        </View>
                    )
                }}
            />
            <Button title={'Add task'} onPress={openPopup}/>
            <Popup visible={isPopupVisible} onClose={closePopup} onAdd={addTask} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#fab',
        margin: 10,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: '#88b1f2',
        fontSize: 24
    },

});