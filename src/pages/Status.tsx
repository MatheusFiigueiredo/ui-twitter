import { Header } from '../Componentes/Header'
import { Separator } from '../Componentes/Separator'
import { Tweet } from '../Componentes/Tweet'
import './Status.css'

const answer = [
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso!',
]

export function Status (){   
    return(
        <main className='status'>
        <Header title='Tweet' />
        <Tweet content='
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nisi est eos quaerat sequi pariatur doloremque hic repudiandae
            necessitatibus,eum excepturi culpa voluptate tempora porro 
            recusandae placeatinventore atque temporibus quasi.' />

        <Separator />

        <form className='answer-tweet-form'>
          <label htmlFor='tweet'>
            <img src="https://github.com/MatheusFiigueiredo.png" alt="Matheus Figueiredo" />
            <textarea id='tweet' placeholder="Tweet you answer" />
          </label>

            <button type='submit'>Answer</button>
        </form>


        {answer.map(answer => {
          return <Tweet content={answer} />
        })}

      </main>
    )
}