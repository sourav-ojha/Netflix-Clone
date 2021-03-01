const API_KEY = "336c6e8b29c66c70c3be9171da830d87";

const requests = {
    fetchtrending: `/trending/all/day?api_key=${API_KEY}&language=en-us`,
    //            `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}`,
    // with_networks=213
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMOvies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;