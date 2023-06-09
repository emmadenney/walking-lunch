import Modal from "react-native-modal";
import { Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RouteCalculations from "./RouteCalculations";
import { Button } from "@react-native-material/core";

export default function StartJourneyModal({
  showStartJourneyModal,
  setShowStartJourneyModal,
  distances,
  kmh,
  showRoute,
  setShowRoute,
  setLastLegWalkingDuration,
  setTotalDistance,
  totalDistance,
  setWaypointA,
  setWaypointB,
  totalDuration,
  journeyDistancesDurations,
  setJourneyDistancesDurations,
  markerLocations,
}) {
  const navigation = useNavigation();
  return (
    <Modal isVisible={showStartJourneyModal} style={styles.modal}>
      <Text
        style={{
          fontSize: 22,
          padding: 8,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Journey Details
      </Text>
      <RouteCalculations
        distances={distances}
        kmh={kmh}
        showRoute={showRoute}
        setShowRoute={setShowRoute}
        setLastLegWalkingDuration={setLastLegWalkingDuration}
        setTotalDistance={setTotalDistance}
        totalDistance={totalDistance}
        setWaypointA={setWaypointA}
        setWaypointB={setWaypointB}
        setShowStartJourneyModal={setShowStartJourneyModal}
        totalDuration={totalDuration}
        journeyDistancesDurations={journeyDistancesDurations}
        setJourneyDistancesDurations={setJourneyDistancesDurations}
        markerLocations={markerLocations}
      />
      <Text style={styles.headers}>Are you ready to start your journey?</Text>

      <Button
        style={{
          backgroundColor: "seagreen",
          margin: 15,
          padding: 5,
        }}
        title="Start Journey"
        onPress={() => navigation.navigate("Start Walk")}
      ></Button>
      <Button
        style={{
          backgroundColor: "#79bd6a",
          margin: 5,
        }}
        title="Go Back"
        onPress={() => setShowStartJourneyModal(false)}
      ></Button>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  headers: { fontWeight: "bold", fontSize: 18, padding: 10 },
});
