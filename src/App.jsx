
import './App.css'
import AllPLayers from './components/AllPlayers'
import NewPlayersForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
// import NavBar from './components/NavBar'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [listRefresh, setListRefresh] = useState(true);

  const setRefresh =(status) =>{
    setListRefresh(status)
  }
  
  return (
    <>
    <div>
      <BrowserRouter>
      <h1 className='title'>Puppy Bowl!</h1>
        {/* <NavBar /> */}
        <NewPlayersForm setRefresh ={setRefresh}/>
        <Routes>
          <Route path='/' element={<AllPLayers setRefresh ={setRefresh} listRefresh ={listRefresh}/>} />
          <Route path='/players/:playerId' element={<SinglePlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
