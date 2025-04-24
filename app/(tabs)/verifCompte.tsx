import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '@/components/CustomHeader';

export default function VerifCompte() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('non-verifie');

  useEffect(() => {
    const fetchStatus = async () => {
      const status = await AsyncStorage.getItem('verificationStatus');
      setVerificationStatus(status || 'non-verifie');
    };
    fetchStatus();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleValidation = async () => {
    if (!image) {
      Alert.alert("Erreur", "Veuillez ajouter une photo.");
      return;
    }

    try {
      setLoading(true);

      // Simuler l'envoi + mise à jour du statut local
      await AsyncStorage.setItem('verificationStatus', 'en-cours');
      setVerificationStatus('en-cours');

      setLoading(false);
    } catch (error) {
      Alert.alert("Erreur", "Échec de l'envoi.");
      setLoading(false);
    }
  };

  if (verificationStatus === 'en-cours') {
    return (
      <View style={{ flex: 1 }}>
<View style={styles.simpleHeader}>
    <Text style={styles.simpleHeaderTitle}>Vérification en cours</Text>
  </View>   
      
  <View style={styles.container}>
        <Text style={styles.title}>Vérification en cours</Text>
        <Text style={styles.message}>
          Votre demande est en cours de vérification.{"\n"}{"\n"}
          Notre équipe examine attentivement vos documents et reviendra vers vous dès que possible.{"\n"}{"\n"}
          Merci de votre patience.
        </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
<View style={styles.simpleHeader}>
    <Text style={styles.simpleHeaderTitle}>Vérifier votre Compte</Text>
  </View> 
    <View style={styles.container}>

      <Text style={styles.title}>Soumettre la vérification</Text>

      <Text style={styles.instruction}>
        Veuillez soumettre un justificatif de propriété de votre véhicule (carte grise, contrat d'achat...).
      </Text>

      <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
        <Ionicons name="add" size={36} color="white" />
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

      <TouchableOpacity onPress={handleValidation} style={styles.validateButton}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.validateText}>Valider</Text>
        )}
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  instruction: { textAlign: 'center', fontSize: 16, color: '#666', marginBottom: 20 },
  uploadButton: { backgroundColor: '#007bff', padding: 20, borderRadius: 50 },
  validateButton: { marginTop: 30, backgroundColor: 'red', padding: 15, borderRadius: 8 },
  validateText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  imagePreview: { marginTop: 20, width: 200, height: 200, borderRadius: 10 },
  message: { fontSize: 16, color: '#555', textAlign: 'center', lineHeight: 24 },
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
