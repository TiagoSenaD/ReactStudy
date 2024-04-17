import './App.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";

//rotas
import {RouterProvider} from 'react-router-dom'
import router from './Router'

//prime
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'


function App() {
  return (
    <>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </>
  )
}

export default App
