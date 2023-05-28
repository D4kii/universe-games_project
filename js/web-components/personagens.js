'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = get.title;
        this.image = null;
        this.descricao = null
    }
    static get observedAttributes(){
        return['nome', 'foto', 'descricao']
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
            width: 100%;
            max-width: 300px;
            height: 70px;
            background: #353535;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: left;
            backdrop-filter: blur(10px);
            transition: 0.5s ease-in-out;
        }
        
        .card:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
        
        .foto-personagem {
            width: 50px;
            height: 50px;
            margin-left: 10px;
            border-radius: 10px;
            background: linear-gradient(#d7cfcf, #9198e5);
        }
        
        
        .textBox {
            width: calc(100% - 90px);
            margin-left: 10px;
            color: white;
            font-family: 'Poppins' sans-serif;
        }
        
        .textContent {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .span {
            font-size: 10px;
        }
        
        .nome-personagem {
            font-size: 16px;
            font-weight: bold;
        }
        
        .especie-personagem {
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
        characterImage.textContent = this.image;

        const textBox = document.createElement('div');
        textBox.classList.add('textBox');

        const textContent = document.createElement('div');
        textContent.classList.add('textContent');

        const nomePersonagem = document.createElement('p');
        nomePersonagem.classList.add('nome-personagem');
        nomePersonagem.textContent = this.nome;

        const descricaoPersonagem = document.createElement('p');
        descricaoPersonagem.classList.add('especie-personagem');
        descricaoPersonagem.textContent = this.turma;

        textContent.append(nomePersonagem);
        textBox.append(textContent, descricaoPersonagem);
        card.append(characterImage, textBox);

        return card;
    }

/* 
        <div class="card">
            <img src="https://rickandmortyapi.com/api/character/avatar/253.jpeg" class="img" alt="">
            <div class="textBox">
                <div class="textContent">
                    <p class="nome-personagem">Clans of Clash</p>
                </div>
                <p class="especie-personagem">Xhattmahs is not attacking your base!</p>
                
            </div>
        </div>


*/


}

customElements.define('cards', card)