import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/joy/styles';
import App from './App'

import { Provider } from 'react-redux'
import { appStore } from '@app/Store'

import hubController from "@app/SignalR/HubController";

hubController.start()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
)
