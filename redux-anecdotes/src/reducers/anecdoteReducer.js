const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const getId = () => (100000 * Math.random()).toFixed(0)

const initialState = anecdotesAtStart.map((anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'UP_VOTE':
      const id = action.data.id
      const anecdoteToUpvote = state.find((anecdote) => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToUpvote,
        votes: anecdoteToUpvote.votes + 1,
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote,
      )
    default:
      return state
  }
}

// Action Creators, see https://fullstackopen.com/en/part6/flux_architecture_and_redux#action-creators
// and https://read.reduxbook.com/markdown/part1/04-action-creators.html
export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      votes: 0,
      id: getId(),
    },
  }
}

export const upvoteAnecdote = (id) => {
  return {
    type: 'UP_VOTE',
    data: { id },
  }
}

export default reducer
