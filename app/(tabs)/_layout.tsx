import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

SplashScreen.preventAutoHideAsync();

export default function TabsLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',   // ✅ noir quand sélectionné
        tabBarInactiveTintColor: '#999', // ✅ gris clair sinon
        tabBarShowLabel: false,          // ❌ pas de texte
      }}
    >
       {/* -- 3) Mon Profil -- */}
       <Tabs.Screen
        name="MonProfile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      
      {/* ✅ Onglet Vérification */}
      <Tabs.Screen
        name="verifCompte"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-circle" size={size} color={color} />
          ),
        }}
      />
     
      {/* 📞 Onglet Contact */}
      <Tabs.Screen
        name="Contact"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" size={size} color={color} />
          ),
        }}
      />

      {/* 🚪 Onglet Logout */}
      <Tabs.Screen
        name="logout"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    
  );
}
