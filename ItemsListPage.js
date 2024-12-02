import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import FilterFeedModal from './FilerFeed';

import Icon from 'react-native-vector-icons/Ionicons';  // Import the icon library

// Sample data with dateTime instead of year
const data = [
  {
    id: '1',
    title: 'Leather Couch',
    price: '550 $',
    oldPrice: '1000 $',
    dateTime: '2023-08-15 14:30',
    imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Couch',
    price: '500 $',
    dateTime: '2023-07-10 09:15',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'Leather Couch',
    price: '550 $',
    oldPrice: '1000 $',
    dateTime: '2023-08-15 14:30',
    imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    title: 'Couch',
    price: '500 $',
    dateTime: '2023-07-10 09:15',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    title: 'Couch',
    price: '500 $',
    dateTime: '2023-07-10 09:15',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    title: 'Couch',
    price: '500 $',
    dateTime: '2023-07-10 09:15',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// Component for rendering each item
const ItemCard = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <Text style={styles.dateTime}>{item.dateTime}</Text>
    </View>
    <Text style={styles.itemTitle}>{item.title}</Text>
    <View style={styles.priceContainer}>
      {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  </View>
);

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    'Exo-Regular': require('./assets/fonts/Exo-Regular.ttf'),
    'Exo-SemiBold': require('./assets/fonts/Exo-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <View style={styles.titleContainer}>
                <Text style={styles.appTitle}>Swoopa</Text>
                
              </View>
              <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
                    <Icon name="filter-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
      <TextInput style={styles.searchBar} placeholder="Search Feed" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCard item={item} />}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
       <FilterFeedModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  list: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation:10,
  },
  imageContainer: {
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    height: 120,
  },
  dateTime: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 12,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: 'Exo-SemiBold',
    color: '#333',
    padding: 5,
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  oldPrice: {
    fontSize: 14,
    color: '#ee0000',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontFamily: 'Exo-SemiBold',
    color: '#00aa00',
  },
  header: {
    backgroundColor: '#6f7fbf',
    paddingTop: 40,
    paddingBottom: 15,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appTitle: {
    fontFamily: 'Exo-Regular',
    color: '#fff',
    fontSize: 24,
  },
  filterButton: {
    position: 'absolute',
    bottom : 17,
    right: 40,
    zIndex: 1,
  },
});
