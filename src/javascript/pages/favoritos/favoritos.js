export default () => {
    const container = document.createElement('div')

    const template = `
    <h1> Filmes Favoritos </h1>
    `

    container.innerHTML = template;

    return container;
}