import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/joy/styles';
import App from './App'

import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@app/Store'

export const mainAppStore = makeStore() as AppStore;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={mainAppStore}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
)
