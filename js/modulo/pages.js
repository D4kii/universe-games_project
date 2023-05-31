'use strict'

import { getAllCharacters, getlugares, getEpisodes, getCharacterByName, getEpisodeByName, getlugarByName } from "../api/api.js";


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
    const button = document.getElementById('card-location');

    const cardPlace = document.createElement('card-location');
    cardPlace.nome = location.name;
    cardPlace.tipo = location.type;
    cardPlace.dimensao = location.dimension;



    return cardPlace;

}

const criandoCardEpisodios = (episodio) => {
    const episode = episodio;

    console.log(episode);

    const cardPlace = document.createElement('card-episodes');
    cardPlace.nome = episode.name;
    cardPlace.dataLancamento = episode.air_date;
    cardPlace.episode = episode.episode;

    cardPlace.onclick = () => {
        console.log(2);
    }

    return cardPlace;

}

export const carregarCardPersonagens = () => {

    const personagensContainer = document.getElementById('container-personagens');
    const componentsCharacter = todosPersonagens.results.map(criandoCardPersonagens)
    buscarCharacter();

    personagensContainer.replaceChildren(...componentsCharacter)


}

export const carregarCardLugares = () => {

    const lugaresContainer = document.getElementById('container-lugares');
    const componentsLocation = todosLugares.results.map(criandoCardLugares)
    buscarLugar();

    lugaresContainer.replaceChildren(...componentsLocation)


}

export const carregarCardEpisodios = () => {

    const episodiosContainer = document.getElementById('container-episodios');
    const componentsEpisodes = todosEpisodes.results.map(criandoCardEpisodios);
    buscarEpisode();

    episodiosContainer.replaceChildren(...componentsEpisodes);


}

export const buscarCharacter = () => {
    const inputCharacter = document.getElementById('search-personagens');

    inputCharacter.addEventListener('keyup', async function (key) {
        var tecla = key.key || key.keyCode;
        console.log(tecla);

        if (tecla == 'Enter') {
            const valorInput = inputCharacter.value;
            if (valorInput !== undefined || valorInput !== '') {
                const personagensProcurados = await getCharacterByName(valorInput);

                const personagensContainer = document.getElementById('container-personagens');
                const componentsCharacter = personagensProcurados.results.map(criandoCardPersonagens);

                personagensContainer.replaceChildren(...componentsCharacter)

            } 

        }


    });


}

export const buscarEpisode = () => {
    const inputEpisode = document.getElementById('search-episodios');

    inputEpisode.addEventListener('keyup', async function (key) {
        var tecla = key.key || key.keyCode;
        console.log(tecla);

        if (tecla == 'Enter') {
            const valorInput = inputEpisode.value;
            if (valorInput !== undefined || valorInput !== '') {
                const episodiosProcurados = await getEpisodeByName(valorInput);

                const episodiosContainer = document.getElementById('container-episodios');
                const componentsEpisodes = episodiosProcurados.results.map(criandoCardEpisodios);
            
                episodiosContainer.replaceChildren(...componentsEpisodes);
            } 
        }
    });
}

export const buscarLugar = () => {
    const inputLocation = document.getElementById('search-lugares');

    inputLocation.addEventListener('keyup', async function (key) {
        var tecla = key.key || key.keyCode;
        console.log(tecla);

        if (tecla == 'Enter') {
            const valorInput = inputLocation.value;
            if (valorInput !== undefined || valorInput !== '') {
                const lugaresProcurados = await getlugarByName(valorInput);

                const lugaresContainer = document.getElementById('container-lugares');
                const componentsLocation = lugaresProcurados.results.map(criandoCardLugares);
            
                lugaresContainer.replaceChildren(...componentsLocation)
            } 
        }
    });
}














