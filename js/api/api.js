//PERSONAGENS
export const getAllCharacters = async () => {

    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url);
    const data = await response.json();

    return data;
}
//personagem pelo id do personagem
export const getCharacterById = async (idCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/${idCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    

    return data;
}
//personagem pelo nome
export const getCharacterByName = async (nameCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/?name=${nameCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    

    return data;
}
//personagem pelo status
export const getCharacterByStatus = async (statusCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/?status=${statusCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    

    return data;
}
//personagem pela especie
export const getCharacterBySpecies = async (speciesCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/?species=${speciesCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    

    return data;
}
//personagem pelo genero
export const getCharacterByGender = async (genderCharacter) => {

    const url = `https://rickandmortyapi.com/api/character/?gender=${genderCharacter}`;
    const response = await fetch(url);
    const data = await response.json();
    

    return data;
}


//LUGARES
//Retorna todos os lugares
export const getlugares = async () => {

    const url = 'https://rickandmortyapi.com/api/location';

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}
//Retorna todos os lugares
export const getlugarById = async (idPlaneta) => {

    const url = `https://rickandmortyapi.com/api/location/${idPlaneta}`;

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}
//
export const getlugarByName = async (namePlaneta) => {

    const url = `https://rickandmortyapi.com/api/location/?name=${namePlaneta}`;

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}

//Retorna os residentes do lugar especificado
export const getlugarResidents = async (idPlanet) => {
    const lugar = await getlugares()
    const jsonLugar = []

    lugar.residents.forEach(async unidadeResidente => {

        const url = unidadeResidente
        const response = await fetch(url);
        const data = await response.json();
        
        jsonLugar.push(data)
    });

    return jsonLugar;
    
}


//EPISÓDIOS
//Retorna todos os episodios
export const getEpisodes = async () => {

    const url = `https://rickandmortyapi.com/api/episode`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}
//Retorna todos o episodio pelo id
export const getEpisodeById = async (idEpisode) => {

    const url = `https://rickandmortyapi.com/api/episode/${idEpisode}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}
//Retorna todos o episodio pelo nome
export const getEpisodeByName = async (nameEpisode) => {

    const url = `https://rickandmortyapi.com/api/episode/?name=${nameEpisode}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}
//Retorna todos o episodio pelo code
export const getEpisodeByCode = async (codeEpisode) => {

    const url = `https://rickandmortyapi.com/api/episode/?episode=${codeEpisode}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}
