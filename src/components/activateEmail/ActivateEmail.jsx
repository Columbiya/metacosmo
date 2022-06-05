import React, { useEffect, useState } from 'react'
import { axios } from '../../http/http';
import { useParams, useNavigate } from 'react-router-dom';
import Popup from '../BuyCosmoland/Popups/Popup';
import Preloader from '../Preloader/Preloader';

const ActivateEmail = (props) => {
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { link } = useParams()

    useEffect(() => {
        async function activateSubscription() {
            await axios.get('/email/activate/' + link)
            setLoading(false)
        }

        try {
            activateSubscription()
        } catch(e) {
            console.log(e)
        }
    }, [link])

    if (isLoading) {
        return <Preloader />
    }

    if (!isLoading) {
        return <Popup errorText={'You successfully activated your subscription. Wait for the latest news!'} onHide={() => navigate('/')} />
    }

    return (
        <>
        </>
    )
}

export default ActivateEmail