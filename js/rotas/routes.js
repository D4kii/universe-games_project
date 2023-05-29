'use strict'

import { carregarCardPersonagens, carregarCardLugares } from "../main/pages.js"

const routes = {
    '/home': '/pages/home.html',
    '/personagens': '/pages/personagens.html',
    '/lugares': '/pages/lugares.html',
    '/episodios': '/pages/episodios.html'
}
const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    
    const path = window.location.pathname;
    console.log(path);
    
    const response = await fetch(routes[path]);
    const html = await response.text();
    
    document.getElementById('root').innerHTML = html

    if (path == '/personagens') {
        carregarCardPersonagens();
    } else if(path == '/lugares'){
        carregarCardLugares();
    }
   
}


window.route = route