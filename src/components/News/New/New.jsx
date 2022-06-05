import React, { useEffect, useRef } from 'react'
import css from './New.module.scss'
import logoSmall from '../../../assets/logo-small.png'
import { IMAGES_API_URL } from '../../../consts'
import hiderForDark from '../../../assets/hider-for-dark-images.png'
import hiderForLight from '../../../assets/hider-for-light-images.png'
import { Link, useNavigate } from 'react-router-dom';
import { scrollTop } from './../../../scrollTop';


const New = ({ img, createdAt, subtitle, title, author, hider, id, isSingleNew, noAos }) => {
    const navigate = useNavigate()
    const date = new Date(createdAt.split('T')[0])
    const day = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate()
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}`: date.getMonth() + 1
    const year = date.getFullYear() 

    const coloredSubtitle = subtitle.split('|||')[0]
    const nonColoredSubtitle = subtitle.split('|||')[1]

    const random = Math.floor(Math.random() * 50);
    const singlePageClass = isSingleNew ? css.singlePage: null
    const animation = random % 2 == 0 ? 'zoom-in': 'fade-right'


    const navigateAndScroll = () => {
        scrollTop(() => navigate('/news/' + id))
    }

    return (
        <div className={css.new + " " + singlePageClass} data-aos={noAos ? null: animation}>
            <header className={css.newHeader} onClick={navigateAndScroll}>
                <div className={css.image}>
                    <img src={`${IMAGES_API_URL}/${img}`} className={css.articleImage} />
                    <img className={css.hider} src={hider === 'light' ? hiderForLight: hiderForDark} />
                </div>
                <div className={css.imageCover}>
                    <div className={css.upper}>
                        <div className={css.logo}>
                            <img src={logoSmall} alt="metacosmo" />
                        </div>
                        {!isSingleNew && 
                            <div className={css.info}>
                                <p>by {author}</p>
                                <p>{day} / {month} / {year}</p>
                            </div>
                        }
                    </div>
                    <div className={css.lower}>
                        <span className={css.colored}>{coloredSubtitle}</span>
                        {nonColoredSubtitle}
                    </div>
                </div>
            </header>
            {!isSingleNew && 
                <footer className={css.newFooter}>
                    <h2 className={css.title}>{title}</h2>
                    <Link to={'/news/' + id} className={css.read}>Read Article</Link>
                </footer>
            }
        </div>
    )
}

export default New