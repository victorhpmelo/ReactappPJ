import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css' 

import {Home} from './Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
