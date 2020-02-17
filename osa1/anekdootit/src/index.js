import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
    
    const selectAnecdote = () => {
        const randomIndex = Math.floor(Math.random() * Math.floor(anecdotes.length))
        console.log(randomIndex)
        setSelected(selected-selected+randomIndex)
    }
    
    const voteAnecdote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }
    const maxValue = Math.max(...points)
    const mostLovedAnecdote = props.anecdotes[points.indexOf(maxValue)]
        return (
            <div>
                <h1>Anecdote of the day</h1>
                {props.anecdotes[selected]}
                <Votes votes ={points[selected]} />
                <Button text='next anecdote' onClick={selectAnecdote} />
                <Button text='vote' onClick={voteAnecdote} />
                <h1> Anecdote with most votes</h1>
                {mostLovedAnecdote}
            </div>
        )


}
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({onClick, text}) => {
    return (
            <button onClick={onClick}>
                {text}
            </button>
    )
}

const Votes = ({votes}) => {
    return (
        <div>
            has {votes} votes
        </div>
    )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)