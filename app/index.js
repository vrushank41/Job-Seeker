import {View,Text,ScrollView,SafeAreaView} from 'react-native'
import {useState} from 'react'
import {useRouter, Stack} from 'expo-router'

import {images, icons, COLORS, FONT, SIZES, SHADOWS} from "../constants/index.js"

import {Welcome,Nearbyjobs,Popularjobs,ScreenHeaderBtn} from "../components"

function Home() {
    const router = useRouter()
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>{
                    return (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    )
                },
                headerRight:()=>{
                    return (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                    )
                },
                headerTitle:props => (
                    <Text style={{ fontFamily: FONT.bold,fontSize: SIZES.xxLarge,}}>
                      JOB-HUNT
                    </Text>),
                headerTitleAlign: 'center'
            }}/>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
                <View style={{flex:1,padding:SIZES.medium}}>
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home