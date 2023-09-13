import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../Swiper/swiper.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation , Autoplay} from 'swiper/modules';
import { AiFillStar } from 'react-icons/ai';
import gener from '../../../assets/svg/gener.svg'
import { client,urlFor } from '../../../Service/sanity';

const TopRatedSlider = () => {
  const [datas, setDatas] = useState([]);
  useEffect(()=>{
    client.fetch("*[ _type =='topRated' ]").then((res)=>{
      console.log(res);
      setDatas(res)
    })
  },[])
  return (
    <>
    
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      modules={[Autoplay,Navigation]}
      className="mySwiper"
    >
      {datas.map((dat, index) => (
        <SwiperSlide className={styles.TopRatedSlider} key={index}>
            <div className={styles.index}>
                <h4>{dat.count}</h4>
            </div>
            <figure className={styles.TopRatedSlider_figure}>
                    <img src={urlFor(dat.image)} alt="" />
            </figure>
          <div className={styles.TopRatedSlider_content}>
            <h6>{dat.age}</h6>
          <h4>{dat.title}</h4>
            <div className={styles.genres}>
                <img src={gener} alt="" />
           <p>{dat.gener}</p>
            </div>
          <div className={styles.Imdb}>
          <AiFillStar style={{color:"yellow"}}/>
          <h4>{dat.imdb}</h4>
          </div>
          </div>
        </SwiperSlide>
      ))}
      <div className={styles.ratedTitle}>
        <h2>Top Rated</h2>
    </div>
    </Swiper>
    </>
  );
};

export default TopRatedSlider;
