import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { mystore } from './Components/store/Store'
import Mainapp from './Mainapp'



const App = () => {
  return (
    <Provider store={mystore}>
      <Mainapp/>
    </Provider>
  )
}

export default App