import { filmesLista } from "../../api.js";

const filmes = async () => {
    const container = document.createElement('div');
    const template = `
    <div id="movieContainer"></div>
    `;

    container.innerHTML = template;

    try {
        //armazena os dados no localStorage
        let filmesPopulares = JSON.parse(localStorage.getItem('filmesPopulares'));

        if (!filmesPopulares) {
            filmesPopulares = await filmesLista();
            localStorage.setItem('filmesPopulares', JSON.stringify(filmesPopulares));
        }

        //pega a div que vai ser renderizado os cards
        const movieContainer = container.querySelector('#movieContainer');


        // 'para cada' filme ele realiza as ações
        filmesPopulares.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie-card');

            const image = document.createElement('img');
            image.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

            const title = document.createElement('h2');
            title.textContent = movie.title;

            const overview = document.createElement('p');
            overview.textContent = movie.overview;

            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(overview);

            movieContainer.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }

    return container;
};

export default filmes;
