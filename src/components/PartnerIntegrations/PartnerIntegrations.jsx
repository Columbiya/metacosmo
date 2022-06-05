import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Button from '../common/Button/Button'
import videoPlaceholder from '../../assets/PartnerIntegrations/video-placeholder.jpg'
import playButton from '../../assets/main/play-button.png'
import css from './PartnerIntegrations.module.scss'
import spring from '../../assets/PartnerIntegrations/spring.png'
import newsStore from '../../store/newsStore'
import Preloader from './../Preloader/Preloader';
import News from './../Main/News/News';
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet'
import Footer from '../Footer/Footer'
import { scrollTop } from './../../scrollTop';
import { useNavigate } from 'react-router-dom';
import { PARTNERS_PATH } from '../../consts'

const PartnerIntegrations = (props) => {
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
            <section className={css.intergrations} data-aos="fade-down">
                <div className='container'>
                    <div className={css.inner}>
                        <BreadCrumbs crumb={'Power of Unreal Engine'} data-aos="fade-down" />
                        <header className={css.header}>
                            <h2 className={css.integrationsTitle} data-aos="fade-down"><span>Power</span> of Unreal Engine</h2>
                        </header>
                        <footer className={css.footer}>
                            <div className={css.text}>
                                <p className={css.footerText} data-aos="fade-down"><strong>Best-in-Class Partner integrations - Leveraging the
                                    latest technology innovations for a future proof world</strong></p>
                                <p className={css.footerText} data-aos="fade-down">We have selected best-in-class technology partners to work with so we
                                    could bring MetaCosmo to life</p>
                                <p className={css.footerText} data-aos="fade-down">From the underlying algorithms and tech infrastructure through to our hardware partners,
                                    we do not make
                                    any compromises as far as the creation of the best future proofed metaverse is concerned.</p>
                            </div>

                            <div className={css.video} data-aos="fade-down">
                                <iframe width="940" height="528" src="https://www.youtube.com/embed/lITCgWV7hMs" 
                                title="YouTube video player" frameBorder={0} 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                                {/* <img src={playButton} className={css.playButton} alt="play button" /> */}
                            </div>
                        </footer>
                    </div>
                </div>
            </section>
            <section className={css.keyLights} data-aos="fade-down">
                <div className="container">
                    <h2 className={css.integrationsTitle} data-aos="zoom-out"><span>key</span> highlights</h2>
                </div>
                <div className={css.lightsItems}>
                    <div className={`container ${css.fullHeight}`}>
                        <div className={css.lightsInner}>
                            <ul className={css.lights}>
                                <li className={css.lightsItem} data-aos="zoom-out">
                                    <p>
                                        Best in class partnerships
                                        for underlying technologies
                                        providing an unrivalled
                                        experience 
                                    </p>
                                </li>
                                <li className={css.lightsItem} data-aos="zoom-out">
                                    <p>
                                        Easily integrate a portal
                                        between other virtual
                                        worlds
                                    </p>
                                </li>
                                <li className={css.lightsItem} data-aos="zoom-out">
                                    <p>
                                        Built on Unreal Engine
                                    </p>
                                </li>
                                <li className={css.lightsItem} data-aos="zoom-out">
                                    <p>
                                        Future proofed technology
                                    </p>
                                </li>
                                <li className={css.lightsItem} data-aos="zoom-out">
                                    <p>
                                        Full metahuman integration
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={spring} className={css.spring} alt="" />
                </div>
            </section>
            
            <section className={css.features} data-aos="fade-down">
                <h2 className={css.featuresTitle} data-aos="fade-down">Using cutting edge technology from Unreal Engine,
                we have been able to create life-like 3D avatars never
                seen before in any other VR world experience</h2>
                <div className="container">
                    <div className={css.featuresInner}>
                        <div className={css.feature} data-aos="fade-down">
                            Create your own realistic avatar with the most
                            detailed customization ever
                        </div>
                        <div className={css.feature} data-aos="fade-down">
                            All avatars can express emotions and with various
                            animations can show your mood or reactions
                        </div>
                        <div className={css.feature} data-aos="fade-down">
                            Billions of combinations
                        </div>
                    </div>
                </div>
            </section>
            <News />
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            data-aos="fade-down"
                            secondColText={'Learn more about Partners'}
                            thirdColText={<Button isColorBlack={true}
                            onClick={() => scrollTop(() => navigate(PARTNERS_PATH))}>learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>
            <Footer />
        </>
    )
}

export default PartnerIntegrations