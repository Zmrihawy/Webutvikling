import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
 
export default class DropDown extends Component {
    render() {
        let data = [{
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
        }];
 
    return (
      <Dropdown
        label='Producer'
        baseColor='black'
        containerStyle={{width: 200}}
        textColor='blue'
        data={data}
      />
    );
  }
}
