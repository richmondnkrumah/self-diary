import { Stack } from 'expo-router';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import "../global.css"
import { useRouter } from 'expo-router';

const showOnboardingScreen = async () => {
  try {
    const isOnboarding = await AsyncStorage.getItem('showOnboarding');
    if (isOnboarding !== null) {
      // value previously stored
      return isOnboarding
    }
  } catch (e) {
    // error reading value
    return false

  }
};


export default function RootLayout() {
  const router = useRouter()

  useEffect(() => {
      router.push('/auth')
    // const startOnboarding = showOnboardingScreen()
    // if(!startOnboarding && startOnboarding === "Start" ){
    //   router.push("/onboarding")
    // }
    
  })
  

  return (
      <Stack screenOptions={{headerShown: false}} />
  );
}
