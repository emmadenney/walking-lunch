import Modal from "react-native-modal";
import SetTimer from "./SetTimer";
import SpeedSelector from "./SpeedSelector";
import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "@react-native-material/core";
import { Text, StyleSheet } from "react-native";
import { wipeMarkers } from "../utils/functions/wipe-markers";

import { Buttons } from "../styles";

export default function PreferencesModal({ setKmh, setTotalDuration }) {
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal isVisible={showModal} style={styles.modal}>
      <Text>Set your walking preferences!!!</Text>
      <SpeedSelector setKmh={setKmh} />
      <SetTimer setTotalDuration={setTotalDuration}></SetTimer>
      <Button
        style={styles.buttons}
        title="Set Preferences"
        onPress={() => setShowModal(false)}
      ></Button>
    </Modal>
  );
}

export default function PreferencesModal({setKmh, setTotalDuration}){
    const [showModal, setShowModal] =useState(true);

    return(
      
<Modal isVisible={showModal} style={styles.modal}  > 
<Text>Set your walking preferences!!!</Text>
<SpeedSelector setKmh={setKmh} />
<SetTimer setTotalDuration={setTotalDuration}></SetTimer>
<Button title='Set Preferences' onPress={() => setShowModal(false)}></Button>
</Modal>

)}


const styles = StyleSheet.create({
 buttons: Buttons.buttons,
    modal: {
      backgroundColor: 'white',
      margin: 25, 
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
