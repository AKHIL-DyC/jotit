import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'; // To display a loading screen while fonts load

export default function Todo() {
  const [quote,setquote]=useState('>_<');
  const[author,setauthor]=useState('~')
      useEffect(()=>{
        const quotefetcher=async()=>{
          const res=await fetch('https://zenquotes.io/api/quotes/');
          const pres=await res.json();
          setquote(pres[0].q);
          setauthor(pres[0].a);
        }
       quotefetcher();
       const interval = setInterval(quotefetcher, 30000);

       // Clean up interval to prevent memory leaks
       return () => clearInterval(interval);
       
      },[])
  


  const { width, height } = Dimensions.get('window');
  const [fontsLoaded] = useFonts({
    'Nothing': require('../../assets/fonts/nothing.ttf'), // Adjust the path if necessary
  });

  if (!fontsLoaded) {
    return <AppLoading />; // Shows a loading screen until the font is ready
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fefae0', alignItems: 'center' }}>
      <Text style={{ color: "black", fontFamily: 'Nothing', fontSize: 34,marginBottom:20,marginTop:30 }}>Todo</Text>
      <View style={{flex:0.3,backgroundColor:'#606c38',borderRadius:10,width:width*0.7,justifyContent:'center',alignContent:'center',alignItems:'center',margin:'30',padding:'30'}}>
          <Text style={{color:'white'}}>{quote}</Text>
          <Text style={{color:'white'}}>{`~ ${author}`}</Text>
      </View>
    </View>
  );
}
