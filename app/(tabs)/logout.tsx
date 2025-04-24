import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LogoutScreen() {
  const router = useRouter();

  const handleConfirm = () => {
    router.replace('/Login'); // Redirige vers la page de connexion
  };

  const handleCancel = () => {
    router.back(); // Retour à la page précédente (Contact, etc.)
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Déconnexion</Text>
        <Text style={styles.modalMessage}>
          Voulez-vous vraiment vous déconnecter ?
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleCancel}
          >
            <Text style={styles.cancelText}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={handleConfirm}
          >
            <Text style={styles.confirmText}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  confirmButton: {
    backgroundColor: '#E60000',
  },
  cancelText: {
    fontFamily: 'Poppins_700Bold',
    color: '#333',
  },
  confirmText: {
    fontFamily: 'Poppins_700Bold',
    color: 'white',
  },
});
