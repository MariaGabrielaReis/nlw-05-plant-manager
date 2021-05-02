import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import userImg from '../assets/maby.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface PlantProps extends RectButtonProps {
  data: {
    name: string,
    photo: string,
    hour: string
  }
}

export function PlantCardSecondary({ data, ...rest }: PlantProps) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri uri={data.photo} width={50} height={50} />
      <Text style={styles.title}>
        { data.name }
      </Text>

      <View style={styles.details}>
        <Text style={styles.timeLabel}>
          Regar às
        </Text>
        <Text style={styles.time}>
          {data.hour}
        </Text>
      </View>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 25,
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  title: {
    flex: 1,
    fontFamily: fonts.heading,
    marginLeft: 10,
    fontSize: 17,
    color: colors.green_dark
  },
  details: {
    alignItems: 'flex-end'
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark
  }
})