import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '913975267371-tf2oitqrh4m83s50t8gi48b7hqmvce68.apps.googleusercontent.com',
    redirectUri: 'com.anonymous.carcrush:/oauthredirect',
    scopes: ['openid', 'profile', 'email'],
    responseType: 'code',
  });

  const handleLogin = () => {
    if (!email.endsWith('@gmail.com')) {
      Alert.alert('Erreur', "L'adresse email doit se terminer par @gmail.com");
      return;
    }
    router.replace('/(tabs)/MonProfile');
  };

  useEffect(() => {
    if (!response) return;

    if (response.type === 'success') {
      console.log('✅ Connexion Google réussie !');
      console.log('Données OAuth reçues:', response);

      router.replace('/(tabs)/MonProfile');
    } 
    else if (response.type === 'error') {
      console.log('❌ Erreur de connexion Google:', response.error);
      Alert.alert('Erreur', 'La connexion Google a échoué. Veuillez réessayer.');
    }
    else {
      console.log('⚠️ Connexion annulée ou réponse inattendue:', response);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo-car.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Adresse électronique"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => router.push('/ForgetPassword')}>
          <Text style={styles.forgotText}><Text style={{ fontWeight: 'bold' }}>Oublié?</Text></Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>

      <Text style={styles.continueText}><Text style={{ fontWeight: 'bold' }}>continuer avec</Text></Text>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => promptAsync()}
        disabled={!request}
      >
        <Image source={require('../assets/images/google1.png')} style={styles.googleIcon} />
        <Text style={styles.googleText}><Text style={{ fontWeight: 'bold' }}>Google</Text></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton} onPress={() => router.push('/Register')}>
        <Text style={styles.signupText}><Text style={{ fontWeight: 'bold' }}>Nouvel utilisateur</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginBottom: 50,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    marginBottom: 20,
  },
  forgotText: {
    color: 'red',
    alignSelf: 'flex-end',
    marginTop: -15,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#F08080',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0F056B',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
  },
  signupButton: {
    borderColor: '#F08080',
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  signupText: {
    color: '#F08080',
    fontSize: 16,
  },
});
