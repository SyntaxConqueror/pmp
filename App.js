import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    ScrollView, Button
} from 'react-native';

import React, {useEffect, useState} from "react";
import {TaskList} from "./components/TaskList/TaskList";
import {ColorChanger} from "./components/LR6/ColorChanger";
import AuthForm from "./components/LR7/AuthForm/AuthForm";
import {Center, Heading, Input, NativeBaseProvider, VStack} from "native-base";

export default function App() {

  return (

        <NativeBaseProvider>
            <AuthForm/>
        </NativeBaseProvider>


  );
}

