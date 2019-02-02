import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    StatusBar
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'


class OpenScreen extends Component {
        
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar
            />
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                    <Text style={styles.text}><Icon name="ios-car" size={150} /></Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default OpenScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#843535',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 100,
        color: '#ffffff',
        marginBottom: 200,
    }
});

