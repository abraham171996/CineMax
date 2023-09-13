import React, { useState } from 'react'
import styles from '../HomeBanner/banner.module.scss'
import Input from '../../Atoms/Input/Input'
let GenresData = [
    {
        gener:"Action"
    },
    {
        gener:"Fantasy"
    },
    {
        gener:"Comedy"
    },
    {
        gener:"Sci-Fi"
    },
    {
        gener:"Drama"
    },
    {
        gener:"Romance"
    },
    {
        gener:"Mystery"
    },
    {
        gener:"Horror"
    },
    
]
const Genres = () => {
    const [query,setQuery] = useState('')

    const filteredGenres = GenresData.filter(genre => {
        return genre.gener.toLowerCase().includes(query.toLowerCase())
    })
  return (
    <div className={styles.Genres}>
        <h2>Favorites Genres</h2>
        <Input type="text" value={query} placeholder="Search..." name="search" onChange={(e) => setQuery(e.target.value)}/>
        <ul>
        {filteredGenres.map((genre, index) => (
                    <li key={index}>{genre.gener}</li>
                ))}
        </ul>
    </div>
  )
}

export default Genres