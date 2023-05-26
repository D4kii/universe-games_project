'use strict'

import './routes.js'

import { getPlanetas, getAllCharacters, getPlanetsResidents } from './api/api.js'

const a = await getAllCharacters();
const b = await getPlanetas();
const c = await getPlanetsResidents();

console.log(c);

export const plataforma = async (params) => {
    const id = document.getElementById('home')

    const json = {}
    json.jogos = a;

    if (params == '/home'  ) {
        console.log(await b.residents);
    }
    else if (params == '/') {
        console.log(2);
    }
}