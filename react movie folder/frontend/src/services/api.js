const API_KEY = "d281e906f37b5f28943a05ea2120cef0";
// this is the base endpoint or the base URL for this API
const BASE_URL = "https://api.themoviedb.org/3";

// so if we want to send a request  we send a request to this URL and slash and then whatever the operation is that we want like slash search ,slash popular 
// POPULAR MOVIE
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

//    FETCH IS FUNCTION YOU CAN USE TO SEND A NETWORK REQUEST

    if (!response.ok) {
        throw new Error(`TMDB request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error(`TMDB request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
};