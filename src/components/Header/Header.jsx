import React from 'react'
import css from './Header.module.scss'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { scrollTop } from '../../scrollTop'
import { BONUS_PROGRAM_PATH, COLLECTIONS_PATH, COSMOMARKET_PATH, INSTRUCTIONS_PATH, NEWS_PATH, PARTNERS_PATH, TEAM_PATH, TOKEN_CONTRACTS_PATH, WHAT_IS_METACOSMO_PATH } from '../../consts'
import { DAO_PATH, PARTNER_INTEGRATIONS, BUY_COSMOLAND_PATH, BUY_CVR_PATH, ARTICLES_PATH, COSMOLANDS_PATH, IMAGES_API_URL, CONTACTS_PATH, ABOUT_CVR_PATH } from './../../consts';
import Button from './../common/Button/Button';

const Header = (props) => {
    const navigate = useNavigate()

    return (
        <header className={css.header}>
            <div className={`container ${css.fullHeight}`}>
                <div className={css.headerContainer}>
                    <div className={css.logo}>
                        <img src={logo} onClick={() => scrollTop(() => navigate('/'))} className={css.logoImage} />
                    </div>
                    <nav className={css.nav}>
                        <div className={css.navLink}>
                            <span className={css.groupName}>Metaverse</span>
                            <ul className={css.dropdown}>
                                <li onClick={() => scrollTop(() => navigate(WHAT_IS_METACOSMO_PATH))}>
                                    <strong><span className={css.listText}>What is MetaCosmo?</span></strong>
                                </li>
                                <li onClick={() => scrollTop(() => navigate(DAO_PATH))}>
                                    <span className={css.listText}>DAO</span>
                                </li>
                                <li onClick={() => scrollTop(() => navigate(PARTNER_INTEGRATIONS))}>
                                    <span className={css.listText}>Power of Unreal Engine</span>
                                </li>
                                <li onClick={() => scrollTop(() => navigate(PARTNERS_PATH))}>
                                    <span className={css.listText}>Partners</span>
                                </li>
                            </ul>
                        </div>
                        <div className={css.navLink}>
                            <span className={css.groupName}>Ecosystem</span>
                            <ul className={css.dropdown}>
                                <li>
                                    <span className={css.listText}>
                                        <strong onClick={() => scrollTop(() => navigate(COSMOLANDS_PATH))}>
                                            About CosmoLands
                                        </strong>
                                    </span>
                                    <ul className={css.dropdownInnerList}>
                                        <li onClick={() => scrollTop(() => navigate(BUY_COSMOLAND_PATH))}>
                                            <span className={css.listText}>Buy Cosmolands</span>
                                        </li>
                                    </ul>    
                                </li>
                                <li>
                                    <span className={css.listText}>
                                        <strong onClick={() => scrollTop(() => navigate(ABOUT_CVR_PATH))}>
                                            About CVR
                                        </strong>
                                    </span>
                                    <ul className={css.dropdownInnerList}>
                                        <li onClick={() => scrollTop(() => navigate(BUY_CVR_PATH))}>
                                            <span className={css.listText}>Buy CVR</span>
                                        </li>
                                    </ul> 
                                </li>
                                <li onClick={() => scrollTop(() => navigate(COSMOMARKET_PATH))}>
                                    <span className={css.listText}>CosmoMarket</span>
                                </li>
                                <li onClick={() => scrollTop(() => navigate(BONUS_PROGRAM_PATH))}>
                                    <span className={css.listText}>Metaverse Bonus Program</span>
                                </li>
                            </ul>
                        </div>
                        <div className={css.navLink}>
                            <span className={css.groupName}>NFT's</span>
                            <ul className={css.dropdown}>
                                <li onClick={() => scrollTop(() => navigate(COLLECTIONS_PATH))}>
                                    <span className={css.listText}>Collections</span>
                                </li>
                                <li>
                                    <a href="http://cosmoway.network" target="__blank" className={css.listText}>NFT Referral Program</a>
                                </li>
                            </ul>
                        </div>
                        <div className={css.navLink}>
                            <span className={css.groupName}>Documentation</span>
                            <ul className={css.dropdown}>
                                <li onClick={() => scrollTop(() => navigate(INSTRUCTIONS_PATH))}>
                                    <span className={css.listText}>Instructions</span>
                                </li>
                                <li>
                                    <span className={css.listText}>
                                        <a href={`${IMAGES_API_URL}/metacosmo-whitepaper.pdf`} target="__blank">White Paper</a>
                                    </span>
                                </li>
                                <li onClick={() => scrollTop(() => navigate(TOKEN_CONTRACTS_PATH))}>
                                    <span className={css.listText}>Token Contracts</span>
                                </li>
                            </ul>
                        </div>
                        <div className={css.navLink}>
                            <span className={css.groupName}>Articles</span>
                            <ul className={css.dropdown}>
                                <li onClick={() => scrollTop(() => navigate(NEWS_PATH))}>
                                    <span className={css.listText}>News</span>
                                </li>
                                <li onClick={() => scrollTop(() => navigate(ARTICLES_PATH))}>
                                    <span className={css.listText}>Media About Us</span>
                                </li>
                            </ul>
                        </div>
                        <div className={css.navLink}>
                            <span className={css.groupName}>About Us</span>
                            <ul className={css.dropdown}>
                                <li onClick={() => scrollTop(() => navigate(TEAM_PATH))}>
                                    <span className={css.listText}>Team</span>
                                </li>
                                <li onClick={() => scrollTop(() => navigate(CONTACTS_PATH))}>
                                    <span className={css.listText}>Contacts</span>
                                </li>
                            </ul>
                        </div>
                        <Button 
                                style={{alignSelf: 'center', height: '60px'}}
                                soon={true}
                                >
                            enter metacosmo
                        </Button>
                    </nav>
                </div>
            </div>
        </header>   
    )
}

export default Header