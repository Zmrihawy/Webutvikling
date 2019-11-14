import React from 'react';
import { Text, Modal, View, StyleSheet } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';

export default class SideBar extends React.Component {
  
    state={
        checked : false,
        active: true
    }

    render(){
        const { checked, active } = this.state;
        return (
            <Modal visible={active}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 25, margin: 5}}> Filter by ... </Text>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.checkbox} >
                                <Checkbox status={ checked ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked : !checked }); }}/>
                            </View>
                            <Text style={styles.chectext}>Name</Text>
                        </View>
                
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.checkbox} >
                                <Checkbox status={ checked ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked : !checked }); }}/>
                            </View>
                            <Text style={styles.chectext}>Price</Text>
                        </View>
                
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.checkbox} >
                                <Checkbox status={ checked ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked : !checked }); }}/>
                            </View>
                            <Text style={styles.chectext}>Producer</Text>
                        </View>
                
                        <View style={{flexDirection: 'row'}} >
                            <View style={styles.checkbox} >
                                <Checkbox status={ checked ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked : !checked }); }}/>
                            </View>
                            <Text style={styles.chectext}>Asc/Des order </Text>
                        </View>
                     
                        <Button mode="contained" style={{ margin: 8}} onPress={() => {this.setState({ active: !active }); }}>
                            Submit
                        </Button>
                    </View>
                </View>
            </Modal>
        );
    }
};

const styles = StyleSheet.create({
       checkbox: {height: 40, width: 40, borderWidth: 1.5, borderColor: 'grey', borderRadius: 3 , marginBottom: 6 },
       chectext: {margin: 8, fontSize: 18 }
});
