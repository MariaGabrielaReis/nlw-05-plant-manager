import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import { Button } from '../components/Button'

export function Welcome() {
  const [visible, setVisible] = useState(false)

  function handleVisibility(){
    setVisible(true)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>
   
      <Image 
        source={wateringImg} 
        style={styles.image}
      />
    
      <Text style={styles.subtitle}>
          Não se esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title='Avançar'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 80
  },
  image: {
    width: 292,
    height: 284
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 40,
    height: 48,
    paddingHorizontal: 64
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})