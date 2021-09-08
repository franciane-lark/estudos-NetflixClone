const API_KEY = 'tt3896198&apikey=4ab221b7';
const API_BASE = 'http://www.omdbapi.com/3';

/*
- originais da netflix
- recomendados (treding)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/
const basicFetch = async endpoint => {
  const req = await fetch(`${API_BASE}$end{endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomelist: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },

      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },

      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },

      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=%{API_KEY}`)
      },

      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=%{API_KEY}`)
      },

      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=%{API_KEY}`)
      },

      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=%{API_KEY}`)
      },

      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=%{API_KEY}`)
      }
    ]
  }
}
