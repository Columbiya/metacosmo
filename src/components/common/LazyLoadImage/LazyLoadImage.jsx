import React, { useState } from 'react'
import css from './LazyLoadImage.module.scss'

const LazyLoadImage = ({ img, ...props }) => {
    const [isLoading, setLoading] = useState(true)

    return (
        <>
            {isLoading && 
                <div className={css.hider}></div>
            }
            <img src={img} {...props} onLoad={() => setLoading(false)} style={!isLoading ? {zIndex: 4}: null} />
        </>
    )
}

export default LazyLoadImage