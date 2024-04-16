import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/home.jsx"
import Contact from './pages/Contact.jsx'
import ErroPage from "./pages/ErrorPage.jsx"


const MyRouter = () => {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Layouts />,
        errorElement: <ErroPage />,
        children: [ 
          { path: '/', element: <Home />},
          { path: '/contact', element: <Contact /> },
        ]
      },
    ])
  return router
}

export default MyRouter