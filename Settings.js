import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

const Settings = () => {
  const [isFilterOn, setIsFilterOn] = useState(true);

  const toggleSwitch = () => setIsFilterOn(previousState => !previousState);

  const deleteAccountAlert = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Delete", onPress: () => console.log("Account Deleted") }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <FontAwesome name="ban" size={24} color="black" />
        <Text style={styles.text}>Blocked Sellers</Text>
      </View>

      <View style={styles.section}>
        <FontAwesome name="shield" size={24} color="black" />
        <Text style={styles.text}>Reseller/Scam Filter</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isFilterOn ? "#81b0ff" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isFilterOn}
        />
      </View>

      <TouchableOpacity style={styles.section}>
        <Feather name="credit-card" size={24} color="black" />
        <Text style={styles.text}>Subscriptions</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Help & Support</Text>
      <View style={styles.supportSection}>
        <TouchableOpacity style={styles.supportOption}>
          <FontAwesome name="facebook" size={24} color="black" />
          <Text style={styles.text}>Messenger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supportOption}>
          <Feather name="mail" size={24} color="black" />
          <Text style={styles.text}>Email</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.section2}>
        <Feather name="log-out" size={24} color="black" />
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Version 1.0.1</Text>

      <TouchableOpacity style={styles.deleteAccountButton} onPress={deleteAccountAlert}>
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  section2: {
    marginTop:25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  supportSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  supportOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginLeft: 15,
  },
  version: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginVertical: 20,
  },
  deleteAccountButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Settings;
