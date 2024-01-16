
import './App.css'
import AllPLayers from './components/AllPlayers'
// import NewPlayersForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <NavBar />
        {/* <NewPlayersForm /> */}
        <Routes>
          <Route path='/' element={<AllPLayers />} />
          <Route path='/players/:playerId' element={<SinglePlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
