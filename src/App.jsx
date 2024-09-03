import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  const URL_MARVEL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${
    import.meta.env.VITE_API_KEY
  }`;

  const [characters, setCharacters] = useState([]);

  const fetchMarvel = () => {
    fetch(URL_MARVEL)
      .then((response) => response.json())
      .then((data) => setCharacters(data.data.results));
  };

  useEffect(() => {
    fetchMarvel();
  }, []);

  return (
    <>
      {characters.map((character) => (
        <Link
          key={character.id}
          to={`character/${character.id}`}
          state={character}
        >
          <>
            <p>{character.name}</p>
            <p>{character.description}</p>
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt={character.name}
              style={{ width: "100px" }}
            />
          </>
        </Link>
      ))}
    </>
  );
}
