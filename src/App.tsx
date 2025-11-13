import { useEffect } from 'react';
import * as SplashScreen from "expo-splash-screen";
import { Inter_400Regular,Inter_800ExtraBold,Inter_400Regular_Italic,useFonts } from '@expo-google-fonts/inter';

import { AppRoutes } from './Routes';


SplashScreen.preventAutoHideAsync();
              
export const App = () => {
  const [loaded, error] = useFonts({
    regular: Inter_400Regular,
    extraBold: Inter_800ExtraBold,
    italic: Inter_400Regular_Italic,
  });

    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);

    if (!loaded && !error) {
      return null;
    }
  return (
      <AppRoutes />
  );
}

