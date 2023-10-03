import filmes from "./pages/filmes/filmes.js";
import favoritos from "./pages/favoritos/favoritos.js";


const main = document.getElementById('root');

const init = async () => {

    main.innerHTML = "";
    const componente = await filmes();
    main.appendChild(componente);
    console.log('ta no filmes');

    window.addEventListener("hashchange", async () => {
        switch (window.location.hash) {
            case "":
            case "#":
                main.innerHTML = "";
                const componente = await filmes();
                main.appendChild(componente);
                document.getElementById('pesquisa').value = '';
                break;
            case "#favoritos":
                main.innerHTML = "";
                const componenteFavoritos = favoritos();
                main.appendChild(componenteFavoritos);
                console.log('ta no favoritos');
                document.getElementById('pesquisa').value = '';
                break;
            default:
                main.innerHTML = "";
                const componente2 = await filmes();
                main.appendChild(componente2);
                console.log('ta no procura filmes');
                document.getElementById('pesquisa').value = '';
        }
    });
};

window.addEventListener("load", () => {
    init();
});
