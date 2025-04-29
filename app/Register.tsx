import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import CustomHeader from "@/components/CustomHeader";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

import registrationFormats, {
  RegistrationFormat,
  PlatePart,
} from "./format"

interface FormData {
  username: string;
  prenom: string;
  email: string;
  password: string;
  phoneNumber: string;
  photoUri: string | null;
}

const RegisterScreen = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState<FormData>({
    username: "",
    prenom: "",
    email: "",
    password: "",
    phoneNumber: "",
    photoUri: null,
  });

  const [selectedCountry, setSelectedCountry] = useState<RegistrationFormat>(() => {
    const defaultCountry = registrationFormats.find((c) => c.country === "Tunisie");
    return defaultCountry || registrationFormats[0];
  });

  const AVATAR_SIZE = 100;

  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission refusée", "Accès aux photos requis.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!result.canceled && result.assets.length > 0) {
      setFormData({ ...formData, photoUri: result.assets[0].uri });
    }
  };

  const takePhotoWithCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission refusée", "Accès à la caméra requis.");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!result.canceled && result.assets.length > 0) {
      setFormData({ ...formData, photoUri: result.assets[0].uri });
    }
  };

  const handleAddPhoto = () => {
    Alert.alert("Ajouter une photo", "Choisissez une option", [
      { text: "Galerie", onPress: pickImageFromGallery },
      { text: "Caméra", onPress: takePhotoWithCamera },
      { text: "Annuler", style: "cancel" },
    ]);
  };

  const [registrationParts, setRegistrationParts] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    selectedCountry.parts.forEach((part) => {
      initial[part.name] = "";
    });
    return initial;
  });

  const handleCountryChange = (countryName: string) => {
    const country = registrationFormats.find((c) => c.country === countryName);
    if (!country) return;
    setSelectedCountry(country);

    const reset: Record<string, string> = {};
    country.parts.forEach((part) => {
      reset[part.name] = "";
    });
    setRegistrationParts(reset);
  };

  const handlePartChange = (name: string, value: string) => {
    setRegistrationParts({ ...registrationParts, [name]: value });
  };

  const generateFullRegistration = () => {
    let result = selectedCountry.pattern;
    result = result.replace("{{country}}", selectedCountry.country);
    for (const part of selectedCountry.parts) {
      result = result.replace(`{{${part.name}}}`, registrationParts[part.name] || part.placeholder);
    }
    return result;
  };
  const handleSubmit = () => {
    const fullRegistrationNumber = generateFullRegistration();
  
    const dataToSend = {
      ...formData,
      country: selectedCountry.country,
      registrationNumber: fullRegistrationNumber,
    };
  
    console.log('✅ Données prêtes à envoyer :', dataToSend);
  
    Alert.alert(
      'Succès', 
      'Inscription réussie ! 🚀',
      [
        {
          text: 'OK',
          onPress: () => {
            router.replace('/Login');
          },
        },
      ]
    );
  };
  

  const renderSerialInputs = () => {
    if (selectedCountry.country === "Tunisie") {
      return (
        <View style={styles.serialLine}>
          <TextInput
            style={styles.serialBox}
            placeholder={selectedCountry.parts[0].placeholder}
            value={registrationParts[selectedCountry.parts[0].name]}
            onChangeText={(text) => handlePartChange(selectedCountry.parts[0].name, text)}
            keyboardType={selectedCountry.parts[0].keyboardType || "numeric"}
            maxLength={selectedCountry.parts[0].length}
          />
          <Text style={styles.serialCountry}>تونس</Text>
          <TextInput
            style={styles.serialBox}
            placeholder={selectedCountry.parts[1].placeholder}
            value={registrationParts[selectedCountry.parts[1].name]}
            onChangeText={(text) => handlePartChange(selectedCountry.parts[1].name, text)}
            keyboardType={selectedCountry.parts[1].keyboardType || "numeric"}
            maxLength={selectedCountry.parts[1].length}
          />
        </View>
      );

    }
    if (selectedCountry.country === "Autre") {
      return (
        <TextInput
          style={[styles.underlineInput, { textAlign: 'center' }]}
          placeholder="Entrez votre numéro d'immatriculation"
          value={registrationParts["part1"]}
          onChangeText={(text) => handlePartChange("part1", text)}
          maxLength={selectedCountry.parts[0].length}
        />
      );
    }
    if (selectedCountry.country === "ن.ت") {
      return (
        <View style={styles.serialLine}>
          <TextInput
            style={styles.serialBox}
            placeholder=" 0 0 "
            value={registrationParts["part1"]}
            onChangeText={(text) => handlePartChange("part1", text)}
            keyboardType="numeric"
            maxLength={30}
          />
          <Text style={styles.serialCountry}>ن.ت</Text>
          <TextInput
            style={styles.serialBox}
            value={registrationParts["part2"]}
            onChangeText={(text) => handlePartChange("part2", text)}
            keyboardType="numeric"
            maxLength={4}
          />
        </View>
      );
    }
    
    
    
    return (
      <View style={styles.serialLine}>
        {selectedCountry.parts.map((part, index) => (
          <React.Fragment key={part.name}>
            {index > 0 && <Text style={styles.serialSeparator}> </Text>}
            <TextInput
              style={[
                styles.serialBox,
                part.keyboardType === "default" && styles.uppercase,
              ]}
              placeholder={part.placeholder}
              value={registrationParts[part.name]}
              onChangeText={(text) => handlePartChange(part.name, text)}
              keyboardType={part.keyboardType || "numeric"}
              maxLength={part.length}
            />
          </React.Fragment>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <CustomHeader title="Mon Profil" />
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.avatarWrapper}>
      <View style={[styles.avatarContainer]}>
      {formData.photoUri ? (
      <Image source={{ uri: formData.photoUri }} style={styles.avatarImage} />
     ) : (
      <Image source={require('@/assets/images/image.png')} style={styles.avatarImage} />
     )}

     <TouchableOpacity onPress={handleAddPhoto} style={styles.redCameraIcon}>
      <Ionicons name="camera" size={15} color="#fff" />
     </TouchableOpacity>
     </View>
     </View>


        {[
          { key: "username", label: "Nom", keyboardType: "default" },
          { key: "prenom", label: "Prénom", keyboardType: "default" },
          { key: "phoneNumber", label: "Numéro de Téléphone", keyboardType: "phone-pad" },
          { key: "email", label: "Email", keyboardType: "email-address" },
          { key: "password", label: "Mot de passe", secureTextEntry: true },
        ].map((field) => (
          <View key={field.key} style={styles.fieldContainer}>
            <Text style={styles.label}>
              {field.label} <Text style={styles.star}>     *</Text>
            </Text>
            <TextInput
              style={styles.underlineInput}
              value={formData[field.key as keyof FormData]}
              onChangeText={(text) => setFormData({ ...formData, [field.key]: text })}
              keyboardType={field.keyboardType as any}
              secureTextEntry={field.secureTextEntry}
            />
          </View>
        ))}

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Num Série<Text style={styles.star}>     *</Text></Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={selectedCountry.country}
              onValueChange={handleCountryChange}
            >
              {registrationFormats.map((item) => (
                <Picker.Item key={item.country} label={item.country} value={item.country} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.fieldContainer}>{renderSerialInputs()}</View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
  <Text style={styles.submitText}>Valider</Text>
</TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#fff" },
  container: { padding: 20, alignItems: "center" },
  fieldContainer: { width: "100%", marginBottom: 30},
  label: { fontSize: 15, color: "gray",    fontWeight: '600',
    marginBottom: 10,paddingHorizontal:4, fontFamily: 'Poppins', // ou 'System' si Poppins n'est pas installé
    letterSpacing: 0.5,},
  star: { color: "red", fontSize: 9,marginLeft:40, },
  underlineInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    fontSize: 16,
    color: "#000",
    paddingVertical: 5,
  },
  pickerBox: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",

  },
  serialLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
    flexWrap: "wrap",
  },
  serialBox: {
    width: 70,
    textAlign: "center",
    fontSize: 16,
    color: "#000",
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  serialSeparator: { fontSize: 16, color: "#000" },
  serialCountry: { fontSize: 16, fontWeight: "bold", color: "#000", marginHorizontal: 5 },
  uppercase: { textTransform: "uppercase" },
  formatHint: {
    textAlign: "center",
    marginTop: 10,
    fontStyle: "italic",
    color: "#888",
    fontSize: 12,
  },
  submitBtn: {
    backgroundColor: "#E60000",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  avatarWrapper: {
    alignItems: "center",
    marginVertical: 40,
    marginBottom:110,
    marginTop:0,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 20.9,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  redCameraIcon: {
    position: "absolute",
    top: 1,            // Décalé légèrement vers le bas
    right: 8,          // Décalé légèrement vers la gauche
    backgroundColor: "#E60000",
    borderRadius: 15,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    //borderWidth: 2,
    zIndex: 15,
  },
  
});

export default RegisterScreen;
