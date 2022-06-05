import React, { useState } from 'react'
import Button from '../../common/Button/Button'
import css from './Feedback.module.scss'
import { CONTACTS_PATH } from './../../../consts';
import { useNavigate } from 'react-router-dom';
import { scrollTop } from './../../../scrollTop';
import { axios } from './../../../http/http';
import Popup from '../../BuyCosmoland/Popups/Popup';

const Feedback = ({ isStayUpdated }) => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')

    const title = isStayUpdated ? 'Stay updated' : 'Contact us'
    const titleClass = isStayUpdated ? css.marginBtm: null

    const subscribe = async () => {
        if (!email || !email.includes('@')) {
            setError('Email has a wrong format')
            return
        }

        try {
            await axios.post('/email/subscribe', { email })
            alert('You successfully subscribed to metacosmo latest news! Check your emails to activate the subscription')
        } catch(e) {
            setError(e.message)
            console.log(e)
        }
    }

    return (
        <>
            <section className={css.feedback} data-aos="zoom-in">
                <div className="container">
                    <div className={css.inner}>
                        <div className={css.item}>
                            <h2 className={css.title + " " + titleClass}>{title}</h2>
                            {isStayUpdated &&
                                <>
                                    <p className={css.text}>
                                        Stay updated and get the latest news.
                                    </p>
                                    <p className={css.text}>
                                        Subscribe to our newsletter
                                    </p>
                                </>
                            }
                        </div>
                        <div className={css.item}>
                            {isStayUpdated ?
                                <input className={css.email} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email adress" type="text" /> :
                                <>
                                    <p className={css.text}>We are available 24/7 on Discord and Telegram</p>
                                    <p className={css.text}>We can also be reached on traditional social media</p>
                                </>
                            }
                        </div>
                        <div className={css.item}>
                            <Button isColorBlack={true}
                                    onClick={isStayUpdated ? subscribe: () => scrollTop(() => navigate(CONTACTS_PATH))}>
                                {isStayUpdated ? 'subscribe': 'get in touch'}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            {error &&
                <Popup errorText={error} onHide={() => setError('')} />
            }
        </>

    )
}

export default Feedback