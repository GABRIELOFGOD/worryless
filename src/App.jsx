import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'services',
          element: <Services />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
