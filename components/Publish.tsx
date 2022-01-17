import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { PostItem } from '../models/PostItem';

interface ChildProps {
    addCoffeePost: (post: PostItem) => void
}

const Publish: React.FC<ChildProps> = (props) => {
    const [input, setInput] = useState('Quoi de neuf ?');

    const handleChangeInput = (value: React.SetStateAction<string>) => {
        setInput(value);
    }

    const getRandomImg = () => {
        Keyboard.dismiss();
        fetch('https://coffee.alexflipnote.dev/random.json')
            .then(response => response.json())
            .then((response) => {
                props.addCoffeePost({
                    "imgsrc": response.file,
                    "content": input
                })
            })
            .catch((error) => {
                Alert.alert(error);
            });
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={input} onChangeText={handleChangeInput} />
            <TouchableOpacity onPress={getRandomImg}>
                <View style={styles.publishBtn}>
                    <Text style={styles.publishText}>Publier</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 8,
    },
    input: {
        backgroundColor: '#fafafa',
        borderRadius: 8,
        height: 50,
        marginBottom: '3%',
        color: '#e9e9e9',
        fontWeight: '600',
        paddingLeft: '5%'
    },
    publishBtn: {
        backgroundColor: '#ffec4f',
        alignSelf: 'flex-end',
        paddingHorizontal: '8%',
        borderRadius: 7,
        paddingVertical: '1%',
        width: 'auto',
        marginBottom: 7
    },
    publishText: {
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 16
    }
});


export default Publish;