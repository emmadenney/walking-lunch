import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import StartTimer from "./StartTimer"
import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import MapJson from "./MapJson";
import PlotRoute from "./PlotRoute";
import MapViewDirections from "react-native-maps-directions";


export default function StartWalk({kmh, setKmh, totalDuration, setTotalDuration, location }){
const [secondsLeft, setSecondsLeft] = useState(0);


  console.log("location>>>", location)

    return (
      <View style={styles.container}>
        <StartTimer
          setSecondsLeft={setSecondsLeft}
          totalDuration={totalDuration}
          secondsLeft={secondsLeft}
        />
        <StatusBar style="auto" />
        <>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={location}
            showsUserLocation={true}
            customMapStyle={MapJson}
          >
            <MapViewDirections
              origin="Manchester Technology Centre"
              destination="Royal Exchange Theatre"
              mode="WALKING"
              strokeWidth={5}
              strokeColor="hotpink"
              apikey="AIzaSyDIt7GvEhgmT3io-pKMPqTKIif4jkx9-2U"
              // onReady={(result) => {
              //   setDistanceA(result.distance);
              // }}
            />
            <MapViewDirections
              origin="Royal Exchange Theatre"
              destination="Manchester Art Gallery"
              mode="WALKING"
              strokeWidth={5}
              strokeColor="blue"
              apikey="AIzaSyDIt7GvEhgmT3io-pKMPqTKIif4jkx9-2U"
              // onReady={(result) => {
              //   setDistanceB(result.distance);
              // }}
            />
            <MapViewDirections
              origin="Manchester Art Gallery"
              destination="Manchester Technology Centre"
              mode="WALKING"
              strokeWidth={5}
              strokeColor="orange"
              apikey="AIzaSyDIt7GvEhgmT3io-pKMPqTKIif4jkx9-2U"
              // onReady={(result) => {
              //   setDistanceC(result.distance);
              // }}
            />
          </MapView>
        </>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    map: {
      width: "90%",
      height: "40%",
    },
  });

