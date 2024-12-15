import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs screenOptions={{headerTintColor: '#fff'
      ,tabBarActiveTintColor: '#ffd33d',headerShadowVisible:false,tabBarStyle:{backgroundColor:'#dda15e'}}}>
<Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tasks" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name='spendings'options={{headerShown:false}}></Tabs.Screen>
    </Tabs>
  )
}

export default _layout