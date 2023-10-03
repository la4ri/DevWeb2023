export const filmesLista = async () => {
    const apiKey = '4d77eb09bb22184e8534294983e86dcd';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (response.status === 200) {
            const data = await response.json();
            return data.results;
        } else {
            throw new Error('Erro na solicitação.');
        }
    } catch (error) {
        throw error;
    }
};
