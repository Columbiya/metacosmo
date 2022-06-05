import React, { useEffect, useState } from 'react'
import mainScreenImage from '../../assets/Cosmolands/main-screen-image.png'
import pricingImage from '../../assets/Cosmolands/pricing-image.jpg'
import logo from '../../assets/logo.png'
import css from './Cosmolands.module.scss'
import BreadCrumbs from './../BreadCrumbs/BreadCrumbs';
import Button from './../common/Button/Button';
import string1 from '../../assets/Cosmolands/argument-string-1.png'
import string2 from '../../assets/Cosmolands/argument-string-2.png'
import buyCosmolandImage from '../../assets/Cosmolands/buy-cosmoland-image.png'
import News from '../Main/News/News'
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet'
import Footer from '../Footer/Footer'
import newsStore from '../../store/newsStore'
import Preloader from '../Preloader/Preloader'
import { useNavigate } from 'react-router-dom';
import { scrollTop } from '../../scrollTop'
import { ABOUT_CVR_PATH, BUY_COSMOLAND_PATH } from '../../consts'

const Cosmolands = (props) => {
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function getNews() {
            newsStore.limit = 4
            newsStore.page = 1
            await newsStore.getNews()
            setLoading(false)
        }

        getNews()
    }, [])

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <section className={css.mainScreen} data-aos="fade-down">
                <div className="container">
                    <BreadCrumbs crumb={'CosmoLands'} />
                </div>
                <div className={css.mainText}>
                    <div className="container">
                        <h2 className={css.title + " " + css.mainScreenTitle} data-aos="fade-down"><span>cosmolands</span></h2>
                        <div className={css.mainInfo}>
                            <p className={css.textItem} data-aos="fade-down"><strong>
                                CosmoLand is the largest and
                                most affordable NFT collection in
                                the world, granting its holder the
                                right to own land in the
                                decentralized metaverse.
                            </strong></p>
                        </div>
                        <Button isFilled={true} style={{width: '300px', height: '100px', fontSize: '26px'}} 
                                animatedGradient={true}
                                data-aos="fade-down"
                                onClick={() => scrollTop(() => navigate(BUY_COSMOLAND_PATH))}>buy cosmoland</Button>
                        <img src={mainScreenImage} data-aos="fade-down" className={css.mainScreenImage} alt="" />
                    </div>
                </div>
            </section>
            <section className={css.features} data-aos="fade-down">
                <div className={`container ${css.fullHeight}`}>
                    <div className={css.featuresInner}>
                        <div className={css.featuresItems}>
                            <div className={css.featuresItem} data-aos="zoom-out">
                                MetaCosmo is truly a next-gen metaverse built on Unreal Engine 5 that 
                                will empower creators across all industries to deliver stunning real-time 
                                content and experiences.
                            </div>
                            <div className={css.featuresItem} data-aos="zoom-out">
                                Imagine being able to meet friends, play, create your own stores 
                                and do business, build your own homes and even worlds, all within a single, 
                                decentralized metaverse.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.consistsOf} data-aos="fade-down">
                <div className="container">
                    <div className={css.consistsInner}>
                        <p className={css.consistsText} data-aos="fade-down">CosmoLand consists of <br /><span>16,400,000</span><br />collectible digital images with a unique title of
                        ownership - that is NFT.</p>
                    </div>
                </div>
            </section>
            <section className={css.moreFeatures} data-aos="fade-down">
                <div className={`container ${css.fullHeight}`}>
                    <div className={css.moreFeaturesInner}>
                        <div className={css.featuresColumn}>
                            <div className={css.featuresItem} data-aos="zoom-out">
                                CosmoLands are registered on the Polygon blockchain as NFT’s
                            </div>
                            <div className={css.featuresItem} data-aos="zoom-out">
                                The owners of the CosmoLand have absolute power over 
                                their VR Land and what they choose to do with it
                            </div>
                        </div>
                        <div className={css.featuresColumn}>
                            <div className={css.featuresItem} data-aos="zoom-out">
                                NFT from the CosmoLand collection is a kind of passport in 
                                the world of MetaCosmo, by purchasing which you become a full 
                                citizen of the metaverse
                            </div>
                            <div className={css.featuresItem} data-aos="zoom-out">
                                By owning digital real estate, 
                                people have all the opportunities that they 
                                have in real life, but much cheaper
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.canBeUsed} data-aos="fade-down">
                <div className="container">
                    <h2 className={css.canBeUsedTitle} data-aos="fade-down">Cosmolands can be used...</h2>
                    <div className={css.canBeUsedItems}>
                        <div className={css.canBeUsedItem}>
                            <p className={css.beUsedText} data-aos="fade-down">For the construction of:</p>
                            <ul className={css.beUsedList}>
                                <li className={css.itemBeUsed} data-aos="fade-down">Utility buildings directly in the game (mines, warehouses, etc.)</li>
                                <li className={css.itemBeUsed} data-aos="fade-down">Buildings for presentation (shops/stores, showrooms, etc.)</li>
                                <li className={css.itemBeUsed} data-aos="fade-down">Private buildings (clubhouses, private enterprises, etc.)</li>
                                <li className={css.itemBeUsed} data-aos="fade-down">A port to another world, game, or virtual reality</li>
                            </ul>
                        </div>
                        <div className={css.canBeUsedItem}>
                            <p className={css.beUsedText} data-aos="fade-down">To trade</p>
                        </div>
                        <div className={css.canBeUsedItem}>
                            <p className={css.beUsedText} data-aos="fade-down">Rent with others</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.pricing} data-aos="fade-down">
                <div className="container">
                    <h2 className={css.title} data-aos="zoom-out"><span>pricing</span></h2>
                    <p className={css.pricingText} data-aos="zoom-out">We offer the most affordable NFTs that give 
                    ownership of virtual lands in the metaverse</p>
                    <img src={pricingImage} data-aos="zoom-in" className={css.pricingImage} alt="" />
                    <div className={css.table} data-aos="fade-down">
                        <div className={css.tableRow} data-aos="zoom-in">
                            <span>FROM</span>
                            <span>0</span>
                            <span>3,000,000</span>
                            <span>7,000,000</span>
                            <span>11,000,000</span>
                            <span>15,000,000</span>
                            <span>16,000,000</span>
                            <span>16,381,000</span>
                        </div>
                        <div className={css.tableRow} data-aos="zoom-in">
                            <span>TO</span>
                            <span>2,999,999</span>
                            <span>6,999,999</span>
                            <span>10,999,999</span>
                            <span>14,999,999</span>
                            <span>15,999,999</span>
                            <span>16,380,999</span>
                            <span>16,399,999</span>
                        </div>
                        <div className={css.tableRow + " " + css.gradient} data-aos="zoom-in">
                            <span>price<br />(usdc)</span>
                            <span>1</span>
                            <span>3</span>
                            <span>5</span>
                            <span>9</span>
                            <span>17</span>
                            <span>100</span>
                            <span>1,000</span>
                        </div>
                    </div>
                    <p className={css.pricingBuy} data-aos="zoom-out">You can buy CosmoLand for USDC on the Polygon blockchain, 
                    thereby paying the minimum MATIC fee</p>
                </div>
            </section>
            <section className={css.bonus} data-aos="fade-down">
                <div className={`container ${css.fullHeight}`}>
                    <div className={css.bonusInner}>
                        <div className={css.bonusText}>
                            <img src={logo} alt="" data-aos="fade-down" />
                            <h2 className={css.title + " " + css.fontLarge} data-aos="fade-down"><span>bonus</span></h2>
                            <ul className={css.bonusList}>
                                <li className={css.bonusItem} data-aos="fade-down">Sales are divided into 7 stages</li>
                                <li className={css.bonusItem} data-aos="fade-down">
                                    At each stage, the value of NFT grows in accordance with the schedule
                                </li>
                                <li className={css.bonusItem} data-aos="fade-down">
                                    Having at least one NFT in each tier, you
                                    get a spaceship as a gift, which will help
                                    you travel faster around the city and even
                                    to other planets (when they are explored)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.argument} data-aos="fade-down">
                <div className="container">
                    <div className={css.argumentInner}>
                        <h2 className={css.title + " " + css.argumentTitle} data-aos="zoom-out">a sound argument for <span>NFTS</span></h2>
                        <p className={css.argumentText} data-aos="zoom-out">
                            The classic real estate investment process is time-consuming
                            and costly. Therefore, buying lands in the form of an NFT
                            is a good alternative with many advantages:
                        </p>
                        <ul className={css.argumentList}>
                            <li className={css.argumentItem} data-aos="zoom-out">
                                It is easy to do in one click
                            </li>
                            <li className={css.argumentItem} data-aos="zoom-out">
                                It does not require additional expenses
                            </li>
                            <li className={css.argumentItem} data-aos="zoom-out">
                                The liquidity of virtual property can be
                                much higher than property in the real
                                world
                            </li>
                            <li className={css.argumentItem} data-aos="zoom-out">
                                You can use lands in the metaverse as
                                efficiently as in reality (for example, rent,
                                place your own billboards and shops)
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={string1} className={css.string + ' ' + css.first} alt="" />
                <img src={string2} className={css.string + ' ' + css.second} alt="" />
            </section>
            <section className={css.buyCosmoland} data-aos="fade-down">
                <div className={`container ${css.fullHeight}`}>
                    <div className={css.buyInner}>
                        <div className={css.buyText}>
                            <h3 className={css.buyTitle} data-aos="fade-down">Buy cosmoland</h3>
                            <p className={css.joinText} data-aos="fade-down">and join CosmoWay - first NFT referral program</p>
                            <div className={css.buttons}>
                                <Button isFilled={true} 
                                    animatedGradient={true}
                                    data-aos="fade-down"
                                    onClick={() => scrollTop(() => navigate(BUY_COSMOLAND_PATH))}>buy cosmoland</Button>
                                <Button href="http://cosmoway.network/" data-aos="fade-down">join cosmoway</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={buyCosmolandImage} data-aos="fade-down" className={css.buyCosmolandImage} alt="" />
            </section>
            <News />
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            data-aos="fade-down"
                            secondColText={'Learn more about CVR'}
                            thirdColText={<Button onClick={() => scrollTop(() => navigate(ABOUT_CVR_PATH))} 
                                                  isColorBlack={true}>learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>
            <Footer />
        </>
    )
}

export default Cosmolands