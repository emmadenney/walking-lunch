import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Button } from "react-native";

export default function DestinationSearch({
  setSearchedDestination,
  location,
}) {
  const GOOGLE_MAPS_APIKEY = "AIzaSyDIt7GvEhgmT3io-pKMPqTKIif4jkx9-2U";

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

      {/* <Button title='searchDestination'>Input Destination</Button> */}
    </>
  );
}
