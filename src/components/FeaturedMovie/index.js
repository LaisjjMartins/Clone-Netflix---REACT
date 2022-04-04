import React from 'react';
import "./styles.css";

export function FeaturedMovie({ item }) {

    return (
        <section className='featured' style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured-final'>
                <div className='featured-canto'>
                    <div className='featured-name'>{item.original_name}</div>
                    <div className='featured-info'>
                        <div className='featured-points'>{item.vote_average} pontos</div>
                        <div className='featured-year'>{new Date(item.first_air_date).getFullYear()}</div>
                        <div className='featured-seasons'>{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured-description'>{item.overview}</div>
                    <div className='featured-buttons'>
                        <a className='featured-watch' href={`/watch/${item.id}`}>⊳ Assistir</a>
                        <a className='featured-list' href={`/list/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                     <div className='featured-genres'><strong>Gêneros:</strong> {item.genres.map(generos => {
                         return generos.name + (' ')
                                 
                     })}</div>
                    
                </div>
            </div>
        </section>
    )
}