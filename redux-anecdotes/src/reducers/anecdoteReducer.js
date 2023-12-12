import { createSlice } from '@reduxjs/toolkit'

let anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: anecdotesAtStart,
  reducers: {
    createAnecdote(state, action) {
      const newAnecdote = {
        content: action.payload,
        id: getId(),
        votes: 0,
      }
      state.push(newAnecdote)
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
  },
})

export const { createAnecdote, upvoteAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
