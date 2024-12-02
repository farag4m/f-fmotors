import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, ImageBackground, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Login = ({ navigation, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontsLoaded] = useFonts({
    'Exo-Regular': require('./assets/fonts/Exo-Regular.ttf'),
    'Exo-SemiBold': require('./assets/fonts/Exo-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // Handle login
  const handleLogin = () => {
    // Add real login logic here (e.g., API calls)
    console.log('Login with', email, password);

    // After successful login, set isLoggedIn state to true
    setIsLoggedIn(true); // This updates the state in the App component

  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
    // Implement your Google login logic here
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg.jpg')} style={styles.background}>
        <Animated.View style={styles.header}>
          <Text style={styles.headerText}>Login to Your Account</Text>
        </Animated.View>

        <Animated.View style={styles.body}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#B0B0B0"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#B0B0B0"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Google Login Button */}
          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
            <Image source={require('./assets/google-logo.webp')} style={styles.googleLogo} />
            <Text style={styles.googleButtonText}>Login with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupButtonText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 30,
    textAlign: 'center',
  },
  headerText: {
    fontFamily: 'Exo-Regular',
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  body: {
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Slight background overlay for text contrast
    borderRadius: 15,
    paddingVertical: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderColor: '#4682B4',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: 'Exo-Regular',
  },
  loginButton: {
    backgroundColor: '#4682B4',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Exo-Regular',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', 
    width: '100%',
    paddingVertical:10,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  googleLogo: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#121212',
    fontSize: 16,
    fontFamily: 'Exo-Regular',
  },
  signupButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },
  signupButtonText: {
    color: '#4682B4',
    fontFamily: 'Exo-Regular',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;
