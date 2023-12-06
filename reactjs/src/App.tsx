import CaseClient from "@casejs/case-client";
import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";

function App() {
  interface Pokemon {
    id: number;
    name: string;
    type: string;
    image: string;
  }

  const [pokemons, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const cs = new CaseClient();
    cs.from("pokemon")
      .find<Pokemon>()
      .then((res) => {
        setPokemon(res);
      });
  }, []);

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title is-1">ReactJS Starter for CASE</h1>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <p>This is a starter project for ReactJS.</p>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>Image</th>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemons.map((pokemon) => (
                <tr>
                  <td>
                    <img src={pokemon.image} alt="{pokemon.name} image" />
                  </td>
                  <td>{pokemon.id}</td>
                  <td>{pokemon.name}</td>
                  <td>{pokemon.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
