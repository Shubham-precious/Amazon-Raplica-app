import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView ,View,TextInput,Image,TouchableOpacity} from 'react-native'

export default function Header() {
  const navigation=useNavigation();
  return (
    <SafeAreaView>
      <View 
        style={{
          width:"100%",
          height:80,
          padding:20,
          flexDirection:"row",
          gap:5
        }}
      >
 
 <TouchableOpacity 
 
  onPress={()=>{navigation.openDrawer()}}
 
 
 >

<Image source={require("../Imagesfolder/menu.png")}
         style={{height:30,width:25,marginTop:10,marginLeft:-12}}
      />

 </TouchableOpacity>




<View

 style={{
     width:"90%",
     height:50,
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:"space-evenly"

 }}

>

       <Image source={require("../Imagesfolder/searchicon.png")}
         style={{height:30,width:22,marginTop:10}}
      />

        <TextInput
        
           placeholder='Search On Amazon'
        
          style={{
               height:50,
               width:"50%",
              border:"none",
              fontSize:15
           }}
        
        />
        
        <Image source={require("../Imagesfolder/cameraicon.png")}
         style={{height:30,width:25,marginTop:10}}
      />
        
</View>


<Image source={require("../Imagesfolder/micicon.png")}
         style={{height:30,width:25,marginTop:10}}
      />

      </View>
    </SafeAreaView>
  )
}
