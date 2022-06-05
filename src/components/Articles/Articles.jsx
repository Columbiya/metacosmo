import React, { useEffect } from 'react'
import css from './Articles.module.scss'
import articlesStore from '../../store/articlesStore'
import { observer } from 'mobx-react-lite';
import BreadCrumbs from './../BreadCrumbs/BreadCrumbs';
import Article from './Article/Article';
import Pagination from '../Pagination/Pagination'
import spring from '../../assets/spring-articles.png'
import springTwo from '../../assets/spring-articles2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Articles = (props) => {
    const articles = articlesStore.articles

    useEffect(() => {
        async function getArticles() {
            articlesStore.limit = 16
            await articlesStore.getArticles()
        } 

        getArticles()
    }, [articlesStore.page])

    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <section className={css.articles}>
            <div className="container">
                <div className={css.container}>
                    <BreadCrumbs crumb='Media About Us' />
                    <div className={css.articlesList}>
                        {articles.map(article => (
                            <Article {...article} key={article.id} />
                        ))}
                    </div>
                    <Pagination store={articlesStore} />
                </div>
            </div>
            <img src={spring} className={css.springOne + " " + css.spring} />
            <img src={springTwo} className={css.springTwo + " " +css.spring} />
        </section>
    )
}

export default observer(Articles)