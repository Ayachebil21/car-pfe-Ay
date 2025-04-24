import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../../components/Header'; // Composant Header réutilisable

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSend = () => {
    if (!name || !email || !message) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Erreur', 'Veuillez entrer un e-mail valide.');
      return;
    }

    Alert.alert('Succès', 'Message envoyé !');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      {/*  Header sans fallback */}
<View style={styles.simpleHeader}>
    <Text style={styles.simpleHeaderTitle}>Contactez Nous</Text>
  </View>  
      <View style={styles.content}>
        {/* Icône email */}
        <Image source={require('../../assets/images/mail.png')} style={styles.icon} />

        <Text style={styles.heading}>CONTACTEZ-NOUS</Text>
        <Text style={styles.email}>contact@datum-it.com</Text>

        {/* Champs de formulaire */}
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={setName}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="E-Mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="black"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline
          placeholderTextColor="black"
        />

        {/* Bouton envoyer */}
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#777',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
    color: 'black',
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#E60000',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
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
