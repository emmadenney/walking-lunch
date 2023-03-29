import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Button } from "react-native";

export default function DestinationSearch({
  setSearchedDestination,
  location,
  setWaypointA,
}) {
  const GOOGLE_MAPS_APIKEY = "AIzaSyDIt7GvEhgmT3io-pKMPqTKIif4jkx9-2U";

  const confirmChoice = () => {
    // logic to decide which waypoint to populate
  };

  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{ rankby: "distance" }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setSearchedDestination({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          });
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
          types: "establishment",
          radius: 1000,
          location: `${location.latitude},${location.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            width: "100%",
            zIndex: 1,
            listView: { backgroundColor: "white" },
          },
        }}
      />
      {/* Start by prompting user to decide if choice
          is for waypointA or waypointB.
          Use conditional to populate either state based on choice. */}
      {/* <Button onPress={confirmChoice}></Button> */}
    </>
  );
}
