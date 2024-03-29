import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, Dimensions } from 'react-native'

import colors from '../styles/colors'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ... rest }: ButtonProps) {
  return (
    <TouchableOpacity 
        style={styles.container} 
        activeOpacity={0.7}
        {... rest}
      >
        <Text style={styles.text}>
          { title }
        </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 40,
    height: 48,
    width: Dimensions.get("window").width * 0.7,
    paddingHorizontal: 64
  },
  text: {
    color: colors.white,
    fontSize: 22,
  }
})