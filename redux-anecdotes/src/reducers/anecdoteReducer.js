import { createSlice } from '@reduxjs/toolkit'

let anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: anecdotesAtStart,
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    upvoteAnecdote(state, action) {
      const id = action.payload
      const anecdoteToUpvote = state.find((anecdote) => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToUpvote,
        votes: anecdoteToUpvote.votes + 1,
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote,
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { createAnecdote, upvoteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
