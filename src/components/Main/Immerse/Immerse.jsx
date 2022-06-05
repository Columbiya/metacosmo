import React from 'react'
import css from './Immerse.module.scss'
import unrealEngineLogo from '../../../assets/main/unreal-engine-logo.png'
import logo from '../../../assets/logo.png'
import string from '../../../assets/main/immerse-string.png'
import string2 from '../../../assets/main/immerse-string2.png'
import Button from './../../common/Button/Button';
import { scrollTop } from './../../../scrollTop';
import { useNavigate } from 'react-router-dom';
import { WHAT_IS_METACOSMO_PATH } from '../../../consts'

const Immerse = (props) => {
    const navigate = useNavigate()

    return (
        <div className={css.immerse} data-aos="fade-down">
            <div className={`container ${css.fullHeight}`}>
                <div className={css.logos} data-aos="zoom-in">
                    <div className={css.logoItem}>
                        Powered by
                        <img src={unrealEngineLogo} alt="unreal engine" />
                    </div>
                    <div className={css.logoItem}>
                        <img src={logo} alt="metacosmo" />
                    </div>
                </div>
                <div className={css.immerseInner}>
                    <h2 className={css.title} data-aos="zoom-out-down"><span>immerse</span> yourself</h2>
                    <p className={css.text} data-aos="zoom-out-down">Dive into The World's First Realistic Metaverse</p>
                    <Button data-aos="zoom-out-down" onClick={() => scrollTop(() => navigate(WHAT_IS_METACOSMO_PATH))}>
                        learn more
                    </Button>
                </div>
            </div>
            <img className={css.string + " " + css.first} src={string} alt="" />
            <img className={css.string + " " + css.second} src={string2} alt="" />
        </div>
    )
}

export default Immerse