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
    constructor(props) {
        state = {
            temp: ""
        }
        super(props);
    }

    render() {

        // sourc{require ()} does not actually take a dynamic variable as an argument
        // needed to hard code every conditional due to limited time available to figure it out

        // get param from navigation
        const fileloc = this.props.navigation.getParam('path', '../ads/Eyeglasses1.jpg');
        //const fileloc = this.props.navigation.state.param.path
        if (fileloc == "'../ads/Eyeglasses1.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Text>
                            {fileloc}
                        </Text>

                        <Image style={styles.Image}
                            source={require('../ads/Eyeglasses1.jpg')}
                        />

                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );


        } else if (fileloc == "'../ads/Eyeglasses2.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/Eyeglasses2.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );
        }
        else if (fileloc == "'../ads/Eyeglasses3.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/Eyeglasses3.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );
        } else if (fileloc == "'../ads/No_Beard1.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/No_Beard1.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );

        } else if (fileloc == "'../ads/No_Beard2.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/No_Beard2.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );
        } else if (fileloc == "'../ads/No_Beard3.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/No_Beard3.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );

        } else if (fileloc == "'../ads/Wearing_Hat1.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/Wearing_Hat1.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );


        } else if (fileloc == "'../ads/Wearing_Hat2.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/Wearing_Hat2.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );



        } else if (fileloc == "'../ads/Wearing_Hat3.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/Wearing_Hat3.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );



        } else if (fileloc == "'../ads/Wearing_Lipstick1.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/Wearing_Lipstick1.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );
        } else if (fileloc == "'../ads/Wearing_Lipstick2.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/Wearing_Lipstick2.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );

        } else if (fileloc == "'../ads/Wearing_Lipstick3.jpg'") {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/Wearing_Lipstick3.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );

        } else {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, backgroundColor: 'lightgrey' }} />
                    <View style={{
                        flex: 47, alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                    >
                        <Image style={styles.Image}
                            source={require('../ads/Eyeglasses1.jpg')}
                        />
                    </View>
                    <View style={{ flex: 14 }} />
                </View>
            );
        }


        //const picPath = this.props.navigation.getParam('ppath', '');
        //const temp = toString(this.props.navigation.params.path)
        // console.log(temp)

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


// potentially use these
// const images = {
//     image1: require('../ads/Eyeglasses1.jpg'),
//     image2: require('../ads/Eyeglasses2.jpg'),
//     image3: require('../ads/Eyeglasses3.jpg'),
//     image4: require('../ads/No_Beard1.jpg'),
//     image5: require('../ads/No_Beard2.jpg'),
//     image6: require('../ads/No_Beard3.jpg'),
//     image7: require('../ads/Wearing_Hat1.jpg'),
//     image8: require('../ads/Eyeglasses1.jpg'),
//     image9: require('../ads/Eyeglasses1.jpg'),
// }