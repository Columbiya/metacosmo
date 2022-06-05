import React from 'react'
import css from './Bonus.module.scss'
import gradientLogo from '../../../assets/logo-gradient.png'
import Button from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom';
import { scrollTop } from '../../../scrollTop';
import { BONUS_PROGRAM_PATH } from '../../../consts';

const Bonus = (props) => {
    const navigate = useNavigate()

    return (
        <>
            <section className={css.bonus} data-aos="fade-down">
                <div className="container">
                    <header className={css.header} data-aos="zoom-out">
                        <h2 className={css.title}><span>Bonuses</span></h2>
                        <img src={gradientLogo} alt="metacosmo" />
                    </header>
                </div>
                <footer className={css.bonusContent}>
                    <div className={`container ${css.fullHeight}`}>
                        <div className={css.bonusInner}>
                            <div className={css.bonusItem}>
                                <h3 className={css.bonusSubtitle} data-aos="fade-down"><span>metacosmo</span></h3>
                                <p className={css.text} data-aos="fade-down">is the first Metaverse in the world with a built in bonus program</p>
                                <Button onClick={() => scrollTop(() => navigate(BONUS_PROGRAM_PATH))} data-aos="fade-down">explore</Button>
                            </div>
                            <div className={css.bonusItem}>
                                <h3 className={css.bonusSubtitle} data-aos="fade-down"><span>cosmoway</span></h3>
                                <p className={css.text} data-aos="fade-down">is a platform that allows anyone to earn by collecting NFTs</p>
                                <Button href="http://cosmoway.network" data-aos="fade-down">explore</Button>
                            </div>
                        </div>
                    </div>        
                </footer>
            </section>
        </>
    )
}

export default Bonus