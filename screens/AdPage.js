import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Easing,
    TouchableOpacity,
} from "react-native";

export default class AdPage extends React.Component {
    constructor (props) {
      super(props);
    }
    render() {
      return (
          <View style={{flex: 1}}>
            <View style={{flex: 2, backgroundColor: 'lightgrey'}} />
            <View style={{flex: 47, alignItems: 'center', 
              backgroundColor: 'blue'}}
            >
              <Image style={styles.Image} 
                source={require('./assets/snack-icon.png')}
              />
              <Image style={styles.Image2} 
                source={require('./assets/snack-icon.png')}
              />
              <TouchableOpacity 
                style={styles.ExitButton}
                onPress={() => {this.toMainscreen()}}
              />

                
            </View>
            <View style={{flex:14}} />
          </View>
      );
    }
}

const styles = StyleSheet.create({
    Image: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain',
        alignItems: 'lower',
        justifyContent: 'center'
    },
    Image2: {
        position: 'absolute',
        alignItems: 'right',
        width: 60,
        height: 60,
        top: 15,
        right: 15,
    },
    ExitButton: {
        position: 'absolute',
        alignItems: 'right',
        width: 60,
        height: 60,
        top: 15,
        right: 15,
    }
});
