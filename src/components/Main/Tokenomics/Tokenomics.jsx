import React from 'react'
import css from './Tokenomics.module.scss'
import logo from '../../../assets/logo.png'
import Button from './../../common/Button/Button';
import { scrollTop } from './../../../scrollTop';
import { useNavigate } from 'react-router-dom';
import { ABOUT_CVR_PATH } from './../../../consts';

const Tokenomics = (props) => {
    const navigate = useNavigate()

    return (
        <section className={css.tokenomics} data-aos="fade-up">
            <div className={`container ${css.fullHeight}`}>
                <div className={css.inner}>
                    <div className={css.info}>
                        <img src={logo} alt="metacosmo" data-aos="fade-up"/>
                        <h2 className={css.title} data-aos="fade-down"><span>the main currency</span><br /> of the metaverse</h2>
                        <p className={css.text} data-aos="fade-left">Evolution in the world of finance and banking</p>
                        <Button onClick={() => scrollTop(() => navigate(ABOUT_CVR_PATH))}>learn more</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics