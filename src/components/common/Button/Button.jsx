import React, { useState } from 'react'
import css from './Button.module.scss'

const Button = ({ children, isFilled, isColorBlack, soon, animatedGradient, href, boxShadowOnHover, ...props}) => {
    const [isOver, setOver] = useState(false)

    const classes = isFilled ? css.filled: css.hollow
    const colorClass = isColorBlack ? css.black: null
    const animated = animatedGradient ? css.animated: null
    const boxShadowHover = boxShadowOnHover ? css.boxShadowHover: null

    const text = isOver ? 'soon': children

    return (
        <>
            {!href ? 
                <button className={css.button + " " + classes + " " + colorClass + " " + animated + " " + boxShadowHover} 
                        onMouseEnter={soon ? () => setOver(true): null}
                        onMouseLeave={soon ? () => setOver(false): null}
                    {...props}>
                    {text}
                </button> :
                <a href={href}
                   className={css.button + " " + classes + " " + colorClass + " " + animated + " " + boxShadowHover}
                   target="__blank"
                   onMouseEnter={soon ? () => setOver(true): null}
                   onMouseLeave={soon ? () => setOver(false): null}
                   {...props}>
                       {text}
                </a>
        }

        </>

    )
}

export default Button