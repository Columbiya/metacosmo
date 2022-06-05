import React from 'react'
import css from './Snippet.module.scss'

const Snippet = ({ title, secondColText, thirdColText, isReversed, titleWidth, secondColTextWidth, textColorBlack, thirdColTextWidth, ...props }) => {
    const reversedClass = isReversed ? css.reversed: null
    const colorBlack = textColorBlack ? css.black: null

    const firstItemWidth = titleWidth || 560
    const secondItemWidth = secondColTextWidth || 450
    const thirdItemWidth = thirdColTextWidth || 430

    return (
        <section className={css.snippet} {...props}>
            <div className="container">
                <div className={css.inner + " " + reversedClass}>
                    {title && <div className={css.item + " " + colorBlack} style={{maxWidth: `${firstItemWidth}px`}}>
                        {title}
                    </div>}
                    {secondColText && <div className={css.item} style={{maxWidth: `${secondItemWidth}px`}}>
                        {secondColText}
                    </div>}
                    {thirdColText && <div className={css.item} style={{maxWidth: `${thirdItemWidth}px`}}>
                        {thirdColText}
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Snippet