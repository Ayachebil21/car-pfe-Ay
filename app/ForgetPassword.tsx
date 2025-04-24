import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import Header from "../components/Header"; // composant Header avec back sécurisé
import CustomHeader from "@/components/CustomHeader";


export default function ForgetPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      Alert.alert("Erreur", "Veuillez entrer un e-mail valide.");
      return;
    }

    alert("Un email de réinitialisation a été envoyé !");
  };

  return (
        <SafeAreaView style={styles.safeContainer}>
    


      {/* Header avec retour intelligent */}
      <CustomHeader title="Mon de passe oublié" />
      <View style={styles.container}>


      {/* Texte d'instruction */}
      <Text style={styles.subtitle}>
        Entrez votre e-mail ci-dessous pour recevoir les instructions de réinitialisation du mot de passe.
      </Text>

      {/* Champ de saisie */}
      <TextInput
        style={styles.input}
        placeholder="Entrez votre adresse email"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />

      {/* Bouton d’envoi */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Soumettre</Text>
      </TouchableOpacity>
    </View>
        </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
  },
  safeContainer: { flex: 1, backgroundColor: "#fff" },

  subtitle: {
    fontSize: 14,
    color: "#444",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    color: "black",
    fontFamily: "Poppins_700Bold",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: "#E60000",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
});
