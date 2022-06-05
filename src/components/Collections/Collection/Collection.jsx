import React from 'react'
import css from './Collection.module.scss'
import logoSmall from '../../../assets/logo-small.png'
import { IMAGES_API_URL } from '../../../consts'
import Button from '../../common/Button/Button'
import lightHider from '../../../assets/hider-for-light-images.png'
import darkHider from '../../../assets/hider-for-dark-images.png'

const Collection = ({ name, description, img, link, hider }) => {
    const coloredName = name.split('|||')[0]
    const nonColoredName = name.split('|||')[1]
    const paragraphs = description.split('\n').map(text => <p className={css.text}>{text}</p>)

    return (
        <div className={css.collection} data-aos="fade-down">
            <div className={css.image}>
                <img src={logoSmall} className={css.logo} alt="metacosmo" />
                <img className={css.collectionImage} src={IMAGES_API_URL + `/${img}`} />
                <img src={hider === 'light' ? lightHider: darkHider} className={css.hider} />
            </div>
            <div className={css.content}>
                <h3 className={css.collectionName}><span>{coloredName}</span> {nonColoredName}</h3>
                <div className={css.contentText}>
                    <div>
                        {paragraphs}
                    </div>
                    <Button href={link} isColorBlack={true}>learn more</Button>
                </div>
            </div>
        </div>
    )
}

export default Collection