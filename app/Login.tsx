import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet, ActivityIndicator } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const redirectUri = "myapp://redirect"; // ✅ Ton URI custom sans makeRedirectUri()

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "913975267371-tf2oitqrh4m83s50t8gi48b7hqmvce68.apps.googleusercontent.com", // ✅ Ton client Android
    redirectUri,
    scopes: ["openid", "profile", "email"]
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { accessToken } = response.authentication!;
      setLoading(true);
      fetchUserInfo(accessToken);
    }
  }, [response]);

  const fetchUserInfo = async (token: string) => {
    try {
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const user = await res.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
      setLoading(false);
      router.replace("/MonProfile"); // ✅ Redirige après connexion
    } catch (err) {
      console.log("Erreur:", err);
      setLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("@user");
    setUserInfo(null);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#4285F4" />
      ) : !userInfo ? (
        <Button title="Connexion avec Google" disabled={!request} onPress={() => promptAsync()} />
      ) : (
        <View style={styles.card}>
          <Image source={{ uri: userInfo.picture }} style={styles.image} />
          <Text style={styles.text}>Nom : {userInfo.name}</Text>
          <Text style={styles.text}>Email : {userInfo.email}</Text>
          <Button title="Déconnexion" onPress={logout} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  card: { alignItems: "center", marginTop: 20 },
  image: { width: 80, height: 80, borderRadius: 40 },
  text: { fontSize: 16, marginBottom: 5 }
});
