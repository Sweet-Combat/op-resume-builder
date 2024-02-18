import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import Resume1 from './components/Resume/Resume1.jsx'
import Resume2 from './components/Resume/Resume2.jsx'
import Resume3 from './components/Resume/Resume3.jsx'
import Builder from './components/Builder.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    }, 
    {
      path: '/resume1',
      element: <Resume1 />
    },
    {
      path: '/resume2',
      element: <Resume2 />
    },
    {
      path: '/resume3',
      element: <Resume3 />
    }, 
    {
      path: '/builder',
      element: <Builder />
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
