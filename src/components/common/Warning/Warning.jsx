import React from 'react'
import css from './Warning.module.scss'

const Warning = ({ errorText }) => {
    return (
        <div className={css.warning}>
            {errorText}
        </div>
    )
}

export default Warning