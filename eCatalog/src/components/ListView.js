import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, AsyncStorage  } from 'react-native';

import { Searchbar, List, Checkbox } from 'react-native-paper';
import { Button } from 'react-native-paper';
export default ListView = (props) => {
    
    const { components } = props;
    const [expandedLists, setExpandedLists] = useState({});
    const [searchText, setSearchText] = useState("");

    _handlePress = (componentName) => {
        expandedLists[componentName] = expandedLists[componentName] ? false : true;
        setExpandedLists(expandedLists);
    }

    _saveData = (component) =>{
      AsyncStorage.getItem(component._id)
        .then(storedComponent => {
          let newProduct = JSON.parse(storedComponent)
          if( !newProduct ){
            return AsyncStorage.setItem(component._id, JSON.stringify(
              {component, count: 1}
            ))
          }
          return AsyncStorage.setItem(component._id, JSON.stringify(
            {component, count: newProduct.count + 1}
          ))
        })
        .catch(err => console.log(err))
    }

    _displayData = async() =>{
      try{
        AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiGet(keys, (err, components) => {
            console.log("heeeredsagsgfdsgsg", components)
            
            const mappedItems = components.map(x => JSON.parse(x[1])).map((component,i) => {
              console.log("Her er en component", component)
              return (
              <List.Accordion key={i}>
                <List.Item title={component.description} />
              </List.Accordion>)
            })
          })
        })
      }
      catch(error){
        alert(error)
      }
    }


    _clearAsyncStorage = async() => {
      AsyncStorage.clear();
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
             <Button icon="" mode="contained" onPress={() => _saveData(component)}>
                    Add to shopping cart
              </Button>
              <Button icon="" mode="contained" onPress={() => _displayData()}>
                    Display shopping cart
              </Button>
              <Button icon="" mode="contained" onPress={() => _clearAsyncStorage()}>
                    Clear shopping cart
              </Button>
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
