import React, { useEffect, useRef, useState } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import css from './Team.module.scss'
import mrXdefault from '../../assets/team/Mr-X-default.jpg'
import AlfredDefault from '../../assets/team/Alfred-default.jpg'
import AliceDefault from '../../assets/team/Alice-default.jpg'
import mrxVideo from '../../assets/team/mrx-video.mp4'
import aliceVideo from '../../assets/team/alice-video.mp4'
import alfredVideo from '../../assets/team/alfred-video.mp4'
import twitter from '../../assets/team/twitter.png'
import News from '../Main/News/News'
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet'
import Button from '../common/Button/Button'
import { useNavigate } from 'react-router-dom'
import { scrollTop } from '../../scrollTop'
import { ARTICLES_PATH } from '../../consts'
import Footer from '../Footer/Footer'
import newsStore from '../../store/newsStore'
import Preloader from '../Preloader/Preloader'
import LazyLoadImage from '../common/LazyLoadImage/LazyLoadImage'

const Team = (props) => {
    const hider = useRef(null)
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(true)

    const onMouseEnter = (e) => {
        hider.current.classList.add(css.shown)
    }

    const onMouseLeave = (e) => {
        hider.current.classList.remove(css.shown)
    }

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
            <div className={css.team}>
                <div className="container">
                    <BreadCrumbs crumb={'Team'} />

                    <header className={css.header} data-aos="zoom-out">
                        <h2 className={css.title}><span>Team</span></h2>
                        <p className={css.headerText}>our entire team has moved to the metaverse and now uses avatars</p>
                    </header>

                    <footer className={css.footer}>
                        <div className={css.item} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-aos="fade-up">
                            <div className={css.image}>
                                <LazyLoadImage img={mrXdefault} className={css.default} alt="" />
                                <video no-controls="true" muted loop autoPlay>
                                    <source src={mrxVideo} type="video/mp4" />
                                </video>
                                <div className={css.imageText}>
                                    <h3 className={css.who}>Mr. X</h3>
                                    <span className={css.role}>Creator</span>
                                </div>
                            </div>
                            <div className={css.itemText}>
                                Not much is known about this man. He created the source code for the metaverse and made
                                it available to all people. Real life became so boring for him that it became possible
                                to meet him walking along the streets of the colorful MetaCosmo.
                            </div>
                        </div>
                        <div className={css.item} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-aos="fade-up">
                            <div className={css.image}>
                                <LazyLoadImage className={css.default} src={AliceDefault} alt="" />
                                <video no-controls="true" muted loop autoPlay>
                                    <source src={aliceVideo} type="video/mp4" />
                                </video>
                                <div className={css.imageText}>
                                    <h3 className={css.who}>Alice</h3>
                                    <span className={css.role}>Explorer</span>
                                </div>
                                <a href="https://twitter.com/AliceMetaCosmo" target="__blank" className={css.twitterIcon}>
                                    <img src={twitter} alt="twitter" />
                                </a>
                            </div>
                            <div className={css.itemText}>
                                Once she was an ordinary office worker. But one day, on a day that was no different from the rest, 
                                a box was left under the door of her house. It was an unexpected gift in which she found a virtual reality 
                                suit. And from that day on, her life completely changed. You can find out all the details of this fascinating 
                                story in her twitter.
                            </div>
                        </div>
                        <div className={css.item} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-aos="fade-up">
                            <div className={css.image}>
                                <LazyLoadImage className={css.default} src={AlfredDefault} alt="" />
                                <video no-controls="true" muted loop autoPlay>
                                    <source src={alfredVideo} type="video/mp4" />
                                </video>
                                <div className={css.imageText}>
                                    <h3 className={css.who}>Alfred</h3>
                                    <span className={css.role}>Administrator</span>
                                </div>
                                <a href="https://twitter.com/AlfredCosmo" target="__blank" className={css.twitterIcon}>
                                    <img src={twitter} alt="twitter" />
                                </a>
                            </div>
                            <div className={css.itemText}>
                                Alfred is an alien from the planet Nirobu. He is the last survivor of his robotic race. 
                                His spaceship crashed on the planet Earth, where one day he met Alice. His memory was 
                                badly damaged during the crash, but he actively shares his remaining memories and 
                                knowledge with people.
                            </div>
                        </div>
                    </footer>

                    <div className={css.hider} ref={hider}></div>
                </div>
            </div>

            <div className={css.learnMoreContainer} data-aos="fade-up">
                <Snippet title={'We are all the first MetaCosmo residents'}
                         data-aos="zoom-out"
                         titleWidth={580}
                        secondColText={'It has become very inefficient to maintain an office for our team in the real world, but we can easily do it in our new office in the metaverse, which you will see soon.'} 
                        secondColTextWidth={800} />
            </div>
            <News />

            <div className={css.learnMoreContainer} data-aos="fade-up">
                <Snippet title={'Learn more'}
                         data-aos="zoom-out"
                        secondColText={'Learn more about Media about us'} 
                        secondColTextWidth={570}
                        thirdColText={<Button isColorBlack={true}
                                              onClick={() => scrollTop(() => navigate(ARTICLES_PATH))}>learn more</Button>}/>
            </div>

            <Footer />
        </>



    )
}

export default Team