import React from 'react';
import { Text } from 'react-native';

export default class MyComponent extends React.Component {
    state = {
        active: null,
    };

    render() {
        const { active } = this.state;
        return (
            <Text>This this an app </Text>
        );
    }
}; 
