'use strict'

import { getAllGames } from '../api/api.js'

const allGames = await getAllGames();

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = allGames.title;
        this.image = null;
        this.descricao = '#ff0000'
        this.button = 'Read More'
    }
    static get observedAttributes(){
        return['nome', 'foto', 'cor', 'turma']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){

        this[nameAttr] = newValue;
    }

    connectedCallback(){
        this.shadow.appendChild(this.component());
        this.shadow.appendChild(this.styles())
    }

    styles(){
        const css = document.createElement('style');
        css.textContent = `
        .card {
            width: 190px;
            height: 254px;
            border-radius: 1em;
            padding: 1.9rem;
            background: #f5f5f5;
            position: relative;
            display: flex;
            align-items: flex-end;
            transition: 0.4s ease-out;
            box-shadow: 0px 7px 20px rgba(43, 8, 37, 0.2);
           }
           
           .card:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(238, 116, 116, 0.4);
            z-index: 2;
            transition: 0.5s;
           }
           
           .card-info {
            position: relative;
            z-index: 3;
            color: #f5f5f5;
            opacity: 0;
            transform: translateY(20%);
            transition: 0.5s;
           }
           
           /*Text*/
           .text-title {
            font-size: 1.5rem;
            font-weight: 500;
           }
           
           .text-body {
            letter-spacing: 1px;
            font-size: 0.9rem;
            margin: 5px 0 15px 0;
           }
           
           /*Button*/
           .card-button {
            padding: 0.6rem;
            outline: none;
            border: none;
            border-radius: 4px;
            background: #ee9ca7;
            color: white;
            font-weight: bold;
            transition: 0.4s ease;
           }
           
           /*Image*/
           .card-img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: #ee9ca7;
            background: linear-gradient(to bottom, #e7aeae, #ee9ca7);
           }
           
           /*Hover*/
           .card:hover {
            transform: translateY(5%);
           }
           
           .card:hover:before {
            opacity: 1;
           }
           
           .card:hover .card-info {
            opacity: 1;
            transform: translateY(0);
           }
           
           .card-button:hover {
            background: rgba(218, 77, 77, 0.4);
            color: #f5f5f5;
           }
          
        
        `
        return css;
    }

    component(){
        const card = document.createElement('div');
        card.classList.add('card');

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');
        cardInfo.textContent = this.nome;

        const momeCard = document.createElement('p');
        momeCard.classList.add('text-title');
        momeCard.textContent = this.turma;

        const descricaoCard = document.createElement('p');
        descricaoCard.classList.add('text-body');
        descricaoCard.textContent = this.turma;

        const button = document.createElement('button');
        button.classList.add('card-button');
        button.textContent = this.turma;

        card.append(nomeAluno, imagem, turma)

        return card;
    }

/* <div class="card">
        <div class="card-img"></div>
        <div class="card-info">
            <p class="text-title">Card title</p>
            <p class="text-body">Lorem Ipsum dolor sit amet</p>
            <button class="card-button">Read More</button>
        </div>
    </div> */


}

customElements.define('card-dan', card)