// Search.js
import {React , useState}from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CreateSearchModal from './SearchModals/CreateSearch';
import CreateSearchModalsec from "./SearchModals/CreateSearch2";
import CreateSearchModalthird from './SearchModals/CreateSearch3';
import CreateSearchModalplt from './SearchModals/PlatformModal';
const Search = () => {
  const [typ,settyp] = useState('');
  const [ModalVisib , setModalVisib ] = useState(false); 
  const [ModalVisible ,  setModalVisible] =  useState(false);
  const [ModalVisible2 ,  setModalVisible2] =  useState(false);
  const [ModalVisible3 ,  setModalVisible3] =  useState(false);
  const [ModalVisibleplt ,  setModalVisibleplt] =  useState(false);

  const platforms = [
    { label: 'Facebook', icon: require('./assets/facebook.png') },
    { label: 'Offerup', icon: require('./assets/offerup.png') },
    { label: 'Craigslist', icon: require('./assets/craigslist.png') },

  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>AI Reseller/Scam Filter active</Text>
        <TouchableOpacity style={styles.tutorialButton}>
          <Text style={styles.tutorialText}>Tutorial</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.body}>
        <Text style={styles.bodyText}>No searches yet.</Text>
        <Text style={styles.bodySubText}>Click the button below to get started!</Text>
      </View>

      <TouchableOpacity style={styles.createButton} onPress={ () => setModalVisible(true)}>
        <Text style={styles.createButtonText}>Create Search</Text>
      </TouchableOpacity>
      <CreateSearchModal
        visible={ModalVisible}
        onClose={() => setModalVisible(false)}
        onfirststep={() => {setModalVisible(false); setModalVisible2(true); }}
      />
      <CreateSearchModalsec
      visible={ModalVisible2}
      onPrevPress={() => {setModalVisible(true); setModalVisible2(false);}}
      onNextPress={() => {setModalVisible3(true); setModalVisible2(false);}}
      OnplatformPress={() => {setModalVisibleplt(true);}}
      />
      <CreateSearchModalthird 
      visible={ModalVisible3}
      onPrevPress={() => {setModalVisible2(true); setModalVisible3(false);}}
      onNextPress={() => { setModalVisible3(false);}}
      />
      <CreateSearchModalplt
      visible={ModalVisibleplt}
      items={platforms}
      onItemPress={() => {setModalVisibleplt(false);}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  headerText: {
    fontFamily:'Exo-Regular',
    fontSize: 16,
    color: '#000',
  },
  tutorialButton: {
    fontFamily:'Exo-Regular',
    backgroundColor: 'transparent',
    padding: 5,
    paddingHorizontal:20,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#6f7fbf',
  },
  tutorialText: {
    fontFamily:'Exo-Regular',
    color: '#4682B4',
  },
  body: {
    
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bodyText: {
    fontFamily:'Exo-Regular',
    fontSize: 18,
    color: '#000',
  },
  bodySubText: {
    fontFamily:'Exo-Regular',
    fontSize: 14,
    color: '#808080',
    marginTop: 10,
  },
  createButton: {
    backgroundColor: '#808080',
    paddingVertical: 15,
    width:'90%',
    
    borderRadius: 10,
    marginBottom: 20,
  },
  createButtonText: {
    fontFamily:'Exo-Regular',
    textAlign:'center',
    color: '#fff',
    fontSize: 16,
  },
});

export default Search;
