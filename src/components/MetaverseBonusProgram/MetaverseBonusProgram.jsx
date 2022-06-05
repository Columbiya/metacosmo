import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Button from '../common/Button/Button'
import css from './MetaverseBonusProgram.module.scss'
import { scrollTop } from './../../scrollTop';
import { BUY_CVR_PATH } from '../../consts'
import News from '../Main/News/News'
import newsStore from '../../store/newsStore'
import Preloader from '../Preloader/Preloader'
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet'
import { COSMOLANDS_PATH } from './../../consts';
import Footer from '../Footer/Footer'

const MetaverseBonusProgram = (props) => {
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
            await newsStore.getNews(1, 4)
            setLoading(false)
        } 
        
        getData()
    }, [])

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <section className={css.programMainScreen} data-aos="fade-down">
                <div className="container">
                    <BreadCrumbs crumb={'Bonus Program'} />

                    <header className={css.header}>
                        <h2 className={css.programTitle} data-aos="fade-down"><span>metaverse bonus</span> program</h2>
                        <Button isColorBlack={true}
                                onClick={() => scrollTop(() => navigate(BUY_CVR_PATH))}
                                data-aos="fade-down">buy cvr</Button>
                    </header>
                    <div className={css.mainScreen}>
                        <div className={css.mainScreenText}>
                            <h3 className={css.mainScreenSubtitle} data-aos="fade-down">
                                MetaCosmo is the first metaverse
                                in the world with a built-in
                                referral program
                            </h3>
                            <p data-aos="fade-down">
                                Any purchases of physical or digital goods or services within the Metacosmo metaverse 
                                are subject to a commission of up to 2.5%
                            </p>
                            <p data-aos="fade-down">
                                By inviting friends to MetaCosmo, you get up to 40% cashback on the commissions they 
                                paid for purchases within the metaverse.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.examples} data-aos="fade-down">
                <div className="container">
                    <h2 className={css.programTitle} data-aos="zoom-out"><span>example</span></h2>

                    <div className={css.featuresInner}>
                        <div className={css.line}>
                            <div className={css.feature} data-aos="zoom-out">
                                <p>Your friends have made a purchase
                                of goods and services in CosmoMarket
                                for a total of  10,250 CVRs</p>
                            </div>
                            <div className={css.feature} data-aos="zoom-out">
                                <p>MetaCosmo commission 2.5% is equal to 250 CVRs</p>
                            </div>
                        </div>
                        <div className={css.line}>
                            <div className={css.feature} data-aos="zoom-out">
                                <p>Your commission 40% of 250 CVRs = 100 CVRs</p>
                            </div>
                            <div className={css.feature} data-aos="zoom-out">
                                <p><span>You can share with your referrals up to 50%, which gives
                                    them the opportunity to save on commissions</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.rules} data-aos="fade-down">
                <div className="container">
                    <h2 className={css.programTitle} data-aos="fade-down"><span>rules</span></h2>
                </div>
                <div className={css.rulesContent} data-aos="fade-down">
                    <div className={`container ${css.fullHeight}`}>
                        <div className={css.rulesInner}>
                            <div className={css.rule} data-aos="fade-down">
                                If the average daily balance of CVR on the wallet of the link owner is
                                less than 200,000 CVRs, then his referral percentage is 20%, and he
                                can also choose the following cashback percentages for invited users:
                                0%, 5%, 10%.
                            </div>
                            <div className={css.rule} data-aos="fade-down">
                                If the average daily CVR balance on the wallet of the link owner is
                                200,000 CVRs or more, then the referral percentage will increase to
                                40%, and the link owner will be able to choose the percentage of
                                cashback for invited users: 0%, 5%, 10%, 15% or 20%.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.start} data-aos="fade-down">
                <div className="container">
                    <div className={css.startInner}>
                        <div className={css.startContent}>
                            <h3 className={css.startTitle} data-aos="zoom-out">
                                Start accumulating CVR on your wallet
                                at the lowest possible price now
                                to get the highest percentage of bonuses
                            </h3>
                            <Button animatedGradient={true}
                                    isFilled={true} 
                                    data-aos="zoom-out"
                                    style={{width: '250px', height: '70px'}}
                                    onClick={() => scrollTop(() => navigate(BUY_CVR_PATH))}>buy cvr</Button>
                        </div>
                    </div>
                </div>
            </section>

            <News />
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            data-aos="fade-down"
                            secondColText={'Learn more about Cosmolands'}
                            thirdColText={<Button isColorBlack={true}
                                                  onClick={() => scrollTop(() => navigate(COSMOLANDS_PATH))}>learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>
            <Footer />

        </>
    )
}

export default MetaverseBonusProgram