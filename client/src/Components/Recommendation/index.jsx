import React, { useEffect, useState } from 'react'
import { client,urlFor } from '../../Service/sanity'
import styles from '../MovieDetails/movieDetails.module.scss'
import { AiFillStar } from 'react-icons/ai'
import Button from '../../Atoms/Button/Button'
const Recommendation = () => {
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        client.fetch("*[ _type =='recommendation' ]")
        .then((res)=>{
            setMovies(res)
        })
    },[])
  return (
    <div className={styles.Recommendation}>
            <div className={styles.Recommendation_title}>
                <h2>Recommendatiion</h2>
            </div>
            <div className={styles.Recommendation_cards}>
                    {
                        movies.map((movie,index)=>(
                            <div key={`Movie_details${index}`} className={styles.Recommendation_cards__card}>
                                    <figure>
                                        <img src={urlFor(movie.image)} alt="" />
                                    </figure>
                                    <h4>{movie.title}</h4>
                                    <div className={styles.bottom}>
                                        <div className={styles.rating}>
                                        <AiFillStar style={{color:"yellow"}}/>
                                        <p>{movie.imdb}</p>
                                        </div>
                                        <div className={styles.recoGener}>
                                        <span>|{movie.gener}</span>
                                        </div>
                                    </div>
                            </div>
                        ))
                    }
            </div>
            <Button>See All</Button>
    </div>
  )
}

export default Recommendation