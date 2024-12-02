// Wins.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const winsData = [
  {
    id: '1',
    name: 'Jared F.',
    time: '9 hours ago',
    description: ' Over $3,000 profit this month so far and I\'m part time 🔥',
    image: 'https://i.ytimg.com/vi/jPfM3NpRAfQ/maxresdefault.jpg', // Replace with actual image URL
  },
  {
    id: '2',
    name: 'Luther B.',
    time: '15 hours ago',
    description: 'bought a  whole lot of stuff',
    image: 'https://www.clutter.com/blog/wp-content/uploads/2017/06/02063340/Sell-Used-Furniture-1.jpg', // Replace with actual image URL
  }
];

const Wins = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit your win</Text>
      </TouchableOpacity>

      <FlatList
        data={winsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.winContainer}>
            <View style={styles.profileRow}>
              <Image
                source={{ uri: 'https://example.com/profile.jpg' }} // Replace with profile image URL
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <Text style={styles.description}>{item.description}</Text>
            <Image source={{ uri: item.image }} style={styles.winImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#6f7fbf',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  winContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#808080',
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  winImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default Wins;
