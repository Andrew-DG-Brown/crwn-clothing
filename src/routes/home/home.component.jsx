import CategoryList from "../../components/category-list/category-list.component";

import { useState } from "react";

const pokemonData = [
  {
    name: "bolbasore",
    id: 1,
    imgUrl: "www.url.com",
    height: "5ft",
    bio: "He is a crazy and wild guy. This is a description",
  },
  {
    name: "charzard",
    id: 2,
    imgUrl: "www.url2.com",
    height: "7ft",
    bio: "He is a crazy guy who is also cool. This is a bio for this Pokemon",
  },
  {
    name: "yaryar",
    id: 3,
    imgUrl: "www.url3.com",
    height: "2ft",
    bio: "He is a yeet guy who is also cool. This is a bio for this Pokemon",
  },
];

//Next selector: one greater or less than current id
//dropdown selector: filter to match name selected

const Pokemon = () => {
  const [activePokemon, setActivePokemon] = useState(pokemonData[0]);

  const { name, imgUrl, bio, height, id } = activePokemon;

  const nextPokemon = () => {
    if (activePokemon.id !== pokemonData.length) {
      const next = pokemonData.filter((poke) => {
        return poke.id === activePokemon.id + 1;
      })[0];

      setActivePokemon(next);
    }
  };

  const previousPokemon = () => {
    if (activePokemon.id !== 1) {
      const prev = pokemonData.filter((poke) => {
        return poke.id === activePokemon.id - 1;
      })[0];

      setActivePokemon(prev);
    }
  };

  const selectPokemonHandler = (e) => {
    const selectedPokemon = pokemonData.filter((poke) => {
      return poke.name === e.target.value;
    })[0];
    setActivePokemon(selectedPokemon);
  };

  return (
    <div key={"pokemon"}>
      <select onChange={selectPokemonHandler}>
        {pokemonData.map((poke) => {
          return <option value={poke.name}>{poke.name}</option>;
        })}
      </select>
      <p>{name}</p>
      <p>{id}</p>
      <p>{imgUrl}</p>
      <p>{bio}</p>
      <p>{height}</p>
      <button onClick={previousPokemon}>Previous Pokemon</button>
      <button onClick={nextPokemon}>Next Pokemon</button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <CategoryList />
    </div>
  );
};

export default Home;
