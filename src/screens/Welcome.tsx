import React from 'react';
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/core"

import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Welcome() {
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate("UserIdentification")
  }

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

        <Button 
          title='Avançar'
          onPress={handleStart}
        />
        
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
  }
})