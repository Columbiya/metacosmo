import React from 'react'
import css from './Pagination.module.scss'
import arrow from '../../assets/triangle.png'
import { observer } from 'mobx-react-lite';
import { animateScroll as scroll } from 'react-scroll'

const Pagination = ({ store }) => {
    const count = store.count
    const limit = store.limit

    const pagesCount = Math.ceil(count / limit)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const goBack = async () => {
        scroll.scrollToTop()
        store.page -= 1
    }

    const goToPage = async (page) => {
        scroll.scrollToTop()
        store.page = page
    }

    const goForward = () => {
        scroll.scrollToTop()
        store.page += 1
    }

    return (
        <div className={css.pagination}>
            {store.page !== 1 && <img className={css.arrow + ' ' + css.reversed} onClick={goBack} src={arrow}></img>}
            {pages.map(page => 
            <span
                key={page} 
                className={page === store.page ? css.active: null}
                onClick={() => goToPage(page)}>
                {page}
            </span>)}
            {store.page !== pages.length && count > 0 && <img className={css.arrow} onClick={goForward} src={arrow}></img>}
        </div>
    )
}

export default observer(Pagination)