import React, { useState } from 'react'
import metamaskStore from '../../../store/metamaskStore'
import Button from '../../common/Button/Button'
import Preloader from '../../Preloader/Preloader'
import css from './Contract.module.scss'

const Contract = ({ type, options, link, title }) => {
    const [isAdding, setAdding] = useState(false)

    const addToken = async () => {
        setAdding(true)
        await metamaskStore.addToken({ type, options })
        setAdding(false)
    }

    return (
        <div className={css.contract}>
            <h3 className={css.contractTitle}>{title} <br />  {`(${options.symbol})`}</h3>
            <a className={css.address} href={link} target="__blank">{options.address}</a>
            <div className={css.button}>
                <Button isColorBlack={true} onClick={addToken}>{isAdding ? <Preloader />: 'Auto add'}</Button>
            </div>
        </div>
    )
}

export default Contract