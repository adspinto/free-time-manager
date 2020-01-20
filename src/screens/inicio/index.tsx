
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    FlatList
} from 'react-native';




export interface IProps {
    name: string,
    enthusiasmLevel?: number;
}

interface State {
    enthusiasmLevel: number;
}



const InicioScreen: React.FC<IProps> = (props) => {


    const taskItem = ({item}) => {
        return (
            <View>
                <Text>{item.task}</Text>
            </View>
        )
    } 

    const taskKeyExtractor = (item, index) => `key-index-${index}`
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text>Freetime left</Text>
            </View>
            <View>
                <Text>Current Task</Text>
            </View>
            <FlatList
                data={[{task: "a task", }]}
                renderItem={taskItem}
                keyExtractor={taskKeyExtractor}
            />
        </View>
    )
}



export default InicioScreen;
