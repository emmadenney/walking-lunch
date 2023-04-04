import Modal from "react-native-modal";
import SetTimer from "./SetTimer";
import SpeedSelector from "./SpeedSelector";
import { useState } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { Button } from "@react-native-material/core";
import { Buttons } from "../styles";

export default function PreferencesModal({ setKmh, setTotalDuration }) {
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal isVisible={showModal} style={styles.modal}>
      {/* <Image
        style={{ objectFit: "contain", maxWidth: 300, marginTop: 40 }}
        source={require("../walking-lunch-logo.png")}
      ></Image> */}
      <Text style={{ fontSize: 22, padding: 30, textAlign: "center" }}>
        Set your walking preferences
      </Text>
      <SpeedSelector setKmh={setKmh} />
      <SetTimer setTotalDuration={setTotalDuration}></SetTimer>
      <Button
        style={{
          backgroundColor: "seagreen",
          margin: 20,
          padding: 10,
        }}
        title="Set Preferences"
        onPress={() => setShowModal(false)}
      ></Button>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttons: Buttons.buttons,
  modal: {
    backgroundColor: "white",
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
