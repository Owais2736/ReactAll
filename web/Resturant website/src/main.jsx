import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './components/pages/Menu/Menu.jsx';
import About from './components/pages/About/About.jsx';
import Contact from './components/pages/Contact/Contact.jsx';
import Gallery from './components/pages/Gallery/Gallery.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/About',
    element: <About />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/Gallery',
    element: <Gallery/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
