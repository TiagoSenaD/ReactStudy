// routes.js
import { createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Formulario from './pages/Formulario.jsx'
import ErroPage from "./pages/ErrorPage.jsx"
import Layouts from "./layouts/RouteLayouts.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <ErroPage />,
    children: [ 
      { path: '/', element: <Home />},
      { path: '/formulario', element: <Formulario /> },
    ]
  },
])



export default router;
