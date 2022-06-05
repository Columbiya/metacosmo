import React from 'react'
import css from './WhyMetacosmo.module.scss'
import logo from '../../../assets/main/logo-light.png'
import Button from '../../common/Button/Button'
import string from '../../../assets/main/why-spring.png'
import { useNavigate } from 'react-router-dom';
import { scrollTop } from './../../../scrollTop';
import { WHY_METACOSMO_PATH } from '../../../consts'

const WhyMetacosmo = (props) => {
    return (
        <section className={css.why}>
            <div className="container">
                <header className={css.header}>
                    <h2 className={css.title} data-aos="zoom-in-up"><span>Why</span> metacosmo?</h2>
                    <img src={logo} alt="metacosmo" data-aos="zoom-out" />
                </header>
            </div>
            <footer className={css.footer}>
                <div className="container">
                    <div className={css.text} data-aos="zoom-out">
                        <h3 className={css.subtitle}>Feel the experience of superiority in the virtual world </h3>
                    </div>

                    <div className={css.table} data-aos="zoom-out">
                        <div className={css.features + " " + css.column}>
                            <span className={css.featureItem}></span>
                            <span className={css.featureItem}>
                                NFT's
                            </span>
                            <span className={css.featureItem}>
                                Cryptocurrency
                            </span>
                            <span className={css.featureItem}>
                                Blockchain
                            </span>
                            <span className={css.featureItem}>
                                Fully immersive VR
                            </span>
                            <span className={css.featureItem}>
                                Realistic Graphics
                            </span>
                            <span className={css.featureItem}>
                                Powered by Unreal Engine
                            </span>
                            <span className={css.featureItem}>
                                Hyper Realistic SFX
                            </span>
                            <span className={css.featureItem}>
                                MMORPG
                            </span>
                            <span className={css.featureItem}>
                                Build anything, anywhere
                            </span>
                            <span className={css.featureItem}>
                                Quests to earn rewards / in game currency
                            </span>
                            <span className={css.featureItem}>
                                Rewards as you create
                            </span>
                            <span className={css.featureItem}>
                                Avatar Development
                            </span>
                            <span className={css.featureItem}>
                                Business / Enterprise Creation
                            </span>
                            <span className={css.featureItem}>
                                Decentralized currency market
                            </span>
                            <span className={css.featureItem}>
                                Decentralized Autonomous Organisation
                            </span>
                            <span className={css.featureItem}>
                                Algorithmization
                            </span>
                        </div>
                        <div className={css.metacosmo + " " + css.column}>
                            <span className={css.feature}>MetaCosmo</span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                            <span className={css.feature  + " " + css.checked}></span>
                        </div>
                        <div className={css.wow + " " + css.column}>
                            <span className={css.feature}>World of Warcraft</span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                        </div>
                        <div className={css.vrChat + " " + css.column}>
                            <span className={css.feature}>VR Chat</span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                        </div>
                        <div className={css.decentraland + " " + css.column}>
                            <span className={css.feature}>Decentraland</span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                        </div>
                        <div className={css.theSandbox + " " + css.column}>
                            <span className={css.feature}>The Sandbox</span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                        </div>
                        <div className={css.axieInfinity + " " + css.column}>
                            <span className={css.feature}>Axie Infinity</span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                        </div>
                        <div className={css.bioktopia + " " + css.column}>
                            <span className={css.feature}>Bioktopia</span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                        </div>
                        <div className={css.cryptovoxels + " " + css.column}>
                            <span className={css.feature}>Cryptovoxels</span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                        </div>
                        <div className={css.starAtlas + " " + css.column}>
                            <span className={css.feature}>Star Atlas</span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                        </div>
                        <div className={css.illuvium + " " + css.column}>
                            <span className={css.feature}>Illuvium</span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature + " " + css.checked}></span>
                            <span className={css.feature}></span>
                        </div>
                    </div>
                </div>

                <img src={string} className={css.string} alt="" />
            </footer>
        </section>
    )
}

export default WhyMetacosmo