import './App.css'
import  { Status }  from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Greet } from './components/Greet'

function App(){

  return (
    <div className='App'>
      <Status status='error'></Status>
      <Heading>Placehorder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name='Albert' messageCount={10} isLoggedIn={false} />
    </div>
  )
}

export default App