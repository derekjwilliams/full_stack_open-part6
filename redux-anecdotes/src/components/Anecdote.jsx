const Anecdote = ({ anecdote, handleUpvote }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleUpvote}>up vote</button>
      </div>
    </div>
  )
}

export default Anecdote
