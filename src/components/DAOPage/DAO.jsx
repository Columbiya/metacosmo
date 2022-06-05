import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import logo from '../../assets/logo.png'
import css from './DAO.module.scss'
import Button from '../common/Button/Button'
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet'
import News from '../Main/News/News'
import newsStore from '../../store/newsStore'
import { observer } from 'mobx-react-lite'
import Footer from '../Footer/Footer'
import Preloader from './../Preloader/Preloader';
import { useNavigate } from 'react-router-dom'
import { scrollTop } from '../../scrollTop'
import { BUY_COSMOLAND_PATH, BUY_CVR_PATH, PARTNER_INTEGRATIONS } from '../../consts'
import Popup from '../BuyCosmoland/Popups/Popup'

const DAO = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [becomeDev, setBecomeDevShown] = useState(false)
    const navigate = useNavigate()
    const news = newsStore.news

    useEffect(() => {
        async function getNews() {
            await newsStore.getNews(1, 4)
            setLoading(false)
        }

        getNews()
    }, [])

    const forExampleList = (
        <ul className={css.forExampleList}>
            <li>Holding CVR</li>
            <li>Holding NFTs</li>
            <li>Inviting new members</li>
            <li>Using skills in the development of the metaverse</li>
        </ul>
    )

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <section className={css.dao} data-aos="fade-down">
                <div className="container">
                    <BreadCrumbs crumb={'DAO'} data-aos="fade-down" />

                    <div className={css.mainScreen}>
                        <h2 className={css.daoTitle} data-aos="fade-down">DAO</h2>

                        <div className={css.daoText}>
                            <p data-aos="fade-down"><strong>a world truly governed by its community</strong></p>
                            <p data-aos="fade-down">The world of MetaCosmo is a Decentralized Autonomous Organization (DAO).</p>
                            <p data-aos="fade-down">This means that users will be in control of the policies created to determine how
                                the world behaves and evolves.</p>
                            <p data-aos="fade-down">The DAO owns the most important smart contracts and assets that make up MetaCosmo, 
                                giving control to the future evolution of MetaCosmo to the people who create and play 
                                in this virtual space.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.examples} data-aos="fade-down">
                <div className={`container ${css.fullHeight}`}>
                    <div className={css.inner}>
                        <img src={logo} alt="metacosmo" data-aos="zoom-out" />
                        <h2 className={css.examplesTitle} data-aos="zoom-out">Examples of decisions<br />determined by the <span>DAO</span>:</h2>
                        <ul className={css.examplesList}>
                            <li className={css.examplesItem} data-aos="zoom-out">Voting for key decision making</li>
                            <li className={css.examplesItem} data-aos="zoom-out">Proposal of new directions for development</li>
                            <li className={css.examplesItem} data-aos="zoom-out">Сhoosing a metaverse moderator</li>
                            <li className={css.examplesItem} data-aos="zoom-out">Voting for metaverse fund allocation</li>
                        </ul>
                        <div className={css.buttons}>
                            <Button onClick={() => scrollTop(() => navigate(BUY_CVR_PATH))} data-aos="zoom-out">buy cvr</Button>
                            <Button onClick={() => scrollTop(() => navigate(BUY_COSMOLAND_PATH))} data-aos="zoom-out">buy cosmoland</Button>
                            <Button href="http://cosmoway.network/" data-aos="zoom-out">join cosmoway</Button>
                            <Button data-aos="zoom-out" onClick={() => setBecomeDevShown(true)}>become a developer</Button>
                        </div>
                    </div>
                </div>
            </section>
            <Snippet title={`To participate in the DAO, you need to make a significant contribution to the development of the community`} 
                     secondColText={forExampleList}
                     data-aos="fade-down"
                     titleWidth={848} 
                     secondColTextWidth={640} />
            <div className={css.news}>
                <News />
            </div>
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                        data-aos="zoom-out"
                        secondColText={'Learn more about Unreal Engine 5'}
                        thirdColText={<Button isColorBlack={true}
                                              onClick={() => scrollTop(() => navigate(PARTNER_INTEGRATIONS))}>learn more</Button>}
                        secondColTextWidth={500} /> 
            </div>

            {becomeDev &&
                <Popup isSubscribe={true} onHide={() => setBecomeDevShown(false)} />
            }

            <Footer />
        </>
    )
}

export default observer(DAO)