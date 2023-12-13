import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

let anecdotesAtStart = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: anecdotesAtStart,
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    updateAnecdote(state, action) {
      const index = state.findIndex((v) => v.id === action.payload.id)
      if (index > -1) {
        state[index].votes = action.payload.votes
      }
    },
  },
})

export const { updateAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const upvoteAnecdote = (content) => {
  return async (dispatch) => {
    const changedAnecdote = {
      ...content,
      votes: content.votes + 1,
    }
    const updatedServerAnecdote = await anecdoteService.update(changedAnecdote)
    dispatch(updateAnecdote(updatedServerAnecdote))
  }
}
export default anecdoteSlice.reducer
