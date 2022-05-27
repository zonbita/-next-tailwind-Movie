export const server = 'https://api.themoviedb.org/3/movie';

const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'de25c591b25108709df7c9febbd9cf2b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;