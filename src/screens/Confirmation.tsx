import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/core"

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { Button } from '../components/Button'

export function Confirmation() {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate("PlantSelect")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😁
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas 
          plantinhas com muito cuidado
        </Text>

        <View style={styles.footer}>
          <Button 
            title="Começar"
            onPress={handleMoveOn}          
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  emoji: {
    fontSize: 56
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 20
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 10,
    color: colors.heading
  },
  footer: {
    paddingHorizontal: 50,
    marginTop: 20
  }
})