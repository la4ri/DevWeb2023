import filmes from "./pages/filmes/filmes.js";
import favoritos from "./pages/favoritos/favoritos.js";

const main = document.getElementById('root');

const init = async () => {
    window.addEventListener("hashchange", async () => {
        switch (window.location.hash) {
            case "":
            case "#":
                main.innerHTML = "";
                const componente = await filmes();
                main.appendChild(componente);
                break;
            case "#favoritos":
                main.innerHTML = "";
                const componenteFavoritos = favoritos();
                main.appendChild(componenteFavoritos);
                break;
            default:
                main.innerHTML = "";
                const componente2 = await filmes();
                main.appendChild(componente2);
        }
    });
};


window.addEventListener("load", () => {
    init();
});
