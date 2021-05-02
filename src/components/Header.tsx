import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import userImg from '../assets/maby.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Header(){
  const [ userName, setUserName ] = useState<string>()

  useEffect(() => {
    async function loadStorageUserName(){
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || '')
    }
  
    loadStorageUserName()
  },[])
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}> {userName} </Text>
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
    marginTop: getStatusBarHeight() + 10,
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