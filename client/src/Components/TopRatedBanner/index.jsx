import React from 'react'
import SideBar from '../SideBar'
import TopRatedSilder from '../Swiper/TopRatedSilder'
import styles from './toprated.module.scss'
import ActionSlider from '../Swiper/ActionSilder'
const TopRatedBanner = () => {
  return (
    <section className={styles.TopRatedBanner} id='topRated' style={{ display: "flex" }}>

      <SideBar/>
     <div className={styles.TopRatedRight}>
     <TopRatedSilder />
     <div className={styles.ActionTitle}>
     <h2>Best of Action</h2>
     </div>
     <ActionSlider/>
     <ActionSlider/>
     </div>
      
    </section>
  )
}

export default TopRatedBanner