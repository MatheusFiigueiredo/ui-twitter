import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../Componentes/Header"
import { Separator } from "../Componentes/Separator"
import { Tweet } from "../Componentes/Tweet"
import './Timeline.css'

export const Timeline = () => {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    "Deu certo meu tweet!"
  ])
  
  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  const handleHotKeySubmit = (event: KeyboardEvent) =>{
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return(
    <main className='timeline'>
          <Header title='Home' />

          <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor='tweet'>
              <img src="https://github.com/MatheusFiigueiredo.png" alt="Matheus Figueiredo" />
              <textarea 
              id='tweet' 
              placeholder="What's happening?" 
              value={newTweet}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
                setNewTweet(event.target.value)
              }}
              />
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