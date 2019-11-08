import React from 'react';
import { View, StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';
export default class ListView extends React.Component {
    state = {
        text: '',
    }
    
    render(){
        return (
            <View style={styles.searchbar}>
                <TextInput
                    label='Search for a component ... '
                    onChangeText={text => this.setState({ text })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchbar: {margin: 30},
});
