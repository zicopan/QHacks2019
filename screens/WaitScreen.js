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

export default class WaitingPage extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        spinAnimation: new Animated.Value(0),
      };
      this.spin = this.state.spinAnimation.interpolate({inputRange: [0, 1],
       outputRange: ['0deg', '360deg']})
    }

    componentDidMount() {
      Animated.loop(Animated.timing(this.state.spinAnimation,{toValue: 1,
       duration: 8000, easing: Easing.linear},)).start();
    }

    render() {
      return (
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'lightgrey'}} />
          <View style={styles.WaitingL1}>
            <View style={styles.WaitingL2A} />
            <View style={styles.WaitingL2B}>
              <View style={styles.WaitingL3}/>
              <View style={styles.WaitingL3}>
                <Animated.Image style={{aspectRatio: 0.5, resizeMode: 'contain',
                   transform: [{rotate: this.spin}] }} 
                   source={require('./assets/snack-icon.png')} 
                />
              </View>
              <View style={styles.WaitingL3}/>
            </View>
            <View style={styles.WaitingL2C}>
              <Text style={styles.fonttest}>
                Determining relevant advertisement
              </Text>
            </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    fonttest: {
      color: 'Black',
      fontWeight: '400',
      fontFamily: 'tahoma',
      fontSize: 20,
    },
    WaitingL1: {
      flex: 32,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    WaitingL2A: {
        flex: 3,
        backgroundColor: 'white',
    },
    WaitingL2B: {
        flex: 4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    WaitingL2C: {
        flex: 4,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    WaitingL3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});