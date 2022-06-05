import React from 'react'
import Button from '../../common/Button/Button'
import css from './BuyCvr.module.scss'
import { scrollTop } from './../../../scrollTop';
import { BUY_CVR_PATH } from './../../../consts';
import { useNavigate } from 'react-router-dom';

const BuyCvr = ({ earn, cosmomarket }) => {
    const navigate = useNavigate()

    return (
        <section className={css.cvr} data-aos="fade-in">
            <div className={`container ${css.fullHeight}`}>
                <div className={css.inner}>
                    <div className={css.text} data-aos="zoom-out">
                        <h3 className={css.title} data-aos="zoom-in">{cosmomarket ? 'Start accumulating CVR': 'Buy your CVR today'}</h3>
                        <h4 className={css.subtitle}>
                            {cosmomarket ?
                                'on your wallet at the lowest possible price now':
                                'and be a pioneer in the virtual world of MetaCosmo'
                            }
                        </h4>
                        <div className={css.buttons}>
                            <Button onClick={() => scrollTop(() => navigate(BUY_CVR_PATH))}>buy cvr</Button>
                            {earn && <Button href="http://cosmoway.network/">earn with your team</Button>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default BuyCvr