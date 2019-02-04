import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Switch,
    TouchableOpacity,
    Image, Alert, ScrollView
} from "react-native";
import { Camera, Permissions } from "expo";


// if just using cloud vision, use the below module to make api requests
// import vision from "react-cloud-vision-api";

// import { Icon, Button } from "native-base";
// import { stringify } from "qs";

'use strict'

// put VISION API key here (not for AutoML)
//vision.init({ auth: 'AIzaSyDvZlteL62QW6wmc2OWbMqv4LSg-0nH-GM' })

class HomeScreen extends React.Component {

    state = {
        switchValue: false,
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        imageuri: "",
        photoHolder: "",
        url: "",
        text: "Testing ideaTesting ideaTesting ideaTesting ideaTesting ideaTesting",
        jsonText: "",
        picPath: ""
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === "granted" });
    }


    cameraChange = () => {
        this.setState({
            imageuri: "",
            photoHolder: "",
            url: "",
            type:
                this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
        });
    };

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync({ base64: true });
            //req.image.img = photo;
            // this saves an object in the app which has a uri key
            // can get our image url from this result
            /*
            looks something like this:
              Object{
                "height": 34,
                "uri": "file://data.jpg"
                .
              }
            */
            //console.log(photo);
            if (photo) {
                // this sets the imageuri to the photo url was captured
                this.setState({ imageuri: photo.base64 });
                // this.setState({ imageuri: photo });
                this.setState({ photoHolder: photo.uri });
            }
        }
    };

    buttonStuff() {
        this.setState({ imageuri: "" })
        this.setState({ jsonText: "" })
    }


    onTrigger() {
        this.setState({ jsonText: res["1"]["Descriptiion"] })
    }
    // hopefully using this in the demo so we can utilize predictioSns directly from
    // the web rather than just labels
    takeAndUploadPhotoAsync = async () => {
        // Display the camera to the user and wait for them to take a photo or to cancel
        // the action
        console.log("Pinged");
        // ngrok exposes api to the internet
        var filepath = this.state.photoHolder;
        var data = new FormData();
        data.append('upimg', {
            uri: filepath, // your file path string
            name: 'image.jpg',
            type: 'image/jpg'
        })

        // this port is open till ~2pm (nov 11)
        await fetch("http://92b72879.ngrok.io/upload/", {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            method: 'POST',
            body: data
        });
        console.log("Pinged333");

        const url = "http://92b72879.ngrok.io/get_val/"

        // fetchdata = async () => {
        //     const response = await fetch("http://92b72879.ngrok.io/get_val/");
        //     const json = await response.json();
        //     this.setState({jsonText: json.results});
        // }

        setTimeout(fetch(url), 10000);

        fetch(url)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
        //{this.setState({jsonText: res["1"]["Description"] + "\n"})}) //+ res["2"]["Description"]})})

        //{console.log(res)})//{this.setState({jsonText: res["1"]["Description"] + "\n" + res["2"]["Description"]})})
        //{this.setState({jsonText: res["1"]["Description"] + "\n" + res["2"]["Description"]})}

        //console.log(res)

        //this.setState({ jsonText: res.toString() }))




        // await fetch("http://92b72879.ngrok.io/get_val/", {
        //     headers: {
        //         'Content-Type': 'multipart/'
        //     }
        // })

    }



    showAdvertisement() {
        <Image styles={styles.Image}
            source={require('../ads/Eyeglasses1.jpg')}
        />
    }

    // request from AutoML Vision database
    uploadToCloud = async () => {
        if (this.state.imageuri == "") {
            Alert.alert("You have nothing to upload")
        }
        else {
            // gcloud auth print-access-token --> get new tokens
            // these tokens expire after one hour
            const gcpToken = "ya29.c.El-lBn4vTF5ecmC_njg9Cm9a1Ob_Fl5yi8dqIrJ08TWwc3iZ2_c_7msibJRWbMNIgJKnNONJqZN4vjlJ8Jn1siOdEovI3R4akeXa45-hgqCcxQgE_LxMzfseEipzPmfE5w";


            const data = {
                payload: {
                    image: {
                        imageBytes: this.state.imageuri
                    }
                },
                params: {
                    score_threshold: '0.0'
                }
            }

            // console.log(JSON.stringify(this.state.imageuri));
            // make a post request --> post something to api and await its result
            fetch('https://automl.googleapis.com/v1beta1/projects/qhacks-230509/locations/us-central1/models/ICN1146187338761166163:predict',
                {
                    method: 'POST',
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${gcpToken}`
                    },
                    body: JSON.stringify(data)
                })
                

                // parse the JSON file to get desired results
                .then((response) => {
                    // console.log(this.state.imageuri)
                    console.log("------------------");

                    //let temp = response['P'];

                    //console.log(response)
                    console.log("\n")

                    // love love love
                    let t = JSON.parse(response["_bodyInit"]);
                    //console.log(t)
                    // console.log(t["payload"][0]["displayName"] + " with confidence: " + t["payload"][1]["classification"]["score"])
                    console.log(t)
                    console.log("\n")
                    //var arr = t['payload'][0]['displayName'];
                    var arr = [];
                    for (var i = 0; i < 4; i++) {

                        // edge case for no beard (want to maintain the threshold for other things)
                        // print out the output
                        // do something with picPath text here,
                        if (t["payload"][i]["displayName"] == 'No_Beard' && t["payload"][i]["classification"]["score"] > 0.6) {
                            arr.push(t["payload"][i]["displayName"]);
                        }
                        // store the correct and finalized random path in a global variable 
                        // use that to determine which image to print
                        if (t["payload"][i]["displayName"] == 'Wearing_Hat'  && t["payload"][i]["classification"]["score"] > 0.6) {
                            arr.push(t["payload"][i]["displayName"]);
                        }
                        if (t["payload"][i]["displayName"] == 'Wearing_Lipstick' && t["payload"][i]["classification"]["score"] > 0.6) {
                            arr.push(t["payload"][i]["displayName"]);
                        }
                        if (t["payload"][i]["displayName"] == 'Eyeglasses' && t["payload"][i]["classification"]["score"] > 0.60) {
                            arr.push(t["payload"][i]["displayName"]);
                        }
                    }

                    // print output
                    for (var j = 0; j < arr.length; j++) {
                        console.log(arr[j])
                    }
                    // now pick a number between 1 and 3 for ad
                    var r1 = Math.floor(Math.random() * 3) + 1;        

                    // construct picture string
                    let path = ""

                    if(arr.length == 1){
                        path = "'../ads/" + arr[0] + r1 + ".jpg'";
                    } else if (arr.length == 0) {
                        console.log("NONNNNEEE")
                    } else {
                        var r = Math.floor(Math.random() * arr.length - 1);
                        path = "'../ads/" + arr[r] + r1 + ".jpg'";
                    }
                    // to get random ad, we need to pick a random category
                    // (pick a number between 0 and size of arr-1)

                    
                    // if (arr[r] == undefined) {
                    //     path = "'../ads/Eyeglasses" + r1 + ".jpg'";
                                         
                    console.log(path);

                    //this.setState({ picPath: path });

                    //path = "../ads/Eyeglasses1.jpg";

                    console.log("\n")
                    this.props.navigation.navigate('Ad', {path})

                    // now we have an arr array, full of the necessary categories. 
                    // we can pass this to a function that picks a random value to advertise for


                })
                .catch((error) => {
                    console.log(error);
                })

            //console.log(data)
            // this.setState({jsonText: "Getting results..."})
            // // construct parameters
            // const request = new vision.Request({
            //     image: new vision.Image({
            //         // need to convert it to a string from a base64
            //         base64: this.state.imageuri
            //     }),
            //     features: [
            //         //new vision.Feature('LABEL_DETECTION', 100),
            //         new vision.Feature('WEB_DETECTION', 500),
            //         //can add additional features like logo_detection
            //         //new vision.Feature('LOGO_DETECTION', 10),
            //     ]
            // })

            // // this changes the state of the json text to be the image url
            // // this.setState({ jsonText: this.state.imageuri })
            // // send single request
            // console.log("here are your results\n");
            // vision.annotate(request).then((result) => {

            //     // console logs the entire json result
            //     //console.log(result)


            //     let bestGuess = result["responses"][0]["webDetection"]["bestGuessLabels"][0]["label"]
            //     let one = result["responses"][0]["webDetection"]["webEntities"][0]["description"]
            //     let two = result["responses"][0]["webDetection"]["webEntities"][1]["description"]
            //     let three = result["responses"][0]["webDetection"]["webEntities"][2]["description"]

            //     console.log("best guess: " + bestGuess + "\n\n")
            //     console.log("other results: ")
            //     console.log(one + "\n" + two + "\n")

            //     this.setState({
            //         jsonText:
            //             "best guess: " + bestGuess + "\n\n" +
            //             "other results: " + "\n" +
            //             one + "\n" + two + "\n" + three
            //     })

            //     /*
            //      // this is for logging the label_detection results (not used anymore as web_detection is more specific) //
            //     console.log(result["responses"][0]["labelAnnotations"][0]["description"]);
            //     console.log(result["responses"][0]["labelAnnotations"][1]["description"]);
            //     console.log(result["responses"][0]["labelAnnotations"][2]["description"]);
            //     console.log(result["responses"][0]["labelAnnotations"][3]["description"]);
            //     */

            //     // this is for outputting the labe_detection part (not being used anymore)
            //     //this.setState({ jsonText: result["responses"][0]["labelAnnotations"][0]["description"] + "\n" + result["responses"][0]["labelAnnotations"][1]["description"] + "\n" + result["responses"][0]["labelAnnotations"][2]["description"] + "\n" }) //result["responses"][0]["labelAnnotations"][3]["description"]})
            // }, (e) => {
            //     console.log('Error: ', e)
            // })
        }
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return (
                <View>
                    <Text>No access to camera</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>

                    {/* switch to show the camera */}
                    <View style={styles.switchview}>
                        <Text style={{ color: "white", fontSize: 16, paddingBottom: 4, paddingTop: 5 }}>Show camera</Text>
                        <Switch
                            onValueChange={value => {
                                this.setState({ switchValue: value });
                            }}
                            value={this.state.switchValue}
                            style={styles.switch}
                        />
                    </View>
                    {/* end show camera */}

                    {/* if statement depicting what is shown on the screen...
          whether it be the camera preview or not
          */}
                    {this.state.switchValue ? (
                        <View style={styles.cameraview}>
                            {this.state.photoHolder != "" ? (
                                <Image
                                    source={{
                                        //uri: this.state.imageuri
                                        uri: this.state.photoHolder

                                    }}
                                    style={styles.uploadedImage}
                                    resizeMode="contain"
                                />
                            ) : (
                                    <Camera
                                        style={styles.camera}
                                        type={this.state.type}
                                        ref={ref => {
                                            this.camera = ref;
                                        }}
                                    >
                                        <View style={styles.camerabuttonview}>
                                            <TouchableOpacity
                                                style={styles.cameraButtons}
                                                onPress={this.cameraChange}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 18,
                                                        marginBottom: 10,
                                                        color: "white"
                                                    }}
                                                >
                                                    Flip
                      </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Camera>
                                )}
                        </View>
                    ) : (
                            <View style={styles.cameraview}>
                                {this.state.url != "" ? (
                                    <Text>Uploaded url : {this.state.url}</Text>
                                ) : null}
                                <Text>Camera off</Text>
                            </View>
                        )}
                    {this.state.switchValue ? (
                        <View style={styles.buttonsView}>
                            {this.state.imageuri == "" ? (
                                <View style={styles.captureButtonView}>
                                    <TouchableOpacity
                                        style={styles.cameraButtons}
                                        onPress={this.snap}
                                    >
                                        <Text
                                            style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                                        >
                                            Capture
                    </Text>
                                    </TouchableOpacity>
                                </View>
                            ) : null}

                            {/* upload button for the camera image
              - this calls the upload function --> need to change it so that we get the 
                API call function and put it through to Vision cloud
              */}

                            {/* reset button for the camera photoholder and imageuri
              allows the process to continue even after an intial
              photo is taken */}
                            <View style={styles.captureButtonView}>
                                <TouchableOpacity
                                    style={styles.cameraButtons}
                                    onPress={() => {
                                        this.setState({ photoHolder: "" });
                                        this.buttonStuff();
                                    }}>
                                    <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                                        Reset
                </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.captureButtonView}>
                                <TouchableOpacity
                                    style={styles.cameraButtons}
                                    //onPress={() => { this.takeAndUploadPhotoAsync() }} //--> uploads data to back-end api
                                    onPress={() => { this.uploadToCloud() }}           //  --> uploads data to vision cloud

                                >
                                    <Text
                                        style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                                    >
                                        Continue
                  </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.captureButtonView}>
                                <TouchableOpacity
                                    style={styles.cameraButtons}
                                    onPress={() => { this.showAdvertisement }}
                                >
                                    <Text
                                        style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                                    >
                                        Show ad
                  </Text>
                                </TouchableOpacity>


                            </View>

                        </View>
                    ) : null}
                    <ScrollView>
                        <View style={styles.textView}>
                            <Text style={{

                                color: "white",
                                fontSize: 20,
                                fontStyle: "italic"
                            }}>
                                Tap continue to view targetted advertisement.
                        </Text>
                            <Text style={{ color: "#ffffff", fontSize: 18 }}>

                                {/* output text of API goes here */}
                                {this.state.jsonText}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            );

        }
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#843535",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    switchview: {
        marginTop: 20,
        backgroundColor: "#843535",
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 5
    },
    switch: {
        padding: 5
    },
    cameraview: {
        height: 400,
        width: "90%",
        backgroundColor: "black",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "white"
    },
    camera: {
        height: "95%",
        width: "95%",
        backgroundColor: "white",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    camerabuttonview: {
        height: "100%",
        backgroundColor: "transparent"
    },
    cameraButtons: {
        borderColor: "#fff",
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        margin: 5
    },
    captureButtonView: {
        height: 75
    },
    buttonsView: {
        height: 75,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    uploadedImage: {
        height: "90%",
        width: "90%",
        padding: 10
    },
    textView: {
        padding: 0
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
});