// import { StrictMode } from 'react'
import './assets/all.scss'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css' //已在all.scss引入
// import './assets/all.scss'
import App from './App.jsx'
import router from './router/index.jsx'

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    //   <App/>
    // </StrictMode>,
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>,
)
