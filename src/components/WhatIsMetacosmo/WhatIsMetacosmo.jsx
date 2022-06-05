import React, { useEffect, useState } from 'react'
import Button from '../common/Button/Button';
import BreadCrumbs from './../BreadCrumbs/BreadCrumbs';
import videoPlaceholder from '../../assets/what-is-metacosmo/video-placeholder.jpg'
import playButton from '../../assets/main/play-button.png'
import logo from '../../assets/logo.png'
import css from './WhatIsMetacosmo.module.scss'
import Snippet from './Snippet/Snippet';
import keySpring from '../../assets/what-is-metacosmo/spring-highlights.png'
import newsStore from '../../store/newsStore';
import News from '../Main/News/News';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { scrollTop } from './../../scrollTop';
import { useNavigate } from 'react-router-dom';
import { COSMOLANDS_PATH, ABOUT_CVR_PATH } from './../../consts';

const WhatIsMetacosmo = (props) => {
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
            <div className={css.about}>
                <div className="container">
                    <BreadCrumbs crumb={'What is MetaCosmo'} data-aos="fade-up" />
                    <div className={css.whatIsMetacosmo}>
                        <header className={css.header} data-aos="zoom-out">
                            <h2 className={css.title}><span>what is</span> metacosmo?</h2>
                            <div className={css.buttons}>
                                <Button isColorBlack={true}
                                        onClick={() => scrollTop(() => navigate(ABOUT_CVR_PATH))}>buy cvr</Button>
                                <Button isFilled={true} soon={true}>enter metacosmo</Button>
                            </div>
                        </header>
                    </div>
                </div>
                <footer className={css.whatIsContent}>
                    <div className={`container ${css.relative}`}>
                        <div className={css.text}>
                            <p data-aos="zoom-out">A WORLD OF ENTERTAINMENT, DISCOVERY AND LEARNING</p>
                            <p data-aos="zoom-out-down">From playing games with your friends, going shopping, relaxing on the beach, or completing
                                a University degree, the World of MetaCosmo will give you an opportunity
                                to become who you wish to be and make your dreams come true. </p>
                            <p data-aos="zoom-out-up">All our commercial partners, both the established and the new, will experience the richness and diversity of
                                the MetaCosmo world — a great place to work, play and rest.</p>
                        </div>
                        <div className={css.video} data-aos="slide-right">
                            <iframe width="940" height="528" src="https://www.youtube.com/embed/_gsCcsfsIvM"
                            title="YouTube video player" frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen={true}
                            webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                            {/* <img src={videoPlaceholder} className={css.videoPlaceholder} alt="placeholder metacosmo" />
                            <img src={playButton} className={css.playButton} alt="play button" /> */}
                        </div>
                    </div>
                </footer>
            </div>
            <div className={css.freeToGo} data-aos="fade-down">
                <div className={`container ${css.fullHeight}`}>
                    <div className={css.freeInner}>
                        <div className={css.info}>
                            <img src={logo} alt="metacosmo" />
                            <h2 className={css.freeTitle} data-aos="fade-down"><span>The Metacosmo</span> Metaverse <br />is where people will be free to go for:</h2>
                            <div className={css.options}>
                                <div className={css.optionColumn}>
                                    <span className={css.option} data-aos="zoom-out">Entertainment</span>
                                    <span className={css.option} data-aos="zoom-out">Education</span>
                                    <span className={css.option} data-aos="zoom-out">Shopping</span>
                                    <span className={css.option} data-aos="zoom-out">Business</span>
                                </div>
                                <div className={css.optionColumn}>
                                    <span className={css.option} data-aos="zoom-out">Trade</span>
                                    <span className={css.option} data-aos="zoom-out">Events</span>
                                    <span className={css.option} data-aos="zoom-out">Leisure Activities</span>
                                    <span className={css.option} data-aos="zoom-out">Space exploration</span>
                                </div>
                                <div className={css.optionColumn}>
                                    <span className={css.option} data-aos="zoom-out">Work searches</span>
                                    <span className={css.option} data-aos="zoom-out">Investing</span>
                                    <span className={css.option} data-aos="zoom-out">Dating</span>
                                    <span className={css.option} data-aos="zoom-out">Travel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snippet data-aos="fade-up" title={'The world is literally at your fingertips in MetaCosmo'}
                secondColText={'Explore the streets, convention centers and shopping malls of the city or take a break in the stunning mountains and enjoy the wildlife'}
                thirdColText={'Create the world you want to live in, and contribute to the future evolution of our virtual society'} />
            <Snippet data-aos="fade-up" title={'Discover the unlimited opportunities of your new life in MetaCosmo'}
                secondColText={'It is a world that exists and lives even without its creators'}
                thirdColText={'The MetaCosmo metaverse has been designed from the ground up so you can continue creating this world and its future'}
                isReversed={true} />

            <section className={css.keyHighlights} data-aos="fade-down">
                <div className="container">
                    <h2 className={css.keyTitle} data-aos="zoom-out-down"><span>Key</span> highlights</h2>
                </div>
                <div className={css.highlights}>
                    <div className={`container ${css.fullHeight}`}>
                        <div className={css.highligtsInner}>
                            <div className={css.column}>
                                <div className={css.keyItem} data-aos="fade-down">
                                    MetaCosmo is a fully upgradeable world
                                </div>
                                <div className={css.keyItem} data-aos="fade-down">
                                    Share everything with everyone - if you wish to
                                </div>
                                <div className={css.keyItem} data-aos="fade-down">
                                    Graphics and Information
                                    Technology will continue
                                    improve with the latest
                                    trends and innovations
                                </div>
                                <div className={css.keyItem} data-aos="fade-down">
                                    MetaCosmo will never stand still
                                </div>
                                <div className={css.keyItem} data-aos="fade-down">
                                    MetaСosmo is the next step in the evolution of social networks
                                </div>
                                <div className={css.keyItem} data-aos="fade-down">
                                    Move to the future worlds - or build your own
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={keySpring} className={css.keySpring} alt="" />
            </section>
            <section className={css.vision}>
                <div className="container">
                    <h2 className={css.visionTitle} data-aos="zoom-out-down">Virtual reality will soon replace television, cinema,
                        business, communication, education, entertainment
                        and even Internet search.</h2>
                    <h3 className={css.visionSubtitle} data-aos="zoom-out">Our vision for MetaCosmo is to create a world where</h3>
                    <div className={css.visionInner}>
                        <div className={css.visionItem} data-aos="zoom-out">
                            <p>You don’t have to travel back and forth for an hour every day to get to school or work</p>
                        </div>
                        <div className={css.visionItem} data-aos="zoom-out">
                            <p>You can jump ten meters or fly free as a bird with special tools</p>
                        </div>
                        <div className={css.visionItem} data-aos="zoom-out">
                            <p>You don’t have to fly across the continent for a personal meeting</p>
                        </div>
                        <div className={css.visionItem} data-aos="zoom-out">
                            <p>You can be anything you want to be</p>
                        </div>
                        <div className={css.visionItem} data-aos="zoom-out">
                            <p>No one can dictate the opening hours of your business, where no one can shut your business,
                                where no one can take it away from you, where there is no lockdown</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.welcome} data-aos="fade-down">
                <div className={css.welcomeInner}>
                    <img src={logo} alt="metacosmo" data-aos="fade-down" />
                    <h2 className={css.welcomeTitle} data-aos="fade-down">welcome to <br /><span>metacosmo</span></h2>
                    <p className={css.welcomeText} data-aos="fade-down">The new world of WEB 3.0 is here!</p>
                    <Button style={{margin: "0 auto"}} data-aos="fade-down" soon={true} isFilled={true}>Enter metacosmo</Button>
                </div>
            </section>
            <div className={css.news}>
                <News />
            </div>
            <div className={css.snippetWrapper}>
                <Snippet title={'Learn more'}
                         data-aos="zoom-out"
                        secondColText={'Learn more about Cosmolands'} 
                        thirdColText={<Button isColorBlack={true}
                                              onClick={() => scrollTop(() => navigate(COSMOLANDS_PATH))}>learn more</Button>}/>
            </div>
            <Footer />
        </>
    )
}

export default WhatIsMetacosmo