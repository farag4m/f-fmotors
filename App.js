import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  // Import the icon library
import ItemsListPage from './ItemsListPage';  // Import the list page
import Settings from './Settings';  // Import the settings page
import Search from './Search';  // Import the search page
import Wins from './WinsPage';  // Import the wins page
import Login from './Login';
import Signup from './Signup';

// Create basic screens for demonstration
function HelpScreen() {
  return <View><Text>Help Screen</Text></View>;
}

// Bottom Tab Navigator (always visible at the bottom)
const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: ({ navigation }) => (
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.appTitle}>Swoopa</Text>
            </View>
          </View>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'wifi-outline';
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Wins') {
            iconName = 'trophy';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          } else if (route.name === 'Help') {
            iconName = 'information-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* Tabs */}
      <Tab.Screen name="Feed" component={ItemsListPage} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Wins" component={Wins} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Help" component={HelpScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator for authentication (Login and Signup)
const AuthStack = createStackNavigator();
function AuthNavigator({ setIsLoggedIn }) {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login">
        {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}

// Main App Component
export default function App() {
  // State to control authentication flow (whether the user is logged in or not)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to false by default

  return (
    <NavigationContainer>
      {/* Conditionally render Auth or Main Tab Navigator */}
      {isLoggedIn ? <MainTabNavigator /> : <AuthNavigator setIsLoggedIn={setIsLoggedIn} />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
});
