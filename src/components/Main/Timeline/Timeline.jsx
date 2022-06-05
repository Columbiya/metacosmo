import React from 'react'
import css from './Timeline.module.scss'
import cvrSmall from '../../../assets/main/cvr-small.png'
import timeline1 from '../../../assets/main/timeline-1.png'
import timeline2 from '../../../assets/main/timeline-2.png'
import timeline3 from '../../../assets/main/timeline-3.png'

const Timeline = (props) => {
    return (
        <section className={css.timeline}>
            <div className={`container ${css.container}`}>
                <h2 className={css.title} data-aos="fade-up"><span>development</span> timeline</h2>
                <p className={css.text} data-aos="slide-right">The Evolution of MetaCosmo</p>
                <div className={css.bar}>
                    <div className={css.parts}>
                        <div className={css.part + " " + css.complete} data-aos="fade-up">
                            <img src={cvrSmall} alt="" />
                            <div className={css.info}>
                                <span className={css.date} data-aos="fade-up">4q2021</span>
                                <span className={css.textInfo} data-aos="fade-up">cvr open sale</span>
                            </div>
                        </div>
                        <div className={css.part + " " + css.complete} data-aos="fade-down">
                            <img src={timeline1} alt="" />
                            <div className={css.info}>
                                <span className={css.date} data-aos="fade-up">1q2022</span>
                                <span className={css.textInfo} data-aos="fade-up">cosmoland nft collection</span>
                            </div>
                        </div>
                        <div className={css.part} data-aos="fade-right">
                            <img src={timeline2} alt="" />
                            <div className={css.info}>
                                <span className={css.date} data-aos="fade-up">2q2022</span>
                                <span className={css.textInfo} data-aos="fade-up">cosmoland nft referral program</span>
                            </div>
                        </div>
                        <div className={css.part} data-aos="fade-left">
                            <img src={timeline3} alt="" />
                            <div className={css.info}>
                                <span className={css.date} data-aos="fade-up">3q2022</span>
                                <span className={css.textInfo} data-aos="fade-up">metacosmo demo launch</span>
                            </div>
                        </div>
                    </div>
                    <div className={css.line}></div>
                </div>
            </div>
        </section>
    )
}

export default Timeline