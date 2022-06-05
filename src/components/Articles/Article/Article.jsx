import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from './Article.module.scss'
import hider from '../../../assets/hider-articles.jpg'
import articlesImage from '../../../assets/articles-background.jpg'
import { animateScroll as scroll } from 'react-scroll'

const Article = ({ address, createdAt, title, id }) => {
    const navigate = useNavigate()
    const date = new Date(createdAt.split('T')[0])
    const day = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate()
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}`: date.getMonth() + 1
    const year = date.getFullYear() 

    const onClickArticle = () => {
        scroll.scrollToTop()
        navigate('/articles/' + id)
    }

    return (
        <div className={css.article} onClick={onClickArticle} data-aos="zoom-in">
            <header className={css.header}>
                <div className={css.address}>
                    {new URL(address).hostname}
                </div>
                <div className={css.date}>
                    {day} / {month} / {year}
                </div>
                <img src={articlesImage} className={css.articleImage} alt='' />
            </header>
            <footer className={css.footer}>
                <h2 className={css.title}>{title}</h2>
                <Link to={'/articles/' + id} className={css.read}>read article</Link>
            </footer>
            <img src={hider} className={css.hider} />
        </div>
    )
}

export default Article