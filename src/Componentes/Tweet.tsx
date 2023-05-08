import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'
import { Link } from 'react-router-dom'

interface TweetProps{
    content: string
} 

export function Tweet(props: TweetProps) {
    return (
        <Link to='/status' className='tweet'>
            <img src="https://github.com/MatheusFiigueiredo.png" alt="Matheus Figueiredo" />

            <div className='tweet-content'>
                <div className='tweet-content-header'>
                    <strong>Matheus Figueiredo</strong>
                    <span>@MatheusFiigueiredo</span>
                </div>

                <p>{props.content}</p>

                <div className='tweet-content-footer'>
                    <button type='button'>
                        <ChatCircle />
                        32
                    </button>
                    <button type='button'>
                        <ArrowClockwise />
                        32
                    </button>
                    <button type='button'>
                        <Heart />
                        32
                    </button>
                </div>
            </div>
        </Link>
    )
}
