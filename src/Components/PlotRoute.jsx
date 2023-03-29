import MapViewDirections from "react-native-maps-directions";
import { useState, useEffect } from "react";

export default function PlotRoute({
  GOOGLE_MAPS_APIKEY,
  markerLocations,
  setDistances,
  testLocations,
  showRoute,
}) {
  const [distanceA, setDistanceA] = useState(0);
  const [distanceB, setDistanceB] = useState(0);
  const [distanceC, setDistanceC] = useState(0);

  useEffect(() => {
    setDistances([distanceA, distanceB, distanceC]);
  }, [distanceA, distanceB, distanceC]);

  // console.log("array---------->", markerLocations);
  // THIS COMPONENT WON'T WORK CURRENTLY BECAUSE MARKERLOCATIONS ARRAY IS EMPTY/UNDEFINED BASED ON HOW PLOTMARKERS IS CURRENTLY SET UP TO ONLY PLOT LOCATIONS FOR A SEARCHED DESTINATION

  return (
    <>
      {showRoute ? (
        <>
          <MapViewDirections
            origin={testLocations[0]}
            destination={testLocations[1]}
            mode="WALKING"
            strokeWidth={5}
            strokeColor="hotpink"
            // waypoints={markerWayPoints}
            apikey={GOOGLE_MAPS_APIKEY}
            onReady={(result) => {
              setDistanceA(result.distance);
            }}
          />
          <MapViewDirections
            origin={testLocations[1]}
            destination={testLocations[2]}
            mode="WALKING"
            strokeWidth={5}
            strokeColor="blue"
            // waypoints={markerWayPoints}
            apikey={GOOGLE_MAPS_APIKEY}
            onReady={(result) => {
              setDistanceB(result.distance);
            }}
          />
          <MapViewDirections
            origin={testLocations[2]}
            destination={testLocations[3]}
            mode="WALKING"
            strokeWidth={5}
            strokeColor="orange"
            // waypoints={markerWayPoints}
            apikey={GOOGLE_MAPS_APIKEY}
            onReady={(result) => {
              setDistanceC(result.distance);
            }}
          />
        </>
      ) : null}
      <>
        <MapViewDirections
          origin={testLocations[0]}
          destination={testLocations[1]}
          mode="WALKING"
          strokeWidth={5}
          strokeColor="hotpink"
          // waypoints={markerWayPoints}
          apikey={GOOGLE_MAPS_APIKEY}
          onReady={(result) => {
            setDistanceA(result.distance);
          }}
        />
        <MapViewDirections
          origin={testLocations[1]}
          destination={testLocations[2]}
          mode="WALKING"
          strokeWidth={5}
          strokeColor="blue"
          // waypoints={markerWayPoints}
          apikey={GOOGLE_MAPS_APIKEY}
          onReady={(result) => {
            setDistanceB(result.distance);
          }}
        />
        <MapViewDirections
          origin={testLocations[2]}
          destination={testLocations[3]}
          mode="WALKING"
          strokeWidth={5}
          strokeColor="orange"
          // waypoints={markerWayPoints}
          apikey={GOOGLE_MAPS_APIKEY}
          onReady={(result) => {
            setDistanceC(result.distance);
          }}
        />
      </>
    </>
  );
}
