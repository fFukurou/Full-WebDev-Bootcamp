import './App.css'
import Counter from './Counter'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'
import ColorBox from './ColorBox'
import BoxList from './BoxList'

function App() {

  const colors= [
    'red',
    'green',
    'blue',
    'teal',
    'magenta',
    'orange'
  ]

  return (
    <>
    {/* <Counter/> */}
    {/* <Toggler/> */}
    {/* <ToggleCounter/> */}
    <BoxList colorsList={colors} boxNum={25}/>
    </>
  )
}

export default App
