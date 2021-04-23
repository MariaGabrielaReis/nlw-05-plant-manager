import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import userImg from '../assets/maby.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Header(){
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Maby</Text>
      </View>
      <Image source={userImg} style={styles.image}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    padding: 30
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  }
})