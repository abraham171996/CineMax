import React, { useContext, useEffect, useState } from 'react'
import styles from '../HomeBanner/banner.module.scss'
import dis from '../../assets/svg/dis.svg'
import rated from '../../assets/svg/rated.svg'
import coming from '../../assets/svg/coming.svg'
import recent from '../../assets/svg/recent.svg'
import download from '../../assets/svg/download.svg'
import darkMode from '../../assets/svg/darkMode.svg'
import setting from '../../assets/svg/setting.svg'
import { Link } from 'react-router-dom'
import {BsToggleOff, BsToggleOn} from 'react-icons/bs'
import { ThemeContext } from '../../context/ThemeContex'
let IconsData = [
  {
    svg:dis,
    text:"Discovery",
    to:"/"
  },
  {
    svg:rated,
    text:"Top Rated",
    to:'/toprated'
  },
  {
    svg:coming,
    text:"Coming Soon"
  },
]
let LibraryData = [
  {
    svg:recent,
    text:"Recent Played"
  },
  {
    svg:download,
    text:"Download"
  },
  {
    svg:darkMode,
    text:"Dark Mode"
  },
  {
    svg:setting,
    text:"Setting"
  },
]
const SideBar = ({height}) => {
  const {handleChange, theme, checkboxState } = useContext(ThemeContext)
  
  const [changeMood, setChangeMood] = useState(false);

 
  return (
    <div style={{height:height}} className={styles.SideBar}>
      <div className={styles.SideBarTop}>
        <h3>Menu</h3>
        <div className={styles.SideBarTop__Icons}>
          <ul>
            {
              IconsData.map((icon,i)=>(
                <li key={i}>
                  <Link to={icon.to} style={{display:"flex",gap:"10px", color:"#f9f9f9"}}>
                  <img src={icon.svg} alt="" />
                  <p>{icon.text}</p>
                  </Link>
                </li>
              ))
            }
            
          </ul>
        </div>
      </div>
      <div className={styles.SideBarBottom}>
        <h3>Library</h3>
          <div className={styles.SideBarBottom__Icons}>
              <ul>
                {
                  LibraryData.map((data,i)=>(
                    <li key={i}>
                      <img src={data.svg} alt="" />
                        <p>{data.text}</p>
                    </li>
                  ))
                }
                   { changeMood ? (
            <BsToggleOff />
          ) : (
            <BsToggleOn />
          )}
              </ul>
          </div>  
      </div>

    </div>
  )
}

export default SideBar