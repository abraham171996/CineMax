import React from 'react'
import HomeBannerList from '../HomeBannerList'
import BannerCard from '../BannerCard'
import HomeWatching from '../Watching'
import TopMovies from '../TopMovies'
import styles from './banner.module.scss'
import Genres from '../Genres'
import SideBar from '../SideBar'
const HomeBanner = () => {
  return (
    <section id='homeBanner'>
        <div className="continer">
       <div className={styles.bannerSide}>
        <div>
          <SideBar height="100%"/>
        </div>
       <div className={styles.bannerMain}>
       <BannerCard/>
        <HomeBannerList/>
        <HomeWatching/>
       </div>
        <div className={styles.bannerAside}>
        <TopMovies/>
        <Genres/>
        </div>
       </div>
        </div>
    </section>
  )
}

export default HomeBanner   