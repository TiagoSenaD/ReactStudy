// routes.js
import { createBrowserRouter } from 'react-router-dom'
import Home from "./pages/home.jsx"
import Contact from './pages/Contact.jsx'
import ErroPage from "./pages/ErrorPage.jsx"
import Layouts from "./layouts/RouteLayouts.jsx"

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

export default router;
