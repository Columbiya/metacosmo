import React from 'react'
import newsStore from '../../../store/newsStore'
import Button from '../../common/Button/Button'
import css from './News.module.scss'
import New from '../../News/New/New'
import { useNavigate } from 'react-router-dom';
import { scrollTop } from './../../../scrollTop';
import { NEWS_PATH } from '../../../consts'

const News = ({ noAos }) => {
    const navigate = useNavigate()

    const news = newsStore.news

    return (
        <section className={css.news} data-aos={noAos ? null: "zoom-in"}>
            <div className="container">
                <header className={css.header}>
                    <h2 className={css.title} data-aos={noAos ? null: "fade-down"}>News</h2>
                    <Button isColorBlack={true} data-aos={noAos ? null: "fade-down"} onClick={() => scrollTop(() => navigate(NEWS_PATH))}>
                        learn more
                    </Button>
                </header>
                <footer className={css.footer}>
                    {news.map(oneNew => (
                        <New {...oneNew} noAos={noAos} key={oneNew.id} />
                    ))}
                </footer>
            </div>
        </section>
    )
}

export default News