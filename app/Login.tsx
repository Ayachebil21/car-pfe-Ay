import React, { useEffect } from 'react';
import { Button, View, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const redirectUri = AuthSession.makeRedirectUri({
    native: 'com.anonymous.carcrush://oauthredirect', // Notez le ://
  });
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '913975267371-tf2oitqrh4m83s50t8gi48b7hqmvce68.apps.googleusercontent.com',
    iosClientId: 'VOTRE_CLIENT_ID_IOS_SI_APPLICABLE', // Optionnel pour iOS
    redirectUri,
    scopes: ['openid', 'profile', 'email'],
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      Alert.alert('Connexion réussie', JSON.stringify(authentication, null, 2));
    } else if (response?.type === 'error') {
      Alert.alert('Erreur', JSON.stringify(response.error, null, 2));
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        disabled={!request}
        title="Se connecter avec Google"
        onPress={() => promptAsync()} // Retirez useProxy: false
      />
    </View>
  );
}