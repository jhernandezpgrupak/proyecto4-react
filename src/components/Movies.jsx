import React from "react";
import Cards from './Cards';
import Data from '../db/Data';
import style from '../css/Content.module.css';

const Movies = () => {
    return(
        <ul className={style.MovieGrid}>
            {
                Data.map((value) => 
                    <Cards key={value.id} value={value}></Cards>
                )
                /*list.forEach(element => 
                <li>{element.title}</li>
                )*/            
            }
        </ul>  
    );
}

export default Movies;