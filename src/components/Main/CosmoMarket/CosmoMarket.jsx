import React from 'react'
import logo from '../../../assets/logo.png'
import Button from '../../common/Button/Button'
import css from './CosmoMarket.module.scss'
import { scrollTop } from './../../../scrollTop';
import { COSMOMARKET_PATH } from '../../../consts';
import { useNavigate } from 'react-router-dom';

const CosmoMarket = (props) => {
    const navigate = useNavigate()

    return (
        <section className={css.market} data-aos="fade-up">
            <div className={`container ${css.fullHeight}`}>
                <div className={css.inner}>
                    <div className={css.info}>
                        <img src={logo} alt="metacosmo" data-aos="fade-right" />
                        <h2 className={css.title} data-aos="fade-down">Cosmo <br /> <span>market</span></h2>
                        <p className={css.text} data-aos="fade-left">3D hypermarket of digital and physical goods and services</p>
                        <Button onClick={() => scrollTop(() => navigate(COSMOMARKET_PATH))}>learn more</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CosmoMarket