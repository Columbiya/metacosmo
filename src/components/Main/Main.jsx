import React, { useEffect, useRef, useState } from 'react'
import Button from '../common/Button/Button'
import Join from './Join/Join'
import css from './Main.module.scss'
import Immerse from './Immerse/Immerse';
import WhatIsUnrealEngine from './WhatIsUnrealEngine/WhatIsUnrealEngine';
import Tokenomics from './Tokenomics/Tokenomics';
import Acquire from './Acquire/Acquire';
import Timeline from './Timeline/Timeline';
import CosmoMarket from './CosmoMarket/CosmoMarket';
import Dao from './DAO/DAO';
import WhyMetacosmo from './WhyMetacosmo/WhyMetacosmo';
import BuyCvr from './BuyCvr/BuyCvr';
import newsStore from '../../store/newsStore';
import News from './News/News';
import Feedback from './Feedback/Feedback';
import Footer from '../Footer/Footer';
import Preloader from './../Preloader/Preloader';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import headerBg from '../../assets/main/header-bg.jpg'
import headerLeftBg from '../../assets/main/header-hider.png'
import { scrollTop } from './../../scrollTop';
import { useNavigate } from 'react-router-dom';
import { ABOUT_CVR_PATH, COSMOLANDS_PATH } from './../../consts';
import Bonus from './Bonus/Bonus';
import playButton from '../../assets/main/play-button.png'
import Popup from '../BuyCosmoland/Popups/Popup';

const Main = (props) => {
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()
    const ref = useRef(null)
    const wrapper = useRef(null)
    const [isPaused, setPaused] = useState(true)
    const [isOpen, setOpen] = useState(false)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)

    const fade = isOpen ? css.fadeUp: css.fadeDown;
    const classHidden = isOpen ? css.block: null

    const onVideoClick = (e) => {
        setOpen(true)
        wrapper.current.addEventListener('animationend', () => {
            ref.current.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
            document.body.style.overflowY = 'hidden'
        })
    }

    const closeVideo = e => {
        setPaused(true)
        setOpen(false)
        ref.current.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
        document.body.style.overflowY = 'scroll'
    }

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
            <div className={css.mainHeader}>
                <div className={css.headerLeft}>
                    <div className={css.mainHeaderContainer}>
                        <h1 className={css.headerTitle} data-aos="slide-right">welcome to <span>metacosmo</span></h1>
                        <p className={css.descr} data-aos="slide-down">Next-gen decentralized metaverse</p>
                        <p className={css.descr + " " + css.margin} data-aos="slide-down">Where everyone can be whoever they want</p>
                        <div className={css.btns}>
                            <Button data-aos="zoom-in" 
                                    soon={true}
                                    >
                                enter metacosmo
                            </Button>
                            <Button data-aos="zoom-in" isFilled={true}
                                    onClick={() => scrollTop(() => navigate(ABOUT_CVR_PATH))}>cvr token</Button>
                            <Button data-aos="zoom-in" isFilled={true}
                                    onClick={() => scrollTop(() => navigate(COSMOLANDS_PATH))}>cosmoland</Button>    
                        </div>
                    </div>
                    <LazyLoadImage src={headerLeftBg} className={css.headerLeftBg} width='100%' height='100%' placeholder={<Preloader />} />
                </div>
                <div className={css.headerRight}>
                    {isPaused && 
                        <img src={playButton} onClick={onVideoClick} className={css.playButton} alt="play button" />
                    }
                </div>
                <LazyLoadImage src={headerBg} className={css.headerBg} width='100%' height='100%' placeholder={<Preloader />} />

                <div className={css.videoPopup + ' ' + classHidden} onClick={closeVideo}>
                    <div className={css.popUpInner + ' ' + fade} ref={wrapper}>
                        <iframe width="1280" height="720"
                                src="https://www.youtube.com/embed/VKCeXLUs_yk?enablejsapi=1" 
                                title="YouTube video player" frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" ref={ref} className={css.video}>    
                        </iframe>
                        {isOpen && 
                            <div onClick={closeVideo} className={css.close}></div>
                        }
                    </div>
                </div>

                {isOpen && 
                    <div onClick={closeVideo} className={css.close}></div>
                }
                
                {/* <div className={css.scene}>
                    <div className={css.cube} style={{transform: `translateZ(-100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`}}>
                        <div className={css.cubeFace + " " + css.front} onClick={() => setRotateY(y => y - 90)}>COSMO <br />+1,2 %</div>
                        <div className={css.cubeFace + " " + css.right} onClick={() => setRotateY(y => y - 90)}>right</div>
                        <div className={css.cubeFace + " " + css.back} onClick={() => setRotateY(y => y - 90)}>back</div>
                        <div className={css.cubeFace + " " + css.left} onClick={() => setRotateX(x => x - 90)}>left</div>
                        <div className={css.cubeFace + " " + css.top} onClick={() => setRotateX(x => x - 180)}>top</div>
                        <div className={css.cubeFace + " " + css.bottom} onClick={() => {setRotateX(0); setRotateY(0)}}>bottom</div>
                    </div>
                </div> */}
            </div>

            
            {/* <Popup isTokensPrice={true} /> */}
            
            <Join />
            <Immerse />
            <WhatIsUnrealEngine />
            <Tokenomics />
            <Acquire />
            <Bonus />
            <Timeline />
            <CosmoMarket />
            <Dao />
            <WhyMetacosmo />
            <BuyCvr />
            <News />
            <Feedback isStayUpdated={false} />
            <Feedback isStayUpdated={true} />
            <Footer />
        </>
    )
}

export default Main