import React from 'react'
import { IMAGES_API_URL } from '../../../consts'
import css from './Partner.module.scss'

const Partner = ({ link, img }) => {
    return (
        <a className={css.partner} href={link} data-aos="zoom-out" target="__blank">
            <span className={css.container}>
                <img src={IMAGES_API_URL + `/${img}`} alt="partner" />
            </span>
        </a>
    )
}

export default Partner