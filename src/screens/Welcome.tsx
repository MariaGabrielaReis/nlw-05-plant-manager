import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas {'\n'}
          de forma fácil
        </Text>
    
        <Image 
          source={wateringImg} 
          style={styles.image}
          resizeMode="contain"
        />
      
        <Text style={styles.subtitle}>
            Não se esqueça mais de regar suas plantas.
            Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
          Avançar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 64,
  },
  image: {
    height: Dimensions.get("window").width * 0.7
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.text,
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
    width: Dimensions.get("window").width * 0.7,
    paddingHorizontal: 64
  },
  buttonText: {
    color: colors.white,
    fontSize: 22
  }
})