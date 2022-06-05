import React, { useEffect, useState } from 'react'
import css from './Contacts.module.scss'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import News from '../Main/News/News'
import Feedback from '../Main/Feedback/Feedback'
import Footer from '../Footer/Footer'
import newsStore from '../../store/newsStore'
import Preloader from '../Preloader/Preloader'
import string1 from '../../assets/collections/spring-1.png'
import string2 from '../../assets/collections/spring-2.png'
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet'
import Button from '../common/Button/Button'
import { scrollTop } from '../../scrollTop'
import { TEAM_PATH } from '../../consts'
import { useNavigate } from 'react-router-dom'

const Contacts = (props) => {
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
                <BreadCrumbs crumb={'Contacts'} />
            </div>

            <section className={css.contacts}>
                <div className="container">
                    <h2 className={css.title}><span>contact us</span></h2>
                    <div className={css.socialMedia}>
                        <a href="https://twitter.com/CosmoFund" target="__blank" className={css.item + ' ' + css.twitter}>
                            twitter
                        </a>
                        <a href="https://discord.gg/xZE76828j5" target="__blank" className={css.item + ' ' + css.discord}>
                            discord
                        </a>
                        <a href="https://t.me/CosmoFundChannel" target="__blank" className={css.item + ' ' + css.telegram}>
                            telegram channel
                        </a>
                        <a href="https://www.instagram.com/CosmoFundArt/" target="__blank" className={css.item + ' ' + css.instagram}>
                            instagram
                        </a>
                        <a href="https://cosmofund.medium.com" target="__blank" className={css.item + ' ' + css.medium}>
                            medium
                        </a>
                        <a href="mailto:support@CosmoFund.space" className={css.item + ' ' + css.email}>
                            send us email
                        </a>
                    </div>
                </div>
                <img src={string1} alt="" className={css.string + " " + css.first} />
                <img src={string2} className={css.string + " " + css.second} alt="" />
            </section>

            <News />
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            data-aos="fade-down"
                            secondColText={'Learn more about Team'}
                            thirdColText={<Button isColorBlack={true} onClick={() => scrollTop(() => navigate(TEAM_PATH))}>learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>
            <Footer />

        </>
    )
}

export default Contacts