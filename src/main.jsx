import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import PlantPage from './pages/PlantPage.jsx'
import PlantDetails from './components/PlantDetails.jsx'

//ruteo a paginas internas
const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: `/species-list`,
        element: <PlantPage />
      },
      {
        path: '/species/details/:id',
        element: <PlantDetails/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
