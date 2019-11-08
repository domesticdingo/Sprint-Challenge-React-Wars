import React from "react";
import styled from "styled-components";

const CardMaker = props => {
    const Character = styled.div`
    padding: 20px;
    border: 2px solid black;
    background-color: grey;
    margin: auto;
    height: auto;
    margin-bottom: 10px;
    `;
    return (
        <Character>
            <h2>{props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}cm</p>
            <p>Mass: {props.mass}kg</p>
            <p>Hair color: {props.hair}</p>
        </Character>
    )
}

export default CardMaker