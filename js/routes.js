'use strict'

import { plataforma } from './app.js'

const routes = {
    '/home': '/pages/home.html',
    '/plataformas': '/pages/plataformas.html',
    '/azul': '/pages/azul.html',
    '/lilas': '/pages/lilas.html',
    '/marrom': '/pages/marrom.html'
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