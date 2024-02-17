import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Resume from './components/Resume/index.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    }, 
    {
      path: '/resume',
      element: <Resume />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
