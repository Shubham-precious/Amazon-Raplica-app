import { View, Text } from 'react-native'
import { SafeAreaView, ScrollView ,Button} from 'react-native'
import React from 'react'
import Header from './Components/Header'
import Address from './Components/Address'
import Flatlist from './Components/Flatlist'
import Minitv from './Components/Minitv'
import Optionlist from './Components/Optionlist'
import Offer from './Components/Offer'
import Primeday from './Components/Primeday'
import Products from './Components/Products'

const App1 = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:"#2DBFF8",}}> 
    <ScrollView> 
   
    
    
    <Header/>
     <Address/>
     <Flatlist/>
     <Minitv/>
     <Optionlist/>
     <Offer/>
    <Primeday/>

    {/* <Products/> */}
   
   <Button
   
    title='Product'

    onPress={()=>{
        //  navigation.navigate('products')
        navigation.openDrawer()
    }}
   
   
   
   />
     
</ScrollView> 
  

</SafeAreaView> 
  )
}

export default App1