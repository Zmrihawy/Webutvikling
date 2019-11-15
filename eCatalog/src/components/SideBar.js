import React from 'react';
import { Text, Modal, View, StyleSheet } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import DropDown  from './Dropdown';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked : {checked1: false, checked2: false, },
            producerFilter : "",
            categoryFilter : "",
            priceSort: "",
            ascSort: false,
            active: true,
            text: '',
            query: '',
        }
    }
    
    
    createQueryFromParams = () => {
        
      let filterField = this.state.categoryFilter ;
      let filterVal = this.state.producerFilter;
      let isAsc = this.state.checked.checked2;
      let sortBy = this.state.checked.checked1;
      let objectsPerPage = '';
      let pageNum = '';
      let nameSearch = '';
        
      this.setState({
             query: (filterVal ? "filterVal=" + filterVal + "&" : "") + (nameSearch ? "nameSearch=" + nameSearch + "&" : "") + (filterField ? "filterField=" + filterField + "&" : "") + (pageNum ? "pageNum=" + pageNum + "&" : "") + (objectsPerPage ? "objectsPerPage=" + objectsPerPage + "&" : "") + (sortBy ? "sortBy=Price&" : "") + (isAsc ? "isAsc=false&" : ""),
             active: !this.state.active,
      });
        
        return console.log('Query :' + this.state.query)
  };


    render(){
        const { checked, active, query, producerFilter, categoryFilter, priceSort, ascSort, text } = this.state;
        const { filter } = this.props;
        return (
            <Modal visible={filter === active} animationType={'slide'}>
                
                <View style={{alignItems: 'center', marginTop: 50}}>
                    <Text style={{fontSize: 28}}>eCatalog</Text>
                    <Text style={{fontSize: 10}}>home for electronics</Text>
                </View>
            
                <View style={{grid: 0.8,  alignItems: 'left', justifyContent: 'center', marginTop: 10, marginLeft: 50, marginRight: 50, padding: 20, borderRadius: 8, backgroundColor: '#D0D3F4',}}>
                    <Text style={{fontSize: 25, marginBottom: 10, marginTop: 2}}> Filter by ... </Text>
            
                    <View>
                        <View>
                            <DropDown name={'category'} data={category} onChangeText={(text) => { this.setState({ categoryFilter: text }); }}/>
                            <DropDown name={'Producer'} data={producer} onChangeText={(text) => { this.setState({ producerFilter: text  }); }}/>
                        </View>
    
                        <Text style={{fontSize: 25, marginBottom: 20, marginTop: 50}}> Sort by ... </Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.checkbox} >
                                <Checkbox color={'blue'} status={ checked.checked1 ? 'checked' : 'unchecked'} onPress={() => {
                                    this.setState({ checked: {...checked, checked1: !checked.checked1 }});
                                }} />
                            </View>
                            <Text style={styles.chectext}>Price</Text>
                        </View>
                
                        <View style={{flexDirection: 'row'}} >
                            <View style={styles.checkbox} >
                                <Checkbox color={'blue'} status={ checked.checked2 ? 'checked' : 'unchecked'} onPress={() => {
                                    this.setState({ checked: { ...checked, checked2: !checked.checked2 }, ascSort: checked.checked2 });
                                }}/>
                            </View>
                            <Text style={styles.chectext}>Descending sort </Text>
                        </View>
                     
                        <Button mode="contained" style={{ marginTop: 25}} onPress={this.createQueryFromParams}>
                            Submit
                        </Button>
                    </View>
                </View>
            </Modal>
        );
    }
};

const styles = StyleSheet.create({
       checkbox: {height: 40, width: 40, borderWidth: 1.5, borderColor: 'grey', borderRadius: 3 , marginBottom: 12 },
       chectext: {margin: 8, fontSize: 18 }
});

const producer = [{
       value: 'Apple',
       }, {
       value: 'Microsoft',
       }, {
       value: 'Samsung',
       }, {
       value: 'LG',
       }, {
       value: 'Philips',
       }, {
       value: 'Lenovo',
       }, {
       value: 'Logitech',
       }, {
       value: 'Nokia',
       }, {
       value: 'Amazon',
       }, {
       value: 'Bosch',
       }, {
       value: 'Bose',
       }, {
      value: 'AMD',
      }, {
      value: 'Intel',
   }];


const category = [{
    value: 'Laptop',
    }, {
    value: 'Smartphone',
    }, {
    value: 'TV',
    }, {
    value: 'Game Console',
    }, {
    value: 'Tablet',
    }, {
    value: 'Headphones',
    }, {
    value: 'Smart Watch',
    }, {
    value: 'Camera',
    }, {
    value: 'Home and Leisure',
    }, {
    value: 'Processor',
}];

