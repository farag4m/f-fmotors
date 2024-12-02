import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const FilterFeedModal = ({ visible, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("All");

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.header}>Filter Feed Results</Text>

          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === "All" && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedOption("All")}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === "All" && styles.optionTextSelected,
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === "Saved" && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedOption("Saved")}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === "Saved" && styles.optionTextSelected,
                ]}
              >
                Saved
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                console.log("Filter applied:", selectedOption);
                onClose();
              }}
            >
              <Text style={styles.actionButtonText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setSelectedOption("All")}
            >
              <Text style={styles.actionButtonText}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};



const styles = StyleSheet.create({
  
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: Dimensions.get("window").width * 0.8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontSize: 18,
    fontFamily:'Exo-Regular',
    marginBottom: 15,
    color: "#4A4A4A",
  },
  optionsContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  optionButtonSelected: {
    backgroundColor: "#E6F0FF",
  },
  optionText: {
    fontSize: 16,
    color: "#4A4A4A",
    fontFamily:'Exo-Regular',
  },
  optionTextSelected: {
    color: "#3B82F6",
    fontFamily:'Exo-Regular',
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  applyButton: {
    flex: 1,
    backgroundColor: "#4682B4",
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  clearButton: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    marginLeft: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  actionButtonText: {
    fontSize: 16,
    color: "white",
    fontFamily:'Exo-Regular',
  },
});
export default FilterFeedModal;