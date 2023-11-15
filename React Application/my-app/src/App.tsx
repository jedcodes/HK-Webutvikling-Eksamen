import { RootLayout } from './layout/RootLayout'
import { DriversScreen, HomeScreen } from './screens'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout /> }>
      <Route index element={<HomeScreen />} />
      <Route path='/drivers' element={<DriversScreen />} />
      <Route />
      <Route />
    </Route>
  )
)

function App() {

  return <RouterProvider router={router} />
}

export default App
