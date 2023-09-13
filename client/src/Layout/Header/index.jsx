import React from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineBell } from 'react-icons/hi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Button from '../../Atoms/Button/Button'
import personImg from '../../assets/images/Image.png'
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.header_wrapper}>
                    <div className={styles.header_left}>
                        <div className={styles.header_title}>
                            <h1>CineMax</h1>
                        </div>
                        <div className={styles.menu_links}>
                            <ul>
                                <li><Link>Movies</Link></li>
                                <li><Link>Series</Link></li>
                                <li><Link>Animation</Link></li>
                                <li><Link>Genres</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.header_right}>
                        <div className={styles.allSearch}>
                            <CiSearch />
                        </div>
                        <div className={styles.forCostumer}>
                            <Button>Subscribe</Button>
                            <HiOutlineBell />
                            <figure>
                                <img src={personImg} alt="" />
                                <MdOutlineKeyboardArrowDown />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header