import './App.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";

//rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/home.jsx"
import Contact from './pages/Contact.jsx'
import ErroPage from "./pages/ErrorPage.jsx"
// import MyRouter from './Router.jsx';


//layouts
import Layouts from "./layouts/RouteLayouts.jsx"

//prime
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'

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


function App() {
  return (
    <>
      <PrimeReactProvider>
        <RouterProvider router={router} />
        {/* <MyRouter /> */}
      </PrimeReactProvider>
    </>
  )
}

export default App
