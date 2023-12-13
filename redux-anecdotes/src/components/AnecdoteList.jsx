import { useDispatch, useSelector } from 'react-redux'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'
//import {upvoteExistingAnecdote} from '../reducers/anecdoteReducer'
import {
  displayNotification,
  hideNotification,
  setNotification,
} from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector((state) => {
    if (state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter((a) => {
      return a.content.includes(state.filter)
    })
  })

  return (
    <div>
      {anecdotes
        .toSorted((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleUpvote={() => {
              dispatch(upvoteAnecdote(anecdote))
              dispatch(setNotification(`upvoted ${anecdote.content}`, 5))
            }}
          />
        ))}
    </div>
  )
}

export default AnecdoteList
