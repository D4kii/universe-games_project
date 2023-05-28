//PERSONAGENS
export const getAllCharacters = async () => {

    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}


//PLANETAS
export const getPlanetas = async () => {

    const url = 'https://rickandmortyapi.com/api/location';

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

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
