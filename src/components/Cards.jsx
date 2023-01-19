import React from "react";
import style from '../css/Content.module.css'

const Cards = ({value}) => {
    const image = "https://image.tmdb.org/t/p/w300" + value.poster_path;
    return(        
        <li className={style.Content}>
            <img 
            width={230}
            height={345}
            src={image} alt={value.title} className={style.MovieImage}/>
            <div>{value.title}</div>
        </li>
    );
}

export default Cards;