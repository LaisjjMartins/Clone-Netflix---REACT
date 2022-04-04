import React, { useState } from 'react';
import "./styles.css";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
export function MoviesRow({ title, items }) {
    const [scrollX, setScrollX] = useState(-400);
    const handleLeft = () => {
        //vai usar negativo para empurrar a lista para esquerda
        let x = scrollX + Math.round(window.innerWidth / 2); //pegar a tela do cara para ver o quanto ele vai voltar
        if (x > 0) { //quando ele chegar no 0, ele para
            x = 0;
        }
        setScrollX(x);
    }
    const handleRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2); //pegar a tela do cara para ver o quanto ele vai ir
        let listW = items.data.results.length * 150;

        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)
    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow-left' onClick={handleLeft}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className='movieRow-right' onClick={handleRight}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className='movieRow-listArea'>
                <div className='movieRow-list' style={{
                    marginLeft: scrollX,
                    width: items.data.results.length * 150,
                }}>

                    {items.data.results.map(resultados => {  //Tem que olhar o caminho e seguir diretinho, entrei em items na outra tela, e ai fiz o caminho de dentro dele 
                        return (
                            <div className='movieRow-item'>
                                <img src={`https://image.tmdb.org/t/p/w300${resultados.poster_path}`} alt={resultados.original_name}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}