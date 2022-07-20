import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonsList } from './components/PersonsList'
import  { Status }  from './components/Status'

function App(){

  const personName = {
    first:'Albert',
    last:'Tomo'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className='App'>
      <Greet name="Albert" messageCount={20} isLoggedIn={false} />
      <Person name={personName}/>
      <PersonsList names={nameList}/>
      <Status status='error'></Status>
    </div>
  )
}

export default App