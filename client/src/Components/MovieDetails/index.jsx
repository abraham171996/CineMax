import React from 'react'
import SideBar from '../SideBar'
import DetailsCenter from '../DetailsCenter'
import Recommendation from '../Recommendation'

const MovieDetails = () => {
  return (
    <section id='movieDetails'>
        <SideBar/>
        <DetailsCenter/>
        <Recommendation/>
    </section>
  )
}

export default MovieDetails