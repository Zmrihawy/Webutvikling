import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';
export default class ListView extends React.Component {
    state = {
        text: '',
    }
    
    render(){
        return (
            <View style={styles.margin}>
                <View style={styles.center, styles.heading}>
                    <Text style={styles.h1}>eCatalog</Text>
                    <Text style={styles.small}>home for electronics</Text>
                </View>
                <View>
                    <TextInput
                        label='Search for a pc, mobile, TV ... '
                        onChangeText={text => this.setState({ text })}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    margin: {margin: 35},
    h1: {color: 'white', fontSize: 28},
    center: {alignItems: 'center'},
    small: {fontSize: 10, color: 'white'},
    heading: {margin: 10}
});
