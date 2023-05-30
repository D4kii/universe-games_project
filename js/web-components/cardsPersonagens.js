'use strict'

class cardCharacter extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = null;
        this.image = null;
        this.status = null;
        this.gender = null;
        this.location = null;
        this.descricao = null;
    }
    static get observedAttributes(){
        return['nome', 'image', 'status', 'descricao', 'location', 'gender']
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
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
        .card {
            /* width: 100%; */
            width: 350px;
            height: 150px;
            background: linear-gradient(-45deg, #353535 0%, #45B348 100% );
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: left;
            backdrop-filter: blur(10px);
            transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .card:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
        
        .foto-personagem {
            width: 120px;
            height: 100%;
            border-end-start-radius: 10px;
            border-top-left-radius: 10px;
            background: linear-gradient(#d7cfcf, #9198e5);
        }
        
        
        .text-box {
            width: calc(100% - 90px);
            margin-left: 15px;
            color: white;
            font-family: 'Poppins' sans-serif;
            gap: 3px;
        }
        
        .text-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .nome-personagem {
            font-size: 16px;
            font-weight: bold;
            margin: 0;
        }
        
        .especie-personagem,
        .location-personagem,
        .status-personagem,
        .gender-personagem {
            font-size: 12px;
            font-weight: lighter;
        }
        
        `
        return css;
    }

    component(){
        const card = document.createElement('div');
        card.classList.add('card');

        const characterImage = document.createElement('img');
        characterImage.classList.add('foto-personagem');
        characterImage.src = this.image;

        const textBox = document.createElement('div');
        textBox.classList.add('text-box');

        const textContent = document.createElement('div');
        textContent.classList.add('text-content');

        const nomePersonagem = document.createElement('p');
        nomePersonagem.classList.add('nome-personagem');
        nomePersonagem.textContent = this.nome;

        const locationPersonagem = document.createElement('p');
        locationPersonagem.classList.add('location-personagem');
        locationPersonagem.textContent =`Location: ${this.location}`;

        const descricaoPersonagem = document.createElement('p');
        descricaoPersonagem.classList.add('especie-personagem');
        descricaoPersonagem.textContent = `Species: ${this.descricao}` ;

        const statusPersonagem = document.createElement('p');
        statusPersonagem.classList.add('status-personagem');
        statusPersonagem.textContent = `Status: ${this.status}`;

        const genderPersonagem = document.createElement('p');
        genderPersonagem.classList.add('gender-personagem');
        genderPersonagem.textContent = `Gender: ${ this.gender}`;

        textContent.append(nomePersonagem);
        textBox.append(textContent, descricaoPersonagem, statusPersonagem, locationPersonagem, genderPersonagem);
        card.append(characterImage, textBox);

        return card;
    }

/* 
         <div class="card">
            <img src="https://rickandmortyapi.com/api/character/avatar/253.jpeg" class="foto-personagem" alt="">
            <div class="text-box">
                <div class="textContent">
                    <p class="nome-personagem">Rick</p>
                </div>
                <p class="especie-personagem">Human</p>
                
            </div>
        </div>


*/


}

customElements.define('card-character', cardCharacter);