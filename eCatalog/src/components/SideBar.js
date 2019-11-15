import React from 'react';
import { Text, Modal, View, StyleSheet } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import DropDown  from './Dropdown';

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


export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked : {checked1: false, checked2: false, },
            active: true,
            text: '',
            query: '',
        }
    }
    

    render(){
        const { checked, active, query } = this.state;
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
                            <DropDown name={'category'} data={category} onChange={() => { this.setState({ query: query + selectedItem });  }}/>
                            <DropDown name={'Producer'} data={producer} onChange={() => { this.setState({ query: query + selectedItem });  }}/>
                        </View>
    
                        <Text style={{fontSize: 25, marginBottom: 20, marginTop: 50}}> Sort by ... </Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.checkbox} >
                                <Checkbox color={'blue'} status={ checked.checked1 ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked: {...checked, checked1: !checked.checked1 }}); }}/>
                            </View>
                            <Text style={styles.chectext}>Price</Text>
                        </View>
                
                        <View style={{flexDirection: 'row'}} >
                            <View style={styles.checkbox} >
                                <Checkbox color={'blue'} status={ checked.checked2 ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked: { ...checked, checked2: !checked.checked2 }}); }}/>
                            </View>
                            <Text style={styles.chectext}>Asc order </Text>
                        </View>
                     
                        <Button mode="contained" style={{ marginTop: 25}} onPress={() => {this.setState({ active: !active }); }}>
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
