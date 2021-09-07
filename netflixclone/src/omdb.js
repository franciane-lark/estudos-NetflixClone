const API_KEY = 'tt3896198&apikey=4ab221b7'
const API_BASE = 'http://www.omdbapi.com/3'

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
const basicFetch = async (endpoint) => {
  const req  = await fetch();
}


export default {
  getHomelist: async () => {
    return[
        {
          slug: 'originals',
          title: 'Originais do Netflix',
          items: []
        },

        {
          slug: 'trending',
          title: 'Recomendados para você',
          items: []
        },

        {
          slug: 'toprated',
          title: 'Em alta',
          items: []
        },

        {
          slug: 'toprated',
          title: 'Em alta',
          items: []
        },

        {
          slug: 'action',
          title: 'Ação',
          items: []
        },

        {
          slug: 'comedy',
          title: 'Comédia',
          items: []
        },

        {
          slug: 'horror',
          title: 'Terror',
          items: []
        },

        {
          slug: 'romance',
          title: 'Romance',
          items: []
        },

        {
          slug: 'documentary',
          title: 'Documentários',
          items: []
        },
    ];
  }
}
