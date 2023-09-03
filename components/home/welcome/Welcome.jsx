import React, { useState } from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import { useRouter } from 'expo-router'

import {icons,SIZES} from "../../../constants"

import styles from './welcome.style'
import { FlatList, TextInput } from 'react-native-gesture-handler'

const jobTypes=['Full-Time','Part-Time','Contractor']

const Welcome = () => {
  const router=useRouter()
  const [active,setActive]=useState('Full-Time')
  const [searchText,setSearchText]=useState('')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome</Text>
        <Text style={styles.welcomeMessage}>Find your perfect JOB</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} onChangeText={text=>setSearchText(text)} value={searchText} placeholder='What are you looking for?'/>
        </View>

        <TouchableOpacity 
          style={styles.searchBtn}
          onPress={()=>{}}
        >
          <Image
            source={icons.search}
            resizeMode="cover"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>  
        
      </View>

      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes} renderItem={(item)=>{
          <TouchableOpacity style={styles.tab(active,item)} onPress={()=>{
            setActive(item);
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(active,item)}>{item}</Text>
          </TouchableOpacity>
        }}
        keyExtractor={(item)=> item}
        horizontal={true}
        contentContainerStyle={{columnGap:SIZES.small}}
        />


      </View>

    </View>
  )
}

export default Welcome