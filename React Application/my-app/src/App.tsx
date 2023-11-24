import { FormulaProvider } from './context/FormulaContext'
import { RootLayout } from './layout/RootLayout'
import { DriverDetailScreen, DriversScreen, FlashCardScreen, HomeScreen, NotFound, RacesScreen, TeamDetailScreen, TeamsScreen } from './screens'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout /> }>
      <Route index element={<HomeScreen />} />
      <Route path='/drivers' element={<DriversScreen />} />
         <Route path='/drivers/:id' element={<DriverDetailScreen />} />
      <Route path='/teams' element={<TeamsScreen />} />
        <Route path='/teams/:id' element={<TeamDetailScreen />} />
      <Route path='/races' element={<RacesScreen />} />
      <Route path='/flashcard' element={<FlashCardScreen />} />
      <Route path='*' element={<NotFound />} />
      <Route /> 
    </Route>
  )
)

function App() {

  return <FormulaProvider><RouterProvider router={router} /></FormulaProvider>
}

export default App
