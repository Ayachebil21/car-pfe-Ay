import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,

  Alert,
} from 'react-native';
import CustomHeader from '@/components/CustomHeader';

import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function MonProfile() {
  const [verificationStatus, setVerificationStatus] = useState("non-verifie");

  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    gouvernorat: '',
    codePostal: '',
    codePays: '',
  });

  useFocusEffect(
    React.useCallback(() => {
      const loadUserData = async () => {
        const status = await AsyncStorage.getItem('verificationStatus');
        const data = await AsyncStorage.getItem('userData');
        setVerificationStatus(status || 'non-verifie');
        if (data) {
          setUserData(JSON.parse(data));
        }
      };
      loadUserData();
    }, [])
  );

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert("Succès", "Profil mis à jour !");
    } catch (error) {
      Alert.alert("Erreur", "Impossible d'enregistrer");
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
<View style={styles.simpleHeader}>
    <Text style={styles.simpleHeaderTitle}>Mon profil</Text>
  </View>    

    <ScrollView style={styles.container}>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
  <Ionicons name="person" size={90} color="black" />

  {/* Bouton caméra en haut à droite de l'avatar */}
  <TouchableOpacity style={styles.cameraIcon}>
    <Ionicons name="camera" size={18} color="white" />
  </TouchableOpacity>
      </View>

      {/* Statut de vérification */}
      <View style={styles.verifStatus}>
        <Ionicons
          name={
            verificationStatus === 'verifie'
              ? 'checkmark-circle'
              : verificationStatus === 'en-cours'
              ? 'time'
              : 'close-circle'
          }
          size={32}
          color={
            verificationStatus === 'verifie'
              ? 'green'
              : verificationStatus === 'en-cours'
              ? 'orange'
              : 'gray'
          }
        />
        <Text style={styles.verifText}>
          {verificationStatus === 'verifie'
            ? 'Compte vérifié'
            : verificationStatus === 'en-cours'
            ? 'En cours de vérification'
            : 'Non vérifié'}
        </Text>
      </View>

      {/* Section Profil */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionText}>Informations sur le profil</Text>
      </View>

      {/* Champs du profil */}
      {renderField("Nom", userData.nom, (val) => setUserData({ ...userData, nom: val }))}
      {renderField("Prénom", userData.prenom, (val) => setUserData({ ...userData, prenom: val }))}
      {renderField("Numéro de téléphone", userData.telephone, (val) => setUserData({ ...userData, telephone: val }))}

      {/* Adresse (3 colonnes) */}
      <View style={styles.inputGroupRow}>
        <TextInput
          style={[styles.inputCol, styles.input]}
          placeholder="Code"
          value={userData.codePays}
          onChangeText={(val) => setUserData({ ...userData, codePays: val })}
        />
        <TextInput
          style={[styles.inputCol, styles.input]}
          placeholder="Gouvernorat"
          value={userData.gouvernorat}
          onChangeText={(val) => setUserData({ ...userData, gouvernorat: val })}
        />
        <TextInput
          style={[styles.inputCol, styles.input]}
          placeholder="Code postal"
          value={userData.codePostal}
          onChangeText={(val) => setUserData({ ...userData, codePostal: val })}
        />
      </View>

      {renderField("Adresse électronique", userData.email, (val) => setUserData({ ...userData, email: val }))}

      {/* Bouton Enregistrer */}
      <TouchableOpacity style={styles.redButton} onPress={handleSave}>
        <Text style={styles.redButtonText}>Enregistrer</Text>
      </TouchableOpacity>
    </ScrollView>
        </SafeAreaView>
    
    
  );
}

// Composant champ standard
function renderField(label, value, onChangeText) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#fff" },

  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },
  
  cameraIcon: {
    position: 'absolute',
    top: 0,
    right: 100,
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 30,
  },
  verifStatus: {
    alignItems: 'center',
    marginTop: 8,
  },
  verifText: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: '500',
    color: '#444',
  },
  sectionHeader: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: -20,

    marginTop: 2,
    borderRadius: 5,
  },
  sectionText: {
    fontWeight: '600',
    color: 'gray',
    fontSize: 14,
  },
  fieldContainer: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
  },
  fieldLabel: {
    fontSize: 13,
    color: '#999',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    paddingVertical: 6,
    color: '#000',
  },
  inputGroupRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  inputCol: {
    flex: 1,
    marginHorizontal: 5,
  },
  redButton: {
    backgroundColor: 'red',
    paddingVertical: 14,
    borderRadius: 10,
    marginHorizontal: -20,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  
  redButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'lowercase',
  },
  simpleHeader: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
  
    // Ajout de l’espace pour que l’ombre apparaisse
    marginBottom: 10,
  
    // Ombre iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  
    // Ombre Android
    elevation: 6,
  },
  
  simpleHeaderTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  }
  
});
