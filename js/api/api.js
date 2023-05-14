export const getAllGames = async () => {

    const url = 'https://mmo-games.p.rapidapi.com/games';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df2c502274msh20e593d2ade9054p137103jsna7028b28b74c',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const data = await response.text();


    return data;
}
export const getPlataformas = async () => {

    const url = 'https://mmo-games.p.rapidapi.com/games?platform=browser';
const options = {
	method: 'GET',
	headers: {
		platform: 'browser',
		'X-RapidAPI-Key': 'df2c502274msh20e593d2ade9054p137103jsna7028b28b74c',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

