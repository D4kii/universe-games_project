'use strict'

import { plataforma } from './app.js'

const routes = {
    '/home': '/pages/home.html',
    '/personagens': '/pages/personagens.html',
    '/planetas': '/pages/planetas.html',
    '/episodios': '/pages/episodios.html'
}
const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    
    const path = window.location.pathname;
    plataforma(path)
    
    const response = await fetch(routes[path]);
    const html = await response.text();
    
    document.getElementById('root').innerHTML = html
   
}


window.route = route