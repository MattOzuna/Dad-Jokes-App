import "../Joke.css"

const NewJoke = ({ id, vote, votes, text }) => {
    return (
        <div className="Joke">
          <div className="Joke-votearea">
            <button onClick={evt => vote(id, +1)}>
              <i className="fas fa-thumbs-up" />
            </button>
  
            <button onClick={evt => vote(id, -1)}>
              <i className="fas fa-thumbs-down" />
            </button>
  
            {votes}
          </div>
  
          <div className="Joke-text">{text}</div>
        </div>
      );
}

export default NewJoke