'use strict'

class cardLugares extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = 'null';
        this.tipo = 'null';
        this.dimensao = 'null';
        this.button = 'Ver Residentes';
    }
    static get observedAttributes() {
        return ['nome', 'tipo', 'dimensao', 'button']
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
            position: relative;
            align-items: center;
            justify-content: center;
            width: 280px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            padding: 32px;
            overflow: hidden;
            border-radius: 10px;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
            height: 250px;
          }
          
          .card-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            color: #e8e8e8;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
            height: 150px;
            justify-content: space-between;
          }
          
          .card-content .card-title {
            color: #BDFFA1;
            font-weight: 700;
            font-size: 20px;
          }
          
          .card-content .card-tipo, .card-dimension  {
            line-height: 1.5;
          }
          
          .card-content .card-button {
            color: #e8e8e8;
            text-decoration: none;
            padding: 10px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            background: linear-gradient(-45deg, #353535 0%, #45B348 100% );
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
            background: linear-gradient(-45deg, #353535 0%, #45B348 100% );
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
            background-color: transparent;
            color: #212121;
            background: #e8e8e8;
          }
          


        
        `
        return css;
    }

    component() {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const cardTitle = document.createElement('p');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = this.nome;

        const cardType = document.createElement('p');
        cardType.classList.add('card-tipo');
        cardType.textContent = `Type: ${this.tipo}`;

        const cardDimension = document.createElement('p');
        cardDimension.classList.add('card-dimension');
        cardDimension.textContent = `Dimension: ${this.dimensao}`;


        cardContent.append(cardTitle, cardType, cardDimension);
        card.append(cardContent);

        return card;
    }

    /* REFERÊNCIA

        <div class="card">
            <div class="card-content">
                <p class="card-title">Card Hover Effect
                </p>
                <p class="card-tipo">
                    Lorem ipsum dolor sit amet, consectetur 
                </p>
                <p class="card-dimension">
                    Lorem ipsum dolor sit amet, consectetur 
                </p>
                <button class="card-button">Read more</button>
            </div>
        </div>
    
    
    */


}

customElements.define('card-location', cardLugares);