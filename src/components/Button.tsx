import React from 'react'
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ... rest }: ButtonProps) {
  return (
    <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7}
        {... rest}
      >
        <Text style={styles.buttonText}>
          { title }
        </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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