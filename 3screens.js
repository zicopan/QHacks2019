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

export default class LotsOfStyles extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        spinAnimation: new Animated.Value(0),
        pagenum: 1,
      };
      this.spin = this.state.spinAnimation.interpolate({inputRange: [0, 1],
       outputRange: ['0deg', '360deg']})
    }

    componentDidMount() {
      Animated.loop(Animated.timing(this.state.spinAnimation,{toValue: 1,
       duration: 8000, easing: Easing.linear},)).start();
      this.toMainScreen()
    }
    
    //function to prepare to render Main screen with camera
    toMainScreen(){
      this.setState({pagenum: 2});
    }

    //function to prepare to render the wait Screen
    waitScreen(){
      this.setState({pagenum: 2});
    }

    //function to prepare to render the advertisment screen
    adScreen(){
      this.setState({pagenum: 3});
    }

    render() {
      if (this.state.pagenum==1) {
          /*Space for the first page */
          return (
            <View style={{flex: 1}}/>
          );
          
      }
      else if (this.state.pagenum==2){
      /*The waiting for the API page*/
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
    /*The advertisment page*/
    else if (this.state.pagenum == 3){
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
}

const styles = StyleSheet.create({
    fonttest: {
      color: 'Black',
      fontWeight: '400',
      fontFamily: 'tahoma',
      fontSize: 20,
    },
    PicAtTop: {
      marginTop: 20,
      backgroundColor: 'lightgrey',
      flex: 3,
      alignItems: 'center',
    },
    BotSection: {
      backgroundColor: 'orange',
      flex: 4,
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