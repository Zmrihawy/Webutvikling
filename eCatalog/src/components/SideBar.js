import React from 'react';
import { Text, Modal, View, StyleSheet } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked : {checked1: false, checked2: false, checked3: false, checked4: false},
            active: true,
            query: '',
        }
    }

    render(){
        const { checked, active } = this.state;
        const { filter } = this.props;
        return (
            <Modal visible={filter === active} animationType={'slide'}>
                <View style={{flex: 0.6,  alignItems: 'left', justifyContent: 'center', marginLeft: 40}}>
                    <Text style={{fontSize: 25, marginBottom: 10}}> Filter by ... </Text>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.checkbox} >
                                <Checkbox status={ checked.checked1 ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked: {...checked, checked1: !checked.checked1}}); }}/>
                            </View>
                            <Text style={styles.chectext}>Name</Text>
                        </View>
                
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.checkbox} >
                                <Checkbox status={ checked.checked2 ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked: {...checked, checked2: !checked.checked2}}); }}/>
                            </View>
                            <Text style={styles.chectext}>Price</Text>
                        </View>
                
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.checkbox} >
                                <Checkbox status={ checked.checked3 ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked: {...checked, checked3: !checked.checked3}}); }}/>
                            </View>
                            <Text style={styles.chectext}>Producer</Text>
                        </View>
                
                        <View style={{flexDirection: 'row'}} >
                            <View style={styles.checkbox} >
                                <Checkbox status={ checked.checked4 ? 'checked' : 'unchecked'} onPress={() => { this.setState({ checked: { ...checked, checked4: !checked.checked4}}); }}/>
                            </View>
                            <Text style={styles.chectext}>Asc/Des order </Text>
                        </View>
                
                
                
                
                
                
                        <Text style={{fontSize: 25, marginBottom: 10}}> Sort by ... </Text>
                     
                        <Button mode="contained" style={{ marginTop: 5}} onPress={() => {this.setState({ active: !active }); }}>
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
