import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'

import Mainapp from './Mainapp'
import store from './Components/store/Store'



const App = () => {
  return (
    <Provider store={store}>
      <Mainapp/>
    </Provider>
  )
}

export default App