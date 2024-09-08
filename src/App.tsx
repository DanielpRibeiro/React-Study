import { useState } from 'react'
import './App.css'
import './components/input/primary-input.css'
import PrimaryInput from './components/input/PrimaryInput'
import { Button } from '@chakra-ui/react'

function App() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")


  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>
          <PrimaryInput
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            name="firstName"
            label="Primeiro"
            placeholder='Digite seu nome' />

          <PrimaryInput
            value={secondName}
            onChange={event => setSecondName(event.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder='Sobrenome' />
        </div>

        <PrimaryInput
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
          label="Digite seu email"
          placeholder='Seu email' />
          <Button width="100%" marginTop="8px" colorScheme='green'>Enviar</Button>
      </form>
    </div>
  )
}

export default App
