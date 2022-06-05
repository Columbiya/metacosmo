import React from 'react'
import css from './Acquire.module.scss'
import logo from '../../../assets/logo.png'
import Button from '../../common/Button/Button'
import image from '../../../assets/main/acquire-image.png'
import { scrollTop } from './../../../scrollTop';
import { COSMOLANDS_PATH } from './../../../consts';
import { useNavigate } from 'react-router-dom';

const Acquire = (props) => {
    const navigate = useNavigate()
    
    return (
        <section className={css.acquire} data-aos="fade-up">
            <div className={`container ${css.fullHeight}`}>
                <div className={css.inner}>
                    <img src={logo} alt='metacosmo' data-aos="fade-down" />
                    <h2 className={css.title} data-aos="slide-up"><span>Acquire</span><br />your own piece of digital real estate</h2>
                    <p className={css.text} data-aos="fade-up">Start buying, trading, building with the largest and most affordable NFT collection in the world.</p>
                    <Button onClick={() => scrollTop(() => navigate(COSMOLANDS_PATH))}>learn more</Button>
                </div>
            </div>
            <img src={image} className={css.image} alt="" />
        </section>
    )   
}

export default Acquire