import React, {useState,useEffect} from "react";
import axios from "axios";
import CardMaker from "./cardMaker";

const CharacterCard = () => {
    const [characters, setCharacters] = useState ([]);

    useEffect(() => {
        axios
            .get("https://lambda-swapi.herokuapp.com/api/people/")
            .then(response => {
                setCharacters(response.data.results)
                console.log(response.data)
            })
            .catch(error => {
                console.log("The data was not returned: " + error)
            })
    }, [])

    return (
        <div className="character">
            {characters.map(character => {
                return (
                    <CardMaker
                    key={character.id}
                    name={character.name}
                    gender={character.gender}
                    height={character.height}
                    mass={character.mass}
                    hair={character.hair_color}
                    />
                );
            })}
        </div>
    );
}

export default CharacterCard