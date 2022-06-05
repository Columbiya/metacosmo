import React, { useRef, useState } from 'react'
import css from './WhatIsUnrealEngine.module.scss'
import logoLight from '../../../assets/main/logo-light.png'
import logoUeDark from '../../../assets/main/logo-ue-dark.png'
import playButton from '../../../assets/main/play-button.png'
import Button from './../../common/Button/Button'
import string from '../../../assets/main/string-ue.png'
import string2 from '../../../assets/main/string-ue2.png'
import { useNavigate } from 'react-router-dom';
import { scrollTop } from './../../../scrollTop';
import { PARTNER_INTEGRATIONS } from '../../../consts'

const WhatIsUnrealEngine = (props) => {
    const ref = useRef(null)
    const wrapper = useRef(null)
    const navigate = useNavigate()
    const [isPaused, setPaused] = useState(true)
    const [isOpen, setOpen] = useState(false)

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

    return (
        <div className={css.ue}>
            <div className="container">
                <header className={css.header} data-aos="fade-down">
                    <h2 className={css.title}><span>what is</span> unreal engine?</h2>
                    <img src={logoLight} alt='metacosmo' />
                </header>
            </div>
            <footer className={css.footer + ' ' + css.fullHeight} data-aos="fade-down">
                <div className={`container`}>
                    <div className={css.text} data-aos="zoom-out-down">
                        <p>Unreal Engine is the best engine for realistic immersion in virtual space</p>
                        <p>This video visualizes the power of the Unreal Engine</p>
                    </div>
                </div>
                {isPaused && <img onClick={onVideoClick} className={css.playButton} src={playButton} alt="play button" />}
            </footer>
            <div className={css.videoPopup + ' ' + classHidden} onClick={closeVideo}>
                <div className={css.popUpInner + ' ' + fade} ref={wrapper}>
                    <iframe width="1280" height="720"
                            src="https://www.youtube.com/embed/Gm3dguIgdhs?enablejsapi=1" 
                            title="YouTube video player" frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" ref={ref} className={css.video}>    
                    </iframe>
                    {isOpen && 
                        <div onClick={closeVideo} className={css.close}></div>
                    }
                </div>
            </div>
            <div className="container">
                <div className={css.learn}>
                    <div className={css.powered} data-aos="zoom-out-down">
                        Powered by
                        <img src={logoUeDark} alt='Unreal Engine' />
                    </div>
                    <Button isColorBlack={true} onClick={() => scrollTop(() => navigate(PARTNER_INTEGRATIONS))}>
                        learn more
                    </Button>
                </div>
            </div>
            <img className={css.string + " " + css.first} src={string} alt="" />
            <img className={css.string + " " + css.second} src={string2} alt="" />
        </div>
    )
}

export default WhatIsUnrealEngine