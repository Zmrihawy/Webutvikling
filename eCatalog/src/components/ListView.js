import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, ScrollView, AsyncStorage, Text
} from 'react-native';
import { List, Button, DataTable } from 'react-native-paper';

import Sidebar from './SideBar';
import { backendURL } from '../../config';

export default ListView = (props) => {
  const [components, setComponents] = useState({ components: [] });
  const [expandedLists, setExpandedLists] = useState({});
  const [filter, setfilter] = useState(false);
  const [query, setQuery] = useState('');
  const [totPages, setTotPages] = useState(1);
  const [pageNum, setPageNum] = useState(0);

  const handlePress = (componentName) => {
    expandedLists[componentName] = !expandedLists[componentName];
    setExpandedLists(expandedLists);
  };

  const listItemStyle = {
    backgroundColor: '#e8f4f8'
  };

  const filterBy = () => {
    setfilter(!filter);
  };

  const fetchData = (query) => {
    setQuery(query);
    const url = `${backendURL
    }component/pagination/?${
      query
    }${pageNum ? `pageNum=${pageNum}` : ''}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setTotPages(res.totPages);
        setComponents(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setQuery(query);
    const url = `${backendURL
    }component/pagination/?${
      query
    }${pageNum ? `pageNum=${pageNum}` : ''}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setTotPages(res.totPages);
        setComponents(res);
      })
      .catch((err) => console.log(err));
  }, [JSON.stringify(components.components), query, pageNum]);

  const saveData = (component) => {
    AsyncStorage.getItem(component._id)
      .then((storedComponent) => {
        const newProduct = JSON.parse(storedComponent);
        if (!newProduct) {
          return AsyncStorage.setItem(
            component._id,
            JSON.stringify({ component, count: 1 })
          );
        }
        return AsyncStorage.setItem(
          component._id,
          JSON.stringify({ component, count: newProduct.count + 1 })
        );
      })
      .catch((err) => console.log(err));
  };

  const mappedComponents = components && components.components && components.components.length > 1
    ? components.components.map((component, i) => (
      <List.Accordion
        key={component._id}
        style={{ backgroundColor: 'white', marginTop: 5 }}
        title={component.name}
        left={(component) => <List.Icon {...component} />}
        expanded={expandedLists[component.name]}
        onPress={() => handlePress(component.name)}
      >
        <List.Item style={listItemStyle} title={component.description} />
        <List.Item style={listItemStyle} title={component.producer} />
        <List.Item style={listItemStyle} title={component.category} />
        <List.Item style={listItemStyle} title={`${component.price}kr`} />
        <Button
          icon=""
          mode="contained"
          onPress={() => saveData(component)}
        >
              Add to shopping cart
        </Button>
      </List.Accordion>
    ))
    : [];

  return (
    <View style={{height: '97%'}}>
      <View style={(styles.center, styles.heading)}>
        <Text style={styles.h1}>eCatalog</Text>
        <Text style={styles.small}>home for electronics</Text>
      </View>

      <View style={styles.heading}>
        <Button mode="contained" onPress={filterBy}>
          Filter by
        </Button>
        <Sidebar filter={filter} setQuery={fetchData} />
      </View>

      <View style={{ alignItems: 'center', width: '100%', marginBottom: 8 }}>
        <DataTable.Pagination
          page={pageNum}
          numberOfPages={totPages}
          onPageChange={(page) => {
            setPageNum(page);
          }}
          label={`Page ${pageNum + 1} of ${totPages}`}
        />
      </View>

      <ScrollView>
        <View style={styles.body}>
          <List.Section>{mappedComponents}</List.Section>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: { margin: 10 },
  h1: { fontSize: 20 },
  center: { alignItems: 'center' },
  small: { fontSize: 10 },
  heading: { margin: 3 },
  body: { color: 'white' }
});
