import { useState, } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

function App() {
  const [playersearch, setPlayersearch] = useState()
  

  function searchPlayer (playerName) {
    axios.post('http://localhost:5000/post/playerSearch', { 
            "playerName": playerName
          })
          .then( response => {
            console.log('Server Response:', response.data)
          }).catch( error => {
            console.error(error)
          })
    setPlayersearch(playerName)
  }

  return (
   <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm sm:text-base'>
    <Header searchPlayer={searchPlayer}/>
    <Body playersearch={playersearch} searchPlayer={searchPlayer}/>
    {/* <Footer/> */}
   </main>
  )
}

export default App
