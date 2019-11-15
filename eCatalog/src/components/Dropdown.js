import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
 
export default class DropDown extends Component {
    render() {
    const { name, data, onChangeText } = this.props;
 
    return (
      <Dropdown
        label={name}
        baseColor='black'
        containerStyle={{width: 200}}
        textColor='blue'
        data={ data }
        onChangeText={(text) => {console.log("in npm component " + text); onChangeText(text)}}
      />
    );
  }
}
