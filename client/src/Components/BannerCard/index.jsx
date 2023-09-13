import React from 'react'
import BannerImage from '../../assets/images/homeBanner.png'
import styles from '../HomeBanner/banner.module.scss'
import Button from '../../Atoms/Button/Button'
import {FaPlay} from 'react-icons/fa'
const BannerCard= () => {
  return (
    <div className={styles.BannerCard}>
        <figure>
            <img src={BannerImage} alt="" />
            <div className={styles.Banner_Content}>
                <p>Series</p>
                <h1>MS. Marvel</h1>
                <span>1 Season • 6 Episodes • Superhero • Marvel</span>
                <div className={styles.Banner_Content__bottom}>
                        <div className={styles.bannerBtn}>
                        <Button>Watch Thriller</Button>
                        <FaPlay/>
                        </div>
                        <div className={styles.addList}>
                         <p>Watch Thriller</p>
                        </div>
                </div>
            </div>
        </figure>
    </div>
  )
}

export default BannerCard