import { FlatList, Pressable, Text } from "react-native";

import { addWaypoints } from "../utils/functions/add-waypoints";

export const ListAllRestaurants = ({
  foodPlaces,
  setWaypointA,
  setWaypointB,
  setWhichList,
}) => {
  return (
    <FlatList
      data={foodPlaces}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            addWaypoints(
              setWaypointA,
              setWaypointB,
              {
                latitude: item.geometry.location.lat,
                longitude: item.geometry.location.lng,
              },
              item.name
            );
            setWhichList("POI");
          }}
        >
          <Text>{item.name}</Text>
        </Pressable>
      )}
    />
  );
};
