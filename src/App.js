import React, { useEffect, useState } from 'react';
import FilmsService from './services/requests';

import { MoviesRow } from './components/MoviesRow';
import {Header} from "./components/Header"
import { FeaturedMovie } from './components/FeaturedMovie';

import "./App.css"



export default function App() {
  const [movies, setMovies] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader]=useState(false);
  useEffect(() => {
    Get();
  }, [])

  function Get() { //Tem que entrar lá e depois importar
    FilmsService.GetFilmsService().then(res => {
      setMovies(res);
      
      //Pegando um filme aleatorio de dentro do originais Netflix (res[0])
      let randomChosen = Math.floor(Math.random() * (res[0].items.data.results.length -1));
      let chosen = res[0].items.data.results[randomChosen];
      console.log("Numero sortido", randomChosen)
      console.log("Dados do filme escolhido", chosen) //se colocar o String, ele concatena e aparece [Objeto objeto]

      //Pegando os dados especificos desse filme, que ficara em destaque
      FilmsService.getMovieInfo(chosen.id, 'tv').then(res => {
        setFeaturedData(res.data);
       }).catch(err => {
        console.log(err);
      });

    }).catch(err => {
        console.log(err);
      });
  }


  //monitoramento do black, que tem que aparecer dependendo do scroll.
  useEffect(() =>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[])

  console.log("Informações do filme pelo id", featuredData)
  return (
    <div className='page'>

      <Header black={blackHeader}/>


      {featuredData &&
      <FeaturedMovie  item={featuredData}  /> 
      }

      <section className='lists'>
        {movies.map((item, key) => {
          return (
            <MoviesRow key={key} title={item.title} items={item.items} />
          );
        }

        )}
      </section>
      <footer>
      Feito com <span role='img' aria-label='coração'>❤️</span>pela Laís <br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org
      </footer>

    </div>

  )
}


