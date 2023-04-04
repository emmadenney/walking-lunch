import React from "react";
import { FlatList, View } from "react-native";
import { Chip } from "react-native-paper";
import { addWaypoints } from "../utils/functions/add-waypoints";
import { focusOnMarker } from "../utils/functions/map-focus";

export const ListAllRestaurants = ({
  foodPlaces,
  setWaypointA,
  setWaypointB,
  setShowPlaces,
  showPlaces,
  setNewRegion,
  newRegion
}) => {
  const renderItem = ({ item }) => (
    <Chip
      key={item.name}
      style={{
        width: "auto",
        // flexWrap: "wrap",
        // flexDirection: "row",
        margin: 5,
        backgroundColor: "#d5e3d7",
        // justifyContent: "space-between",
      }}
      onLongPress={()=>{focusOnMarker(
        {
          latitude: item.geometry.location.lat,
          longitude: item.geometry.location.lng,
        },
        setNewRegion
      );}}
      onPress={() => {
        addWaypoints(
          setWaypointA,
          setWaypointB,
          {
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
          },
          item.name,
          setShowPlaces,
          showPlaces
        );
      }}
    >
      🍽️ {item.name}
    </Chip>
  );

  return (
    <View
      style={{
        flexDirection: "column",
        maxWidth: 400,
        height: 190,
        alignItems: "center",
        flexWrap: "wrap",
        margin: 5,
      }}
    >
      <FlatList
        data={foodPlaces}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
