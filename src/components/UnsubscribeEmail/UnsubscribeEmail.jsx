import React, { useState, useEffect } from 'react'
import { axios } from '../../http/http';
import { useParams, useNavigate } from 'react-router-dom';
import Popup from '../BuyCosmoland/Popups/Popup';
import Preloader from '../Preloader/Preloader';

const UnsubscribeEmail = (props) => {
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { link } = useParams()

    useEffect(() => {
        async function unsubscribe() {
            await axios.get('/email/unsubscribe/' + link)
            setLoading(false)
        }

        try {
            unsubscribe()
        } catch(e) {
            console.log(e)
        }
    }, [link])

    if (isLoading) {
        return <Preloader />
    }

    if (!isLoading) {
        return <Popup errorText="We'll miss you.. Come back whenever you want" onHide={() => navigate('/')} />
    }

    return (
        <>
        </>
    )
}

export default UnsubscribeEmail