import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';

// MAPS CONSTANTS
const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyB_UY8Mg65jm8F_BHOarN0wQAf1pFlqqtM';
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 1.922;
const LONGITUDE_DELTA = 1.9;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: width,
  },
  mapDrawerOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get('window').height,
    width: 30,
  },
});

const silverMapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

export default class MapComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pad: 20,
      coordinates: [],
      currentLocation: {
        latitude: 0,
        longitude: 0
      },
      routes: [],


    };
    this.mapView = null;
  }

  componentDidMount() {
    setTimeout(() => {
      Geolocation.getCurrentPosition((pos) => {

        this.setState({ currentLocation: pos.coords })
        this.mapView.animateToRegion({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          longitudeDelta: LONGITUDE_DELTA,
          latitudeDelta: LATITUDE_DELTA,
        }, 1000)

        let tempArr = [
          {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
          {
            latitude: 31.5204,
            longitude: 74.3587,
          },
          {
            latitude: 33.9070,
            longitude: 73.3943,
          }
        ]

        this.setState({ routes: tempArr })

      })

    }, 1000);



    




  }






  render() {


    const Markers = () => this.state.routes.map((coordinate, index) => {
      console.log(index)
      if (index != 0) {
        return (
          <MapView.Marker
            key={`coordinate_${index}`}
            coordinate={coordinate}
            title="Store Name"
            pinColor="#69718F"
          />)
      }
    }
    )

    const Routes = () => (this.state.routes.length >= 2) && (
      <MapViewDirections
        origin={this.state.routes[0]}

        waypoints={(this.state.routes.length > 2) ? this.state.routes.slice(1, -1) : null}

        destination={this.state.routes[this.state.routes.length - 1]}

        mode="WALKING"
        precision="high"
        strokeWidth={3}
        strokeColor="#343847"

        onReady={() => {
          console.log("Direction is ready")
        }}

        apikey={GOOGLE_MAPS_APIKEY}

      />

    )


    return (
      <View style={{ flex: 1, padding: this.state.pad }}>
        <MapView
          initialRegion={{
            latitude: this.state.currentLocation.latitude,
            longitude: this.state.currentLocation.longitude,
            longitudeDelta: LONGITUDE_DELTA,
            latitudeDelta: LATITUDE_DELTA,
          }}
          style={{ width: "100%", flex: 1 }}
          ref={c => (this.mapView = c)}
          onPress={this.onMapPress}
          showsUserLocation={true}
          showsMyLocationButton={true}
          customMapStyle={silverMapStyles}
          userLocationPriority='high'
          userLocationUpdateInterval={2000}
          followsUserLocation={true}

          onMapReady={() => {
            setTimeout(() => this.setState({ pad: 0 }), 100);
          }}
        >

          {this.props.showDirection &&
            <Markers />
            
          }

          {this.props.showDirection &&
            <Routes />
            
          }




        </MapView>
      </View>
    );
  }
}
