import { RootLayout } from './layout/RootLayout'
import { DriversScreen, F1ClashScreen, HomeScreen, RacesScreen, TeamsScreen } from './screens'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout /> }>
      <Route index element={<HomeScreen />} />
      <Route path='/drivers' element={<DriversScreen />} />
      <Route path='/teams' element={<TeamsScreen />} />
      <Route path='/races' element={<RacesScreen />} />
      <Route path='/clash' element={<F1ClashScreen />} />
      <Route />
    </Route>
  )
)

function App() {

  return <RouterProvider router={router} />
}

export default App
