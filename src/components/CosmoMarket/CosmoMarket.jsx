import React, { useEffect, useState } from 'react'
import BreadCrumbs from './../BreadCrumbs/BreadCrumbs';
import css from './CosmoMarket.module.scss'
import spring from '../../assets/cosmomarket/spring.png'
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet';
import newsStore from '../../store/newsStore';
import Preloader from '../Preloader/Preloader';
import BuyCvr from '../Main/BuyCvr/BuyCvr';
import News from '../Main/News/News';
import Footer from '../Footer/Footer';
import Button from '../common/Button/Button';
import { scrollTop } from '../../scrollTop';
import { useNavigate } from 'react-router-dom';
import { INSTRUCTIONS_PATH } from '../../consts';

const CosmoMarket = (props) => {
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
            <div className="container">
                <BreadCrumbs crumb={'CosmoMarket'} />
            </div>
            <section className={css.cosmomarket}>
                <div className="container">
                    <div className={css.inner}>
                        <div className={css.cosmomarketInfo}>
                            <h2 className={css.title}><span>cosmomarket</span></h2>
                            <h3 className={css.subtitle}>next-gen trading platform</h3>
                            <p className={css.text}>Securely Trade Digital Assets, services and NFTs</p>
                            <p className={css.text}>
                                It will build a new business environment for various private entrepreneurs, 
                                companies and people, wich will be allowed to create, rent, buy and sell 
                                both digital products, goods and services, and their counterparts in the 
                                physical world.
                            </p>
                            <p className={css.text}>
                                If you miss what is not offered in CosmoMarket feel free to either create 
                                it by yourself or place an order and get quotes on it from many experts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.highlights}>
                <div className="container">
                    <h2 className={css.title}><span>key</span> highlights</h2>
                </div>
                <footer className={css.hightlightsFooter}>
                    <div className={`container ${css.fullHeight}`}>
                        <div className={css.hightlightsInner}>
                            <div className={css.highlightsItem}>
                                Trade anything securely
                            </div>
                            <div className={css.highlightsItem}>
                                Auctions
                            </div>
                            <div className={css.highlightsItem}>
                                Pay for the service after it is completed
                            </div>
                            <div className={css.highlightsItem}>
                                The marketplace will also be
                                available in a web browser
                                and mobile application
                            </div>
                            <div className={css.highlightsItem}>
                                Buy new items to wear or to furnish your world
                            </div>
                            <div className={css.highlightsItem}>
                                Experience items before purchase
                            </div>
                            <div className={css.highlightsItem}>
                                Request new items from creators
                            </div>
                            <div className={css.highlightsItem}>
                                Convert CVR to stablecoin and any fiat currency
                            </div>
                            <div className={css.highlightsItem}>
                                Paying with a card linked to a CVR wallet in both 
                                the metaverse and the real world
                            </div>
                        </div>
                    </div>
                </footer>
                <img className={css.spring} src={spring} alt="" />
            </section>

            <div className={css.learnMoreContainer}>
                <Snippet title={'CosmoMarket – is a decentralized marketplace operating on smart contracts, allowing the secure trading of NFT’s'}
                            data-aos="fade-down"
                            titleWidth={2000} /> 
            </div>

            <div className={css.learnMoreContainer}>
                <Snippet title={'Poised to become the largest blockchain asset exchange (NFT), The Big Market VR is a place where you can experience items before purchase, negotiate the best price and securely pay for goods, services and property '}
                         secondColText={'In The Big Market VR, citizens will be able to trade Land, Objects, Resources, XPs (Experiences) and other objects from other worlds'}
                         thirdColText={'All transactions on the marketplace are carried out using the main currency of the metaverse – CVR'}
                         textColorBlack={true}
                         titleWidth={460}
                         secondColTextWidth={460}
                         thirdColTextWidth={420}
                        data-aos="fade-down" /> 
            </div>

            <BuyCvr cosmomarket={true} />
            <News />

            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                         data-aos="zoom-out"
                        secondColText={'Learn more about CVR buying instructions'} 
                        secondColTextWidth={570}
                        thirdColText={<Button isColorBlack={true}
                                              onClick={() => scrollTop(() => navigate(INSTRUCTIONS_PATH))}>learn more</Button>}/>
            </div>
            <Footer />

        </>
    )
}

export default CosmoMarket