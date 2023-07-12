import React from 'react'
import { StyleSheet, View ,Image} from 'react-native'

export default function Primeday() {
  return (
    <View style={{
      width:"100%",
      height:500,
      backgroundColor:"white",
      flexDirection:"row",
      flexWrap:"wrap",
      padding: 25,
      gap:25,
      justifyContent:"space-evenly"

    }}>


      <View style={styles.innerview}>
          <Image source={require ("../Imagesfolder/primeoffer.jpg")}
            style={{
                width:"100%",
                height:"100%"
            }}
          
          
          />
      </View>


      <View style={styles.innerview}>
          <Image source={require ("../Imagesfolder/mouse.jpg")}
            style={{
                width:"100%",
                height:"100%"
            }}
          
          
          />
      </View>

      <View style={styles.innerview}>
          <Image source={require ("../Imagesfolder/headphone.jpg")}
            style={{
                width:"100%",
                height:"100%"
            }}
          
          
          />
      </View>


      <View style={styles.innerview}>
          <Image source={require ("../Imagesfolder/keyboard.jpg")}
            style={{
                width:"100%",
                height:"100%"
            }}
          
          
          />
      </View>






    </View>
  )
}



const styles = StyleSheet.create({
    
        innerview:{
            width:"40%",
            height:180,
            backgroundColor:"aqua"
        }
    
})
