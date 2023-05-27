import { FormEvent, useState } from 'react'
import { Header } from '../Componentes/Header'
import { Separator } from '../Componentes/Separator'
import { Tweet } from '../Componentes/Tweet'
import './Status.css'

export function Status (){  
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Meu primeiro tweet',
    'Teste',
    "Deu certo meu tweet!"
  ])

  function createNewAnswers(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }
  
    return(
        <main className='status'>
        <Header title='Tweet' />
        <Tweet content='
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nisi est eos quaerat sequi pariatur doloremque hic repudiandae
            necessitatibus,eum excepturi culpa voluptate tempora porro 
            recusandae placeatinventore atque temporibus quasi.' />

        <Separator />

        <form onSubmit={createNewAnswers} className='answer-tweet-form'>
          <label htmlFor='tweet'>
            <img src="https://github.com/MatheusFiigueiredo.png" alt="Matheus Figueiredo" />
            <textarea id='tweet' 
            placeholder="Tweet you answer" 
            value={newAnswers}
            onChange={(event) => {
              setNewAnswers(event.target.value)
            }}
            />
          </label>

            <button type='submit'>Answer</button>
        </form>


        {answers.map(answer => {
          return <Tweet content={answer} />
        })}

      </main>
    )
}