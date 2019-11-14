import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView  } from 'react-native';

import { Searchbar, List, Checkbox } from 'react-native-paper';
export default ListView = (props) => {
    
    const { components } = props;
    const [expandedLists, setExpandedLists] = useState({});
    const [searchText, setSearchText] = useState("");

    _handlePress = (componentName) => {
        expandedLists[componentName] = expandedLists[componentName] ? false : true;
        setExpandedLists(expandedLists);
    }


    const listItemStyle = {
      backgroundColor: "#e8f4f8"
    }

    const mappedComponents = components.map((component, i) => (
      <List.Accordion key={i}
              style={{backgroundColor: 'white', marginTop: 5}}
             title={component.name}
             left={component => <List.Icon {...component} />}
             expanded={expandedLists[component.name]}
               onPress={() => _handlePress(component.name)}
      >
             <List.Item style={listItemStyle} title={component.description} />
             <List.Item style={listItemStyle} title={component.producer} />
             <List.Item style={listItemStyle} title={component.category} />
             <List.Item style={listItemStyle} title={component.price + "kr"} />
      </List.Accordion>
    ))

    
    return (
        <View style={styles.margin}>
          <View style={styles.center, styles.heading}>
            <Text style={styles.h1}>eCatalog</Text>
            <Text style={styles.small}>home for electronics</Text>
          </View>
          <View>
            <Searchbar
              placeholder='Search for a pc, mobile, TV ... '
              onChangeText={ text => setSearchText(text) }
            />
          </View>
          <ScrollView>
          <View style={styles.body}>
            <List.Section>
              {mappedComponents}
            </List.Section>
          </View>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    margin: {margin: 35},
    h1: {fontSize: 28},
    center: {alignItems: 'center'},
    small: {fontSize: 10},
    heading: {margin: 10},
    body:{color: 'white'},
});
