import React, { useState, useEffect } from 'react'
import { Image, View, Text, StyleSheet, FlatList } from 'react-native'
import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'

import waterdrop from '../assets/waterdrop.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { Header } from '../components/Header'
import { loadPlant, PlantProps } from '../libs/storage'
import { PlantCardSecondary } from '../components/PlantCardSecondary'


export function MyPlants(){
  const [ myPlants, setMyPlants ] = useState<PlantProps[]>([])
  const [ loading, setLoading ] = useState(true)
  const [ nextWatered, setNextWatered ] = useState<string>()

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant()

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWatered(`Não esqueça de regar a ${plantsStoraged[0].name} daqui a ${nextTime}`)
    
      setMyPlants(plantsStoraged)
      setLoading(false)
    }

    loadStorageData()
  }, [])

  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.spotlight}>
        <Image 
          source={waterdrop}
          style={styles.spotlightImage}
        />
        <Text style={styles.spotlightText}>
          {nextWatered}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <PlantCardSecondary
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flex:1}}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  spotlightImage: {
    width: 56,
    height: 56
  },
  spotlightText: {
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 15
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 20,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20
  }
})