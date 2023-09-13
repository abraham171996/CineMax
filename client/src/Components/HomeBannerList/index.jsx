import React from 'react'
import styles from '../HomeBanner/banner.module.scss'
import disney from '../../assets/images/disney.png';
import marvel from '../../assets/images/marvel.png';
import national from '../../assets/images/national-geographic.png';
import starWars from '../../assets/images/star-wars.png';

let bannerData = [
    {
        image:disney
    },
    {
        image:national
    },
    {
        image:starWars
    },
    {
        image:marvel
    }
]
const HomeBannerList = () => {
  return (
    <div className={styles.HomeBannerList}> 
        <ul className={styles.bannerLists}>
            {
                bannerData.map((data,index)=>(
                    <li className={styles.bannerList} key={index}><img src={data.image} alt="" /></li>
                ))
            }
        </ul>
    </div>
  )
}

export default HomeBannerList