import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "antd/dist/reset.css"
import { ConfigProvider } from 'antd'
import { BrowserRouter, Routes } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ConfigProvider theme={{
      token : {
        colorPrimary : "#fb5200",
        // colorBgBase : "#100029",
        colorText : '#c4c4c4',
        colorBorder : "green",
        colorText : "violet",
        colorTextDisabled: "red",
        colorTextPlaceholder : "skyblue"
        
      }
    }}> */}
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    {/* </ConfigProvider> */}
  </React.StrictMode>,
)
