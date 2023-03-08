import { StatusBar } from 'react-native';
import { useState } from 'react';

import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Inter_400Regular, Inter_700Bold,} from '@expo-google-fonts/inter';

import { Home } from './src/screens/home/index_da_Home'
import theme from './theme';


export default function App() {
  const [fontsLoaded] = useFonts ({ Inter_400Regular,Inter_700Bold})

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ThemeProvider theme={theme}>
        { fontsLoaded ? <Home completed={false} /> : <ActivityIndicator /> }  
      </ThemeProvider>
      
    </>
  );
}
