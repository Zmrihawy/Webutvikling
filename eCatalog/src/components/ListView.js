import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

import { Searchbar, List, Checkbox } from 'react-native-paper';
export default class ListView extends React.Component {
    state = {
        firstQuery: '',
        expanded: false,
    }
    
    _handlePress = () =>
        this.setState({
            expanded: !this.state.expanded
    });
    
    render(){
        const { firstQuery } = this.state;
        return (
            <View style={styles.margin}>
                <View style={styles.center, styles.heading}>
                    <Text style={styles.h1}>eCatalog</Text>
                    <Text style={styles.small}>home for electronics</Text>
                </View>
                <View>
                    <Searchbar
                        placeholder='Search for a pc, mobile, TV ... '
                        onChangeText={ text => this.setState({ firstQuery: query }) }
                    />
                </View>
                <View style={styles.body}>
                    <List.Section>
                
                        <List.Accordion
                               title="Item title"
                               left={props => <List.Icon {...props} />}
                               expanded={this.state.expanded}
                               onPress={this._handlePress}
                        >
                               <List.Item title="Item title" />
                               <List.Item title="Item Description" />
                        </List.Accordion>
                
                        <List.Accordion
                                title="Item title 2"
                                left={props => <List.Icon {...props} />}
                                expanded={this.state.expanded}
                                onPress={this._handlePress}
                        >
                                <List.Item title="Item title 2" />
                                <List.Item title="Item Description" />
                        </List.Accordion>
                
                
                    </List.Section>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    margin: {margin: 35},
    h1: {fontSize: 28},
    center: {alignItems: 'center'},
    small: {fontSize: 10},
    heading: {margin: 10},
    body:{color: 'white'},
});
