export default () => {

    const container = document.createElement('div');


    const template = `
    <div id="movieContainer">
    <h1>Filmes Favoritos</h1>
    </div>
    `;

    container.innerHTML = template;

    return container;
}