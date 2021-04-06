import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'

import { hot } from 'react-hot-loader'

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
  <BrowserRouter>
     
        <MainRouter/>
      
  </BrowserRouter>
)}

export default hot(module)(App)