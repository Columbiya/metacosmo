import React, { useEffect, useState } from 'react'
import css from './NewPage.module.scss'
import { useParams } from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import hiderForDark from '../../assets/hider-for-dark-images.png'
import hiderForLight from '../../assets/hider-for-light-images.png'
import { observer } from 'mobx-react-lite';
import New from '../News/New/New'
import Articles from '../Articles/Articles'
import newsStore from '../../store/newsStore'


const SingleItemPage = ({ store, isNews }) => {
    const [isLoading, setLoading] = useState(true)
    const { id } = useParams()
    const selectedNews = isNews ? store.selectedNews: store.selectedArticle

    useEffect(() => {
        async function getOneNews() {
            isNews ?
            await store.getOneNew(id):
            await store.getOneArticle(id)
        }

        async function getLastNews() {
            await newsStore.getNews(1, 4)
        }

        async function getAll() {
            await getOneNews()
            await getLastNews()
            setLoading(false)
        }

        store.limit = 4;
        store.page = 1;
        getAll()
    }, [id])

    if (isLoading || !selectedNews?.createdAt) {
        return <Preloader />
    }

    const date = new Date(selectedNews?.createdAt?.split('T')[0])
    const day = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate()
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}`: date.getMonth() + 1 
    const year = date.getFullYear()
    const domain = !isNews && new URL(selectedNews.address).hostname

    return (
        <div className={css.news}>
            <div className="container">
                <header className={css.header}>
                    <h2 className={css.title}>{selectedNews.title}</h2>
                    <div className={css.newsInfo}>
                        <span>By {selectedNews.author}</span>
                        <span>{day} / {month} / {year}</span>
                    </div>
                </header>
                <div className={css.textUp}>
                    <div className={css.new}>
                        {isNews ? 
                            <New {...selectedNews} isSingleNew={true} /> :
                            <div className={css.address}>
                                {domain}
                            </div>
                        }
                    </div>
                    <div className={css.text}>
                        <div className={css.bold}>
                            {selectedNews.boldText.split(`\n`).map(paragraph => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                        <div className={css.text + ' ' + css.regularText}>
                            {selectedNews.text.split(`\n`).map(paragraph => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={css.quote}>
                    <span>“</span>
                    <p className={css.quoteText}>{selectedNews.quote}</p>
                </div>
                <div className={css.twoColumns}>
                    <div className={css.text}>
                        {selectedNews.twoColumnContentFirst.split(`\n`).map(paragraph => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                    <div className={css.text}>
                        {selectedNews.twoColumnContentSecond.split(`\n`).map(paragraph => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className={css.oneColumnText + " " + css.text}>
                    {selectedNews.oneColumnContent.split(`\n`).map(paragraph => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
                {
                    !isNews &&
                    <div>
                        <h2 className={css.sourceTitle}>Original Publication:</h2>
                        <a href={selectedNews.address} 
                            target="__blank" 
                            className={css.source}>{selectedNews.title}</a>
                    </div>
                }
                <div className={css.related}>
                    <h3 className={css.title}>Related News</h3>
                    <div className={css.news}>
                        {newsStore.news.map(news => (
                            <New {...news} key={news.id} />
                        ))}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default observer(SingleItemPage)