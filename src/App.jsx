import { useState } from 'react'
import { categegories } from './utils'
import { selectedEmojis } from './utils'
import { MyForm } from './components/MyForm'
import { Board } from './components/Board'
import { InfoGame } from './components/InfoGame'

const initialState ={
  size: 0,
  categegory: '',
  remaining: null,
  score: 0,
  victory: false,
  running: false, 
}

function App() {

  const [gamesState, setGamesState] = useState(initialState)
  const [emojis, setEmojis] = useState([])

  //console.log(gamesState,emojis)
  return (
    <div className='container'>

      <div className="flex-col items-center max-w-[1200px] mx-auto">

     <div className='h1'>Memory Game</div>

     <MyForm setGamesState={setGamesState} setEmojis={setEmojis}/>
     {emojis.length > 0 && <Board emojis={emojis} setEmojis={setEmojis} gamesState={gamesState} setGamesState={setGamesState}/>}
    {gamesState.size && <InfoGame {...gamesState} />}
      </div>
     </div>
  )
}

export default App
