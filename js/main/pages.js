'use strict'

import { getAllCharacters, getlugares, getEpisodes } from "../api/api.js";


export const todosPersonagens = await getAllCharacters();
export const todosLugares = await getlugares();
export const todosEpisodes = await getEpisodes();


const criandoCardPersonagens = (personagem) => {
    const character = personagem;

    const cardPlace = document.createElement('card-character');
    cardPlace.nome = character.name;
    cardPlace.image = character.image;
    cardPlace.descricao = character.species;
    cardPlace.gender = character.gender;
    cardPlace.status = character.status;
    cardPlace.location = character.location.name;

    console.log(cardPlace);


    cardPlace.onclick = () => {
        
    }

    return cardPlace;

}

const criandoCardLugares = (lugar) => {
    const location = lugar;

    const cardPlace = document.createElement('card-location');
    cardPlace.nome = location.name;
    cardPlace.tipo = location.type;
    cardPlace.dimensao = location.dimension;

    cardPlace.onclick = () => {
        console.log(2);
    }

    return cardPlace;

}

const criandoCardEpisodios = (episodio) => {
    const episode = episodio;

    const cardPlace = document.createElement('card-episodes');
    cardPlace.nome = episode.nome;
    cardPlace.dataLancamento = episode.dataLancamento;
    cardPlace.episode = episode.episode;

    cardPlace.onclick = () => {
        console.log(2);
    }

    return cardPlace;

}

export const carregarCardPersonagens = () => {
    
    const personagensContainer = document.getElementById('container-personagens');

    const componentsCharacter = todosPersonagens.results.map(criandoCardPersonagens)

    personagensContainer.replaceChildren(...componentsCharacter)


}

export const carregarCardLugares = () => {
    
    const lugaresContainer = document.getElementById('container-lugares');

    const componentsLocation = todosLugares.results.map(criandoCardLugares)

    lugaresContainer.replaceChildren(...componentsLocation)


}

export const carregarCardEpisodios = () => {
    
    const episodiosContainer = document.getElementById('container-episodios');

    const componentsEpisodes = todosEpisodes.results.map(criandoCardEpisodios);

    episodiosContainer.replaceChildren(...componentsEpisodes);


}
















