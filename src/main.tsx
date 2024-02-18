import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from "@app/Router";

import { StyledEngineProvider } from '@mui/joy/styles';

import { Provider } from 'react-redux'
import { appStore } from '@app/Store'

import hubController from "@app/SignalR/HubController";

hubController.start()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router}/>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
)
