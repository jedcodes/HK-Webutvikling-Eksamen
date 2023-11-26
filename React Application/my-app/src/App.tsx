import { Navbar } from './components'
import { DriverDetailScreen, DriversScreen, FlashCardScreen, HomeScreen, NotFound, RacesScreen, TeamDetailScreen, TeamsScreen } from './screens'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeScreen />}  />
          <Route path='/drivers' element={<DriversScreen />}  />
          <Route path='/drivers/:id' element={<DriverDetailScreen />} />
          
          <Route path='/races' element={<RacesScreen />}  />
          <Route path='/teams' element={<TeamsScreen />}  />
          <Route path='/teams/:id' element={<TeamDetailScreen />} />
          <Route path='/flashcard' element={<FlashCardScreen />} />
          <Route path='*' errorElement={<NotFound />} />
        </Routes>
      </Router>
  )
}

export default App
