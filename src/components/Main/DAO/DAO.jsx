import React from 'react'
import css from './DAO.module.scss'
import logo from '../../../assets/logo.png'
import Button from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'
import { DAO_PATH } from '../../../consts'
import { scrollTop } from './../../../scrollTop';

const Dao = (props) => {
    const navigate = useNavigate()

    return (
        <section className={css.dao} data-aos="fade-up">
            <div className={`container ${css.fullHeight}`}>
                <div className={css.inner}>
                    <div className={css.info}>
                        <img src={logo} alt="metacosmo" data-aos="zoom-out" />
                        <h2 className={css.title} data-aos="zoom-out"><span>dao</span></h2>
                        <p className={css.text} data-aos="zoom-out">Ecosystem governed by its own community</p>
                        <Button onClick={() => scrollTop(() => navigate(DAO_PATH))}>learn more</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dao