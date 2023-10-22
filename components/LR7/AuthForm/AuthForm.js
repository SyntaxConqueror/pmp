import React, { useState } from 'react';
import {Container, Input, Button, Text, View, VStack, Box} from 'native-base';
import { StyleSheet } from 'react-native';

const AuthForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        showMessage: false,
        message: '',
    });

    const handleLogin = () => {
        const validLogins = {
            user1: 'password1',
            user2: 'password2',
        };

        if (validLogins[formData.username] === formData.password) {
            setFormData({
                ...formData,
                showMessage: true,
                message: 'Авторизація пройшла успішно',
            });
        } else {
            setFormData({
                ...formData,
                showMessage: true,
                message: 'Помилка авторизації',
            });
        }
    };

    return (
        <Box style={styles.container}>
            <Box contentContainerStyle={styles.content}>
                <VStack style={styles.form}>
                    <View style={styles.item}>
                        <Input
                            style={styles.input}
                            placeholder="Логін"
                            onChangeText={(text) => setFormData({ ...formData, username: text })}
                        />
                    </View>
                    <View style={styles.item}>
                        <Input
                            style={styles.input}
                            secureTextEntry
                            placeholder="Пароль"
                            onChangeText={(text) => setFormData({ ...formData, password: text })}
                        />
                    </View>
                    <Button full style={styles.button} onPress={handleLogin}>
                        <Text>Увійти</Text>
                    </Button>
                </VStack>
            </Box>
            {formData.showMessage && (
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>{formData.message}</Text>
                </View>
            )}
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    content: {
        paddingHorizontal: 20,
    },
    form: {
        marginVertical: 20,
    },
    item: {
        marginVertical: 10,
        width: 200,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,

    },
    button: {
        backgroundColor: '#007AFF',
        marginTop: 20,
    },
    messageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    message: {
        fontSize: 16,
        color: 'red',
    },
});

export default AuthForm;