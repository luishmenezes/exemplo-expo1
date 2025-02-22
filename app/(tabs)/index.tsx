import { Image, StyleSheet, Text, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.imagemContainer}>
          <Image
            source={require('@/assets/images/pombo.jpg')}
            style={styles.imagemPombo}
          />
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.corTexto}>Olá, sou um pombo!</Text>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },
  imagemContainer: {
    width: '100%',
    height: 250, 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  imagemPombo: {
    
    resizeMode: 'contain',
  },
  corTexto: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
});
