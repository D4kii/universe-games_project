//PERSONAGENS
export const getAllCharacters = async () => {

    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}
//personagem pelo id do personagem
export const getCharacter = async (idCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/${idCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}
//personagem pelo nome
export const getCharacterByName = async (nameCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/?name=${nameCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}
//personagem pelo status
export const getCharacterByStatus = async (statusCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/?status=${statusCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}
//personagem pela especie
export const getCharacterBySpecies = async (speciesCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/?species=${speciesCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}
//personagem pelo genero
export const getCharacterByGender = async (genderCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/?species=${genderCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}


//PLANETAS
//Retorna todos os planetas
export const getPlanetas = async () => {

    const url = 'https://rickandmortyapi.com/api/location';

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}
//Retorna todos os planetas
export const getPlanetaById = async (idPlaneta) => {

    const url = `https://rickandmortyapi.com/api/location/${idPlaneta}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

//Retorna os residentes do planeta especificado
export const getPlanetsResidents = async (idPlanet) => {
    const planeta = await getPlanetas()
    const jsonPlaneta = []

    planeta.residents.forEach(async unidadeResidente => {

        const url = unidadeResidente
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        jsonPlaneta.push(data)
    });

    return jsonPlaneta;
    
}


//EPISÓDIOS
//Retorna todos os episodios
export const getEpisodes = async () => {

    const url = `https://rickandmortyapi.com/api/episode`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}
//Retorna todos o episodio pelo id
export const getEpisodeById = async (idEpisode) => {

    const url = `https://rickandmortyapi.com/api/episode/${idEpisode}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}
