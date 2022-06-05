import React, { useEffect, useState } from 'react'
import newsStore from '../../store/newsStore'
import css from './News.module.scss'
import { observer } from 'mobx-react-lite';
import New from './New/New';
import Pagination from '../Pagination/Pagination';
import string from '../../assets/spring.png'
import secondString from '../../assets/spring2.png'
import Preloader from '../Preloader/Preloader';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Aos from 'aos'
import 'aos/dist/aos.css'

const News = props => {
    const news = newsStore.news
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        async function getNews() {
            newsStore.limit = 8
            setLoading(true)
            newsStore.getNews()
            setLoading(false)
        }
        getNews()
    }, [newsStore.page])

    if (isLoading) {
        return (
            <Preloader />
        )
    }

    return (
        <section className={css.news}>
            <div className="container">
                <BreadCrumbs crumb='News' />
                <section className={css.newsList}>
                    {news.map(oneNew => (
                        <New {...oneNew} key={oneNew.id} />
                    ))}
                </section>
                <Pagination store={newsStore} />
            </div>
            <img className={css.string} src={string} />
            <img className={css.secondString} src={secondString} />
        </section>
    )
}

export default observer(News)