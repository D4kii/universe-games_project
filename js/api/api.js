export const getAllGames = async() => {

    const url = `https://www.freetogame.com/api/games`
    const response = await fetch(url)
    const data = await response.json()

    return data
}