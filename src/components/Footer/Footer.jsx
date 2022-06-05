import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from './Footer.module.scss'
import { IMAGES_API_URL, PRIVACY_POLICY_PATH, TERMS_OF_USE_PATH } from './../../consts';
import { scrollTop } from './../../scrollTop';

const Footer = (props) => {
    const navigate = useNavigate()

    return (
        <footer className={css.footer}>
            <div className="container">
                <div className={css.inner}>
                    <div className={css.socialMedia}>
                        <a href="https://twitter.com/CosmoFund" target="__blank" className={css.mediaItem + " " + css.twitter}>
                            twitter
                        </a>
                        <a href="https://discord.gg/xZE76828j5" target="__blank" className={css.mediaItem  + " " + css.discord}>
                            Discord
                        </a>
                        <a href="https://t.me/CosmoFundChannel" target="__blank" className={css.mediaItem  + " " + css.telegram}>
                            telegram channel
                        </a>
                        <a href="https://www.instagram.com/CosmoFundArt/" target="__blank" className={css.mediaItem  + " " + css.instagram}>
                            instagram
                        </a>
                        <a href="https://cosmofund.medium.com" target="__blank" className={css.mediaItem  + " " + css.medium}>
                            medium
                        </a>
                    </div>
                    <nav className={css.nav}>
                        <div className={css.link}>
                            <a className={css.link} onClick={() => scrollTop(() => navigate('/'))}>home</a>
                        </div>
                        <div className={css.link}>
                            <a href={IMAGES_API_URL + '/metacosmo-whitepaper.pdf'} className={css.link} target="__blank">white paper</a>
                        </div>
                        <div className={css.link}>
                            <a className={css.link} onClick={() => scrollTop(() => navigate(TERMS_OF_USE_PATH))}>terms of use</a>
                        </div>
                        <div className={css.link}>
                            <a className={css.link} onClick={() => scrollTop(() => navigate(PRIVACY_POLICY_PATH))}>privacy policy</a>
                        </div>
                    </nav>
                </div>
                <div className={css.copyright}>
                    MetaCosmo © 2022
                </div>
            </div>
        </footer>
    )
}

export default Footer