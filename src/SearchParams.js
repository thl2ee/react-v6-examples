import { useState, useEffect } from "react";
import Pet from "./Pet";
// eslint-disable-next-line import/namespace
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "dog", "rabbit", "cat", "hourse"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  // const locationTuple = useState("Bangkok, Thailand");
  // const location = locationTuple[0];
  // const setLocation = locationTuple[1];
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);


  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => alert("hi", 3000));
  // }, [animal]);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  }


  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            onCutCapture={(e) =>
              (e.target.value) ? console.log(e.target.value) : null
            }
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="Animal"
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value=""></option>
            {
              ANIMALS.map((animal) => (
                <option id={animal} value={animal} key={animal}>
                  {animal}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            placeholder="Breed"
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option value=""></option>
            {
              breeds.map((breed) => (
                <option id={breed} value={breed} key={breed}>
                  {breed}
                </option>
              ))
            }
          </select>
        </label>
        <button>Submit!</button>
      </form>
      {
        pets.map(pet => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          ></Pet>
        ))
      }
    </div>
  )
}

export default SearchParams;