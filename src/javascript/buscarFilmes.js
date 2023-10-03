// Em buscarFilmes.js
export default async function searchFilmes() {
    const query = document.getElementById('pesquisa').value;
    const apiKey = '4d77eb09bb22184e8534294983e86dcd';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    let resultadoArray = [];

    // Verifique se já existe um contêiner #movieContainer
    let movieContainer = document.querySelector('#movieContainer');

    if (!movieContainer) {
        movieContainer = document.createElement('div');
        movieContainer.id = 'movieContainer';
        document.body.appendChild(movieContainer);
    } else {
        // Limpe o contêiner existente antes de renderizar os novos resultados
        movieContainer.innerHTML = '';
    }

    try {
        const response = await fetch(apiUrl);
        if (response.status === 200) {
            const data = await response.json();
            resultadoArray = data.results;

            // Renderize os novos resultados
            resultadoArray.forEach(movie => {
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
        } else {
            throw new Error('Erro na solicitação.');
        }
    } catch (error) {
        throw error;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('pesquisar');
    botao.addEventListener("click", searchFilmes);
});
