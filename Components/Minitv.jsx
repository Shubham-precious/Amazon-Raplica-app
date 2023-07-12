import React from 'react'
import { View , Image} from 'react-native'

export default function Minitv() {
  return (
    <View 
      style={{
        width:"100%",
        height:200,
        // position:"absolute",
        backgroundColor:"red",
        // marginTop:150
      }}
    
    >
        <Image source={require("../Imagesfolder/minitv.jpg")}
        
         style={{
            width:"100%",
            height:"100%"
         }}
        
        
        />
    </View>
  )
}
