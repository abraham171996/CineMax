import React from 'react'
import batman from '../../assets/images/batman.png'
import knight from '../../assets/images/knight.png'
import styles from '../HomeBanner/banner.module.scss'
const HomeWatching = () => {
  return (
    <div className={styles.HomeWatching}>
        <div className={styles.watchingTitle}>
        <h2>Continue Watching</h2>
        </div>
        <figure>
            <img src={batman} alt="" />
            <img src={knight} alt="" />
        </figure>
    </div>
  )
}

export default HomeWatching