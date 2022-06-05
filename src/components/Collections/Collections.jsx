import React, { useEffect, useState } from 'react'
import collectionsStore from '../../store/collectionsStore'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Preloader from '../Preloader/Preloader'
import { observer } from 'mobx-react-lite';
import Collection from './Collection/Collection';
import css from './Collections.module.scss'
import Pagination from '../Pagination/Pagination';
import News from './../Main/News/News';
import newsStore from '../../store/newsStore';
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet';
import Footer from '../Footer/Footer';
import Button from '../common/Button/Button';
import string1 from '../../assets/collections/spring-1.png'
import string2 from '../../assets/collections/spring-2.png'
import instructionsStore from '../../store/instructionsStore';

const Collections = ({ isInstructions }) => {
    const [isLoading, setLoading] = useState(true)
    const collections = isInstructions ? instructionsStore.instructions: collectionsStore.collections


    useEffect(() => {
        async function getData() {
            const response = isInstructions ? await instructionsStore.getInstructions():
                                              await collectionsStore.getCollections()
            await newsStore.getNews(1, 4)
            setLoading(false)
        }

        getData()

    }, [collectionsStore.page, instructionsStore.page])

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <div className={`container`}>
                <BreadCrumbs crumb={isInstructions ? 'Instructions': 'Collections'} />

                <div className={css.collections}>
                    {collections.map(item => (
                        <Collection key={item.id} {...item} />
                    ))}
                </div>

                <Pagination store={isInstructions ? instructionsStore: collectionsStore} />
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

export default observer(Collections)