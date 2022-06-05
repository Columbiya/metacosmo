import React from 'react'
import css from './BreadCrumbs.module.scss'
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ crumb }) => {
    return (
        <div className={css.breadCrumbs}>
            <Link to={'/'}>MetaCosmo</Link>
            /
            <a className={css.active}>{crumb}</a>
        </div>
    )
}

export default BreadCrumbs