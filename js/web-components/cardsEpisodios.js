'use strict'

class cardEpisodios extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = null;
        this.dataLancamento = null;
        this.episode = null;
        this.button = 'Ver Residentes';
    }
    static get observedAttributes() {
        return ['nome', 'dataLancamento', 'episode', 'button']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {

        this[nameAttr] = newValue;
    }

    connectedCallback() {
        this.shadow.appendChild(this.component());
        this.shadow.appendChild(this.styles())
    }

    styles() {
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
            height: 120px;
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
        
        .card-title {
            font-size: 16px;
            font-weight: bold;
            margin: 0;
        }
        
        .card-lancamento,
        .card-episode {
            font-size: 12px;
            font-weight: lighter;
        }


        `
        return css;
    }

    component() {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = document.createElement('div');
        cardContent.classList.add('text-box');

        const titleCard = document.createElement('div');
        titleCard.classList.add('text-content');

        const cardTitle = document.createElement('p');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = this.nome;

        const cardLancamento = document.createElement('p');
        cardLancamento.classList.add('card-lancamento');
        cardLancamento.textContent = this.dataLancamento;

        const cardEpisode = document.createElement('p');
        cardEpisode.classList.add('card-episode');
        cardEpisode.textContent = this.episode;


        titleCard.append(cardTitle)
        cardContent.append(titleCard, cardLancamento, cardEpisode);
        card.append(cardContent);

        return card;
    }

    /* REFERÊNCIA
         <div class="card">
           
            <div class="text-box">
                <div class="textContent">
                    <p class="card-title">Rick</p>
                </div>
                <p class="especie-personagem">Human</p>
                <p class="especie-personagem">Human</p>
                <p class="especie-personagem">Human</p>
                <p class="especie-personagem">Human</p>
                
            </div>
        </div>
    
    







       //ANTIGO CSS 
        .card {
            position: relative;
            align-items: center;
            justify-content: center;
            width: 320px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            padding: 32px;
            overflow: hidden;
            border-radius: 10px;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .card-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            color: #e8e8e8;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .card-content .card-title {
            font-weight: 700;
            font-size: 32px;
          }
          
          .card-content .card-lancamento, .card-dimension  {
            line-height: 1.5;
          }
          
          .card-content .card-button {
            color: #e8e8e8;
            text-decoration: none;
            padding: 10px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            background: linear-gradient(-45deg, #000 0%, #45B348 100% );
            border-radius: 5px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          }
          
          .card::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(-45deg, #000 0%, #45B348 100% );
            z-index: -1;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .card:hover::before {
            height: 100%;
          }
          
          .card:hover {
            box-shadow: none;
          }
          
          .card:hover .card-button {
            color: #212121;
            background: #e8e8e8;
          }
          
          .card-content .card-button:hover {
            outline: 2px solid #e8e8e8;
            background: transparent;
            color: #e8e8e8;
          }
          
          .card-content .card-button:active {
            box-shadow: none;
          }
        
    */


}

customElements.define('card-episodes', cardEpisodios);