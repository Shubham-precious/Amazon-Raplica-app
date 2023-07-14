import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import App1 from './App1'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Components/Cart';
import Products from './Components/Products';



const Draw =()=>{
  const Drawer = createDrawerNavigator();

  return(

     <Drawer.Navigator 
     
     screenOptions={{
      headerShown:false,
     }}
     
     
     
     >
  <Drawer.Screen name="Home" component={App1} />
  <Drawer.Screen name="products" component={Products} />
   <Drawer.Screen name="cart" component={Cart} />

</Drawer.Navigator>
  )
 
}





const Mainapp = () => {
  const Stack=createNativeStackNavigator();

  return (
    <NavigationContainer>
     

        


     <Stack.Navigator initialRouteName='Home'
     
         screenOptions={{
          headerShown:false,
         }}
     
     > 
         
         <Stack.Screen name="Draw" component={Draw}/>
         <Stack.Screen name="products" component={Products} />
         <Stack.Screen name="cart" component={Cart}/>
         
     </Stack.Navigator>




    </NavigationContainer>
  );
};

export default Mainapp;






