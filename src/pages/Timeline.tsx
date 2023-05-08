import { Header } from "../Componentes/Header"
import { Separator } from "../Componentes/Separator"
import { Tweet } from "../Componentes/Tweet"

const tweets = [
    'Meu primeiro tweet',
    'Teste',
    "Deu certo meu tweet!"
]

import './Timeline.css'

export function Timeline (){
  return(
    <main className='timeline'>
          <Header title='Home' />

          <form className='new-tweet-form'>
            <label htmlFor='tweet'>
              <img src="https://github.com/MatheusFiigueiredo.png" alt="Matheus Figueiredo" />
              <textarea id='tweet' placeholder="What's happening?" />
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <Separator />

          {tweets.map(tweet => {
            return <Tweet content={tweet} />
          })}

        </main>
  )
}