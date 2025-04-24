import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CustomHeader = ({ title = 'Titre' }) => {
  const router = useRouter();

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Conteneur d'ombre (nouveau)
  shadowContainer: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
        backgroundColor: 'white',
      },
    }),
    marginBottom:5,
  },

  // Conteneur principal (modifié)
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderRadius: 1, // Nécessaire pour Android
    ...Platform.select({
      android: {
        overflow: 'hidden', // Important pour le border radius
      },
    }),
  },

  backButton: {
    marginRight: 15,
  },

  title: {
    
  fontSize: 24,
  color: '#000000',
  fontWeight: "600",
    fontFamily: "Poppins",
    letterSpacing: 0.5,
  }
});

export default CustomHeader;