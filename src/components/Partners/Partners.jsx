import React, { useEffect, useState } from 'react'
import partnersStore from '../../store/partnersStore'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import css from './Partners.module.scss'
import { observer } from 'mobx-react-lite';
import Partner from './Partner/Partner';
import Preloader from '../Preloader/Preloader';
import News from '../Main/News/News';
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet';
import Button from '../common/Button/Button';
import Footer from '../Footer/Footer';
import newsStore from '../../store/newsStore';
import string1 from '../../assets/collections/spring-1.png'
import string2 from '../../assets/collections/spring-2.png'

const Partners = (props) => {
    const [isLoading, setLoading] = useState(true)

    const partners = partnersStore.partners

    useEffect(() => {
        async function getData() {
            await partnersStore.getPartners()
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
                <BreadCrumbs crumb={'Partners'} />

                <h2 className={css.title} data-aos="fade-down"><span>partners</span></h2>

                <div className={css.partners}>
                    {partners.map(item => (
                        <Partner key={item.id} {...item} />
                    ))}
                </div>
                <img src={string1} alt="" className={css.string + " " + css.first} />
                <img src={string2} className={css.string + " " + css.second} alt="" />
            </div>

            <News />

            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            data-aos="fade-down"
                            secondColText={'Learn more about Referral Program'}
                            thirdColText={<Button isColorBlack={true} href="http://cosmoway.network">learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>

            <Footer />
        </>
    )
}

export default observer(Partners)