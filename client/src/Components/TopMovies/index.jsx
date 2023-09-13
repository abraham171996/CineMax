import React from 'react'
import Shawshank from '../../assets/images/Image (1).png'
import Godfather from '../../assets/images/Image (2).png'
import arkam from '../../assets/images/Image (3).png'
import styles from '../HomeBanner/banner.module.scss'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
let TopMoviesData = [
    {
        image:Shawshank,
        age:"PG-13",
        name:"The Shawshank Redemption (1994)",
        category:"Drama",
        Imdb:"9.2"
    },
    {
        image:Godfather,
        age:"PG-13",
        name:"The Godfather",
        category:"Crime • Drama",
        Imdb:"9.2"
    },
    {
        image:arkam,
        age:"PG-13",
        name:"The Dark Knight (2008)",
        category:"Action • Crime",
        Imdb:"9"
    },
]
const TopMovies = () => {
  return (
    <div className={styles.TopMovies}>
        <h2>Top Movies</h2>
        <ul>
            {
                TopMoviesData.map((movie,i)=>(
                    <li key={i}>
                        <figure>
                            <img src={movie.image} alt="" />
                        </figure>
                        <div className={styles.content}>
                        <h6>{movie.age}</h6>
                        <h4>{movie.name}</h4>
                        <p>{movie.category}</p>
                        <div className={styles.Imdb}>
                            <AiFillStar style={{color:"yellow"}}/>
                            <span>{movie.Imdb}</span>
                            
                        </div>
                        </div>
                    </li>
                ))
            }
        </ul>
        <Link>See All</Link>
    </div>
  )
}

export default TopMovies