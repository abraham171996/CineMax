import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../Swiper/swiper.module.scss';
import 'swiper/css';
import {Link, useParams} from 'react-router-dom'
import 'swiper/css/pagination';
import { Navigation, Autoplay} from 'swiper/modules';
import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';
import { client,urlFor} from '../../../Service/sanity';
import Skeleton from '../../Loader';

const ActionSlider = () => {
  const [actions,setActions] = useState([])
 const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    client.fetch("*[ _type =='action' ]").then((res)=>{
      
      setActions(res)
    }).finally(()=>{
      setTimeout(()=>{
        setLoading(false) 
      },1000)
    })
  },[])

  return (
    <>
    <Swiper
        loop={true}
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwipers"
    >
     
     {
        actions.map((action,index)=>
        loading ? (<Skeleton width="w-[100%]"/>):
        (
            <SwiperSlide key={index} className={styles.ActionSlider}>
                <figure >
                    <Link to={`/movies/${action.slug.current}`}>

                    <img src={urlFor(action.image)} alt="" />

                    </Link>
            </figure>
            <div className={styles.ActionSlider_title}>
                <h4>{action.title}</h4>
            </div>
            <div className={styles.ActionSlider_bottom}>
                <div className={styles.actImdb}>
                <AiFillStar style={{color:"yellow"}}/>
                    <h4>{action.imdb}</h4>

                </div>
                <h4>| {action.gener}</h4>
            </div>
            </SwiperSlide>
        ))
      }
  
    </Swiper>
  </>
  )
}

export default ActionSlider