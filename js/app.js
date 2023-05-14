'use strict'

import './routes.js'

import { getAllGames } from './api/api.js'

const a = await getAllGames();

export const plataforma = async (params) => {
    const id = document.getElementById('home')

    const json = {}
    json.jogos = a;

    if (params == '/home'  ) {
        console.log(await a.thumbnail);
    }
    else if (params == '/') {
        console.log(2);
    }
}