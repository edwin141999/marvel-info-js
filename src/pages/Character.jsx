import { useLocation } from "react-router-dom";

export default function Character() {
  let character = useLocation();

  return (
    <>
      <p>{character.state.name}</p>
      <p>{character.state.description}</p>
      <img
        src={
          character.state.thumbnail.path +
          "." +
          character.state.thumbnail.extension
        }
        alt={character.state.name}
        style={{ width: "100px" }}
      />
    </>
  );
}
