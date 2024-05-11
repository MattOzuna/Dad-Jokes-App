import "../JokeList.css";
import NewJoke from "./NewJoke";
import { useEffect, useState } from "react";
import getJokes from "./helpers";

const NewJokeList = () => {
  const [Jokes, setJokes] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJokes = async () => {
      const newJokes = await getJokes();
      setLoading(false);
      setJokes((Jokes) => [...newJokes]);
    };
    if (Loading) fetchJokes(Loading);
  }, [Loading]);

  const generateNewJokes = () => {
    setLoading(true);
  };

  const vote = (id, delta) => {
    setJokes(
      Jokes.map((j) =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      ).sort((a, b) => b.votes - a.votes)
    );
  };

  if (Loading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {Jokes.map((j) => (
        <NewJoke
          text={j.joke}
          key={j.id}
          id={j.id}
          votes={j.votes}
          vote={vote}
        />
      ))}
    </div>
  );
};

export default NewJokeList;
