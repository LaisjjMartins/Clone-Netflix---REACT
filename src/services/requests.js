import { api } from './services';
const API_KEY = "712fa7fccecac11e368913ab7238b12c";

const GetFilmsService = async () => {
    return (
        [
        {
            title: 'Originais Netflix',
            items: await api.get(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            title: 'Recomendados para você',
            items: await api.get(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            title: 'Em Alta',
            items: await api.get(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            title: 'Comédia',
            items: await api.get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            title: 'Romance',
            items: await api.get(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            title: 'Ação',
            items: await api.get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            title: 'Terror',
            items: await api.get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            title: 'Documentario',
            items: await api.get(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        }

    ]
     
    )
}

const getMovieInfo = async (movieId, type) => {
    let info = {}

    if(movieId) {
        switch(type){
            case 'movie':
                info = await api.get(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            break;
            case 'tv':
                info = await api.get(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            break;
            default: 
            info = null;
            break;
            }
    }
    return info;
}

export default {
    GetFilmsService,
    getMovieInfo,
}

/* REQUISIÇÃO POR PEQUISIÇÃO

const Originals = () => {
    return api.get(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
};
const Trending = () => {
    return api.get(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
};
const Toprated = () => {
    return api.get(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
};
const Comedy = () => {
    return api.get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
};
const Romance = () => {
    return api.get(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
};
const Action = () => {
    return api.get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
};
const Horror = () => {
    return api.get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
};
const Documentary = () => {
    return api.get(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
};



export default {
    Action,
    Comedy,
    Documentary,
    Horror,
    Originals,
    Toprated,
    Trending,
    Romance
};

______________________________________________________

useEffect(()=>{
    Get();
  },[])
    
   async function Get(){ //Tem que entrar lá e depois importar
    filmsService.Originals().then(res => {
          console.log('response', res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }


*/