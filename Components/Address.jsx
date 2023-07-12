import React from 'react'
import { View,Text ,Image} from 'react-native'

export default function Address() {
  return (
    <View 
      style={{
        backgroundColor:"lightblue",
        width:"100%",
        height:50,
        // justifyContent:"center",
        paddingLeft:20,
        alignItems:"center",
        flexDirection:"row",
        gap:15
      }}
    
    
    
    
    >

<Image source={require("../Imagesfolder/locateicon.png")}
         style={{height:30,width:25,marginTop:2}}
      />



   <Text 
    
    style={{fontSize:16,fontWeight:"bold"}}
   
   
   >
    Deliver To User - Indore 4552001
   </Text>






    </View>
  )
}
