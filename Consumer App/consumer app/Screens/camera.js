'use strict';
import React, { Component } from 'react';
import config from './config.json'
  import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, TouchableHighlightBase } from 'react-native';
  import {RNCamera, RNTextDetector } from 'react-native-camera';
  import CameraRoll from "@react-native-community/cameraroll";
export default class image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result:null,
            response:[]
           
        }
     
    }

componentDidMount(){
    console.log(this.props)
}
  

    render() {
    
        return (
            <View style={styles.container}>
            <RNCamera
              ref={(ref) => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.off}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
            //   onGoogleVisionBarcodesDetected={({ barcodes }) => {
            //     console.log(barcodes);
            //   }}
            //   onTextRecognized={({ text }) => {
            //     console.log("texg"+text);
            //   }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
            </View>
          </View>

        );

    }
    takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
        //   CameraRoll.saveToCameraRoll(data.uri);
          const visionResp = await RNTextDetector;
        //   console.log(visionResp);
          console.log(data.uri);
          this.setState({
            result: data.base64
          },
          () =>
                    this.callGoogleVIsionApi(this.state.result)
          )

        }
      }
      callGoogleVIsionApi = async (base64) => {
        let googleVisionRes = await fetch(config.googleCloud.api + config.googleCloud.apiKey, {
            method: 'POST',
            body: JSON.stringify({
                "requests": [
                    {
                        "image": {
                            "content": base64
                        },
                        features: [
                            { type: "LABEL_DETECTION", maxResults: 5 },
                            
                            { type: "TEXT_DETECTION", maxResults: 5 },
                            
                        ],
                    }
                ]
            })
        });

        await googleVisionRes.json()
            .then(googleVisionRes => {
                console.log(googleVisionRes)
                if (googleVisionRes) {
                    this.setState(
                        {
                            
                            response: googleVisionRes.responses[0]
                        }
                    )
                    console.log(this.state.response.labelAnnotations[0])
                    for(let i=0; i<5; i++){
                      
                      if(this.state.response.labelAnnotations[i].description=='Snack'){
                        console.log("SnAckuy"+this.state.response.labelAnnotations[i].description)
                        this.props.action(this.state.response.labelAnnotations[i].description+'s')
                        this.props.navigation.navigate('Home')
                        
                      }
                    }
                    
                    // console.log('this.is response', this.state.response);
                    // this.props.action('Lays')
                    // this.props.navigation.navigate('Home')
                }
            }).catch((error) => { console.log(error) })
    }




    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
    });