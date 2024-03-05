class MyButtonGroup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

    }

    setButtons1(buttonNames) {
        this.shadowRoot.innerHTML = '';

        buttonNames.forEach((buttonName) => {

            let style = document.createElement('style');


            style.textContent = `
            @font-face {
                font-family: 'Helvetica';
                src: local('Helvetica'), url('Fuentes/Helvetica.woff') format('woff');
            }
            
            * {
                font-family:'Helvetica'
            }
            
            .btnNav  {
                padding: 2vh;
                background:none;
                border: none;
                margin: auto;
                color: black;
                font-size: min(max(1rem, 4vw), 16px);
                font-weight: bold; 
              }
              
              .btnNav:hover {
                background: linear-gradient(left, #f857a6, #ff8c7f);
                background-color: transparent;
                color: #ff8c7f;
              }
             
              .btnNav::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background: #ff8c7f;
                transition: width .3s;
              }
              
              .btnNav:hover::after {
                width: 100%;
              }
              
              
              `;
            const button = document.createElement('button');

            switch (buttonName) {
                case 'Inicio':

                    button.addEventListener('click', () => {
                        window.location.href = '../../Inicio/index.html';
                    });

                    break;
                case 'Blog':

                    button.addEventListener('click', () => {
                        window.location.href = '../../Blog/principal/blog.html';
                    });

                    break;
                case 'Contacto':

                    button.addEventListener('click', () => {
                        window.location.href = '../../Contacto/contacto.html';
                    });

                    break;
                case 'Conocenos':

                    button.addEventListener('click', () => {
                        window.location.href = '../../Conocenos/conocenos.html';
                    });

                    break;
                case 'Catalogo':

                    button.addEventListener('click', () => {
                        window.location.href = '../../Catalogo/Principal/catalogo.html';
                    });

                    break;
            }

            button.className = "btnNav";
            button.textContent = buttonName;
            this.shadowRoot.appendChild(style);
            this.shadowRoot.appendChild(button);


        });

        $(document).ready(function () {
            $('button').click(function () {
                $(this).css('text-decoration', 'underline red');
            });
        });


    }

    /*para el footer*/
    setButtons2(buttonNames) {
        this.shadowRoot.innerHTML = '';

        buttonNames.forEach((nombre) => {

            let style = document.createElement('style');
            style.textContent = `
            .pie  {
              
                padding: 2vh;
                color: black;
                margin: auto;
                background:none;
                border: none;
                font-size: min(max(1rem, 4vw), 16px);
                font-weight: bold;
                 
            }
            
            .pie:hover {
                background: linear-gradient(left, #f857a6, #ff8c7f);
                background-color: transparent;
                color: #ff8c7f;
              }
             
              .pie::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background: #ff8c7f;
                transition: width .3s;
              }
              
              .pie:hover::after {
                width: 100%;
              }
            `;
            const button2 = document.createElement('button');

            switch (nombre) {
                case 'Politica de privacidad':

                    button2.addEventListener('click', () => {
                        window.location.href = 'privacidad.html';
                    });

                    break;
                case 'Condiciones de uso':

                    button2.addEventListener('click', () => {
                        window.location.href = 'condiciones.html';
                    });

                    break;
                case 'Politica de cookies':
                    button2.addEventListener('click', () => {
                        window.location.href = 'cookies.html';
                    });
                    break;

            }


            button2.className = "pie";
            button2.textContent = nombre;
            this.shadowRoot.appendChild(button2);
            this.shadowRoot.appendChild(style);
        });

    }
}

customElements.define('conjunto-botones', MyButtonGroup);

