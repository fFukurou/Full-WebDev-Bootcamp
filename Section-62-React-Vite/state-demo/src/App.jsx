// import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import EmojiClicker from './EmojiClicker'
import ScoreKeeper from './ScoreKeeper'
import ScoreKeeper2 from './ScoreKeeper2'

function App() {

  return (
    <>
      {/* <Dumbo/> */}
      {/* <ScoreKeeper/> */}
      {/* <EmojiClicker/> */}
      <ScoreKeeper2 numPlayers={5} target={5}/>
    </>
  )
}

export default App
