import React, { useEffect, useState } from 'react'
import css from './CvrTokenomics.module.scss'
import BreadCrumbs from './../BreadCrumbs/BreadCrumbs';
import Button from './../common/Button/Button';
import { scrollTop } from './../../scrollTop';
import { BUY_CVR_PATH, COSMOMARKET_PATH } from './../../consts';
import { useNavigate } from 'react-router-dom';
import BuyCvr from '../Main/BuyCvr/BuyCvr';
import News from '../Main/News/News';
import newsStore from '../../store/newsStore';
import Preloader from '../Preloader/Preloader';
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet';
import Footer from '../Footer/Footer';

const CvrTokenomics = (props) => {
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
            <section className={css.mainScreen} data-aos="fade-down">
                <div className="container">
                    <BreadCrumbs crumb={'About CVR'} />
                    <div className={css.mainInner}>
                        <div className={css.mainText}>
                            <h2 className={css.mainTitle} data-aos="fade-down"><span>CVR</span> <br />Evolution in the world of finance and banking</h2>
                            <p data-aos="fade-down">The world of MetaCosmo has a multigalactic economy
                                united by a single currency - CVR
                            </p>
                            <Button isFilled={true} animatedGradient={true}
                                    style={{width: '300px', height: '100px', fontSize: '26px'}} 
                                    data-aos="fade-down"
                                    onClick={() => scrollTop(() => navigate(BUY_CVR_PATH))}>buy cvr</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.features} data-aos="fade-down">
                <div className="container">
                    <ul className={css.featuresList}> 
                        <li className={css.featuresItem} data-aos="zoom-out">
                            CVR is the main currency of the MetaCosmo metaverse with
                            a built-in value growth algorithm
                        </li>
                        <li className={css.featuresItem} data-aos="zoom-out">
                            The initial sale is carried out using a smart contract
                        </li>
                        <li className={css.featuresItem} data-aos="zoom-out">
                            CVR is available on the Binance Smart Chain network (BEP20)
                        </li>
                        <li className={css.featuresItem} data-aos="zoom-out">
                            The emission of CVR is 105 million tokens, and the sale 
                            is divided into 10 stages
                        </li>
                        <li className={css.featuresItem}>
                            Convert CVR to stablecoins and any fiat currency
                        </li>
                        <li className={css.featuresItem}>
                            Paying with a card linked to a CVR wallet both in the metaverse 
                            and in the real world
                        </li>
                    </ul>
                    <div className={css.table} data-aos="zoom-in">
                        <div className={css.column}>
                            <span>Stage</span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>TOTAL</span>
                        </div>
                        <div className={css.column}>
                            <span>Emission</span>
                            <span>15 000 000</span>
                            <span>14 000 000</span>
                            <span>13 000 000</span>
                            <span>12 000 000</span>
                            <span>11 000 000</span>
                            <span>10 000 000</span>
                            <span>9 000 000</span>
                            <span>8 000 000</span>
                            <span>7 000 000</span>
                            <span>6 000 000</span>
                            <span>105 000 000</span>
                        </div>
                        <div className={css.column}>
                            <span>Available for purchase</span>
                            <span>10 000 000</span>
                            <span>9 333 333</span>
                            <span>8 666 666</span>
                            <span>8 000 000</span>
                            <span>7 333 333</span>
                            <span>6 666 666</span>
                            <span>6 000 000</span>
                            <span>5 333 333</span>
                            <span>4 666 666</span>
                            <span>4 000 000</span>
                            <span>70 000 000</span>
                        </div>
                        <div className={css.column}>
                            <span>Price<br />(USDT)</span>
                            <span>0.01</span>
                            <span>0.03</span>
                            <span>0.05</span>
                            <span>0.07</span>
                            <span>0.09</span>
                            <span>0.15</span>
                            <span>0.20</span>
                            <span>0.30</span>
                            <span>0.40</span>
                            <span>0.50</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.youCanUse} data-aos="fade-down">
                <h3 className={css.youCanUseTitle} data-aos="fade-down">How you can use CVR:</h3>
                <div className="container">
                    <ul className={css.youCanUseList}>
                        <li className={css.youCanUseItem} data-aos="fade-down">
                            <p>
                                Buying all assets (items, buildings,
                                resources, wearables, services,
                                tickets, courses, art)
                            </p>
                        </li>
                        <li className={css.youCanUseItem} data-aos="fade-down">
                            <p>
                                Advertisements
                            </p>
                        </li>
                        <li className={css.youCanUseItem} data-aos="fade-down">
                            <p>
                                Transport
                            </p>
                        </li>
                        <li className={css.youCanUseItem} data-aos="fade-down">
                            <p>
                                Leasing
                            </p>
                        </li>
                        <li className={css.youCanUseItem} data-aos="fade-down">
                            <p>
                                And other Extras
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={css.buying} data-aos="fade-down">
                <div className="container">
                    <h2 className={css.buyingTitle} data-aos="zoom-out"><span>buying</span></h2>
                    <div className={css.buyingInner}>
                        <div className={css.buyingItem} data-aos="zoom-out">
                             From our limited Token Sale
                        </div>
                        <div className={css.buyingItem} data-aos="zoom-out">
                             On an Exchange (out/in game)
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.important} data-aos="fade-down">
                <div className="container">
                    <h2 className={css.buyingTitle} data-aos="fade-down"><span>important</span></h2>
                </div>
                <div className={css.importantInner}>
                    <div className='container'>
                        <div className={css.importantWrapper}>
                            <ul className={css.featuresList}> 
                                <li className={css.featuresItem} data-aos="fade-down">
                                    At each stage, 2/3 of the issue
                                    will be available for purchase
                                </li>
                                <li className={css.featuresItem} data-aos="fade-down">
                                    The purchase price of CVR tokens
                                    increases automatically. This cost
                                    growth algorithm is built into the
                                    smart contract
                                </li>
                                <li className={css.featuresItem} data-aos="fade-down">
                                    Each next stage of the emission
                                    begins 10 days after the closing
                                    of the previous stage of the
                                    emission of CVR tokens
                                </li>
                                <li className={css.featuresItem} data-aos="fade-down">
                                    1/3 of the issue is distributed to
                                    the development team
                                </li>
                                <li className={css.featuresItem} data-aos="fade-down">
                                    Upon completion of each stage,
                                    10% of the proceeds will be placed
                                    in the CVR liquidity pool
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <BuyCvr />
            <div className={css.newsContainer}>
                <News />
            </div>
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            data-aos="fade-down"
                            secondColText={'Learn more about CosmoMarket'}
                            thirdColText={<Button isColorBlack={true}
                                                  onClick={() => scrollTop(() => navigate(COSMOMARKET_PATH))}>learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>
            <Footer />

        </>
    )
}

export default CvrTokenomics