import React, { useEffect, useState } from 'react'
import Button from '../../common/Button/Button'
import css from './Popup.module.scss'
import congratsImage from '../../../assets/buy-cosmolands/congrats-image.png'
import cvrCongratsImage from '../../../assets/buy-cvr/cvr-congrats-image.png'
import Warning from '../../common/Warning/Warning'
import { composeValidators } from './../../../validators/composeValidators';
import { required } from './../../../validators/validators';
import { Field, Form } from 'react-final-form';
import { axios } from '../../../http/http'
import Preloader from './../../Preloader/Preloader';
import calculator from '../../../assets/main/calculator.png'
import statistics from '../../../assets/main/statistics.png'
import useTokens from './../../../hooks/useTokens';
import tokensStore from '../../../store/tokensStore'
import { PANCAKE_API_URL } from '../../../consts'
import { useQuery } from '@apollo/client';
import { PAIR_QUERY } from '../../../apollo/queries'
import { useMoralisWeb3Api } from "react-moralis";

const Popup = ({ errorText, onHide, amount, isCvr, isSubscribe, isTokensPrice }) => {
    const [isLoading, setLoading] = useState(false)
    const date = new Date(Date.now()).toLocaleString().split(',')[0]
    const Web3Api = useMoralisWeb3Api()
    // const { loading: cosmoLoading, data, error } = useQuery(PAIR_QUERY, {variables: {id: ''}})

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [])


    useEffect(() => {
        if (isTokensPrice) {
            async function getTokens() {
                const addresses = ['0x60E5FfdE4230985757E5Dd486e33E85AfEfC557b', '0x55ece1750677af5fccbf0f05b52169946c371878', '0x4de3a72f8f96d66b3c2e7da6fd49061e1879f722']
                const prices = []

                const options = {
                    chain: 'bsc',
                    exchange: "PancakeSwapv2"
                }

                const ethOptions = {
                    chain: "eth",
                    exchange: "uniswapv3"
                }

                for (let address of addresses) {
                    const price = await Web3Api.token.getTokenPrice({...options, address })
                    prices.push(price)
                }

                const [cosmo, cclp, cvr] = prices
                const cosmoPrice = await Web3Api.token.getTokenPrice({...ethOptions, address: "0x27cd7375478F189bdcF55616b088BE03d9c4339c"})
                console.log(cosmoPrice, 'cosmoPrice')
                console.log((cosmo.nativePrice.value / 10e18).toFixed(20), (cclp.nativePrice.value / 10e18).toFixed(20), (cvr.nativePrice.value / 10e18).toFixed(20), 'bsc tokens')
            }

            getTokens()
        }
    }, [isTokensPrice])


    const onDevSubmit = (data) => {
        async function send() {
            setLoading(true)
            await axios.post('/email/send-feedback', {...data})
            setLoading(false)
            onHide()
        }

        send()
    }

    return (
        <>
            <div className={css.placeholder} onClick={onHide}></div>
            <div className={css.popup}>
                {errorText && 
                    <>
                        <Warning errorText={errorText} />
                        <div className={css.buttonContainer}>
                            <Button isColorBlack={true} onClick={onHide}>ok</Button>
                        </div>
                    </>
                }

                {!errorText && !isSubscribe && !isTokensPrice && 
                    <div className={css.congratsContainer}>
                        <div>
                            <img src={isCvr ? cvrCongratsImage: congratsImage} alt="" />
                        </div>
                        <div className={css.congratsText}>
                            <h3 className={css.congratsTitle}>congratulations!</h3>
                            <span>Purchase completed</span>
                            <span>{isCvr ? 'CVRs': 'Cosmolands'} on your wallet - {amount}</span>
                            <Button isColorBlack={true} onClick={onHide}>ok</Button>
                        </div>
                    </div>
                    

                }

                {isSubscribe &&
                    <Form onSubmit={onDevSubmit} render={({ handleSubmit, form, submitting }) => (
                        <form onSubmit={handleSubmit} className={css.form}>
                            <Field name="name" validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>Name</label>
                                        <div className={css.fieldContainer}>
                                            <input type='text' className={css.input} placeholder='name' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div> 
                                    </div>
                                )}
                            </Field>
        
                            <Field name="specialization" validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>Specialization</label>
                                        <div className={css.fieldContainer}>
                                            <input type='text' className={css.input} placeholder='specialization' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div>
                                    </div>
                                )}
                            </Field>
        
                            <Field name="howYouCanHelp" validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>How can you help us build a new world</label>
                                        <div className={css.fieldContainer}>
                                            <textarea type='text' className={css.input} placeholder='How can you help us build a new world' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div>
                                    </div>
                                )}
                            </Field>

                            <Field name="email" validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>Your email</label>
                                        <div className={css.fieldContainer}>
                                            <input type='text' className={css.input} placeholder='Your email' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div>
                                    </div>
                                )}
                            </Field>

                            <Field name="telegram">
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>Your telegram</label>
                                        <div className={css.fieldContainer}>
                                            <input type='text' className={css.input} placeholder='Your telegram' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div>
                                    </div>
                                )}
                            </Field>
                            
                            {isLoading && <Preloader />}

                            <div className={css.becomeDevBtnContainer}>
                                <Button type="submit" disabled={submitting} isFilled={true}>Send feedback</Button>
                            </div>
                        </form>
                    )}>
        
                    </Form>
                }

                {isTokensPrice && 
                    <div onClick={onHide}>
                        <header className={css.header}>
                            <h2 className={css.title}><span>Tokens</span> price</h2>
                            <div>
                                <span className={css.active}>Tokens</span>
                                <span>Powers</span>
                            </div>
                        </header>

                        <footer>
                            <div className={css.tokensInfo}>
                                <div className={css.date}>
                                    <img src={calculator} alt="" />
                                    {date}
                                </div>
                                <ul className={css.tokensList}>
                                    <li className={css.tokensItem + " " + css.cosmo}>
                                        cosmo
                                        <ul className={css.tokensDescr}>
                                            <li className={css.tokensDescrItem}>
                                                <p>Price</p>
                                                <div className={css.triangle + " " + css.green}>perce%</div>
                                                <span className={css.price}>0.1 USDT</span>
                                            </li>
                                            <li className={css.tokensDescrItem}>
                                                <p>Liquidity</p>
                                                <div className={css.triangle + " " + css.red}>perce%</div>
                                                <span className={css.price}>0.1 USDT</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={css.tokensItem + " " + css.cclp}>
                                        cclp
                                        <ul className={css.tokensDescr}>
                                            <li className={css.tokensDescrItem}>
                                                <p>Price</p>
                                                <div className={css.triangle + " " + css.green}>perce%</div>
                                                <span className={css.price}>0.1 USDT</span>
                                            </li>
                                            <li className={css.tokensDescrItem}>
                                                <p>Liquidity</p>
                                                <div className={css.triangle + " " + css.red}>perce%</div>
                                                <span className={css.price}>0.1 USDT</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={css.tokensItem + " " + css.cvr}>
                                        cvr
                                        <ul className={css.tokensDescr}>

                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className={css.statistics}>
                                <header className={css.statisticsHeader}>
                                    <div className={css.statisticsInfo}>
                                        <img src={statistics} alt="" />
                                        <h2>24 hours statistics</h2>
                                    </div>
                                    <div>
                                        <Button isColorBlack={true}>exchange</Button>
                                    </div>
                                </header>
                                <footer className={css.statisticsTable}>
                                    <div className={css.tableCol}>
                                        <h3>Tokens</h3>
                                        <span>Cosmo</span>
                                        <span>CCLP</span>
                                        <span>CVR</span>
                                        <span>CUP</span>
                                        <span>CMP</span>
                                        <span>CBP</span>
                                        <span>CDP</span>
                                        <span>CAP</span>
                                    </div>
                                    <div className={css.tableCol}>
                                        <h3>Price (Stable Coin)</h3>
                                        <span>cosmo price</span>
                                        <span>2.0</span>
                                        <span>100.0</span>
                                        <span>2.0</span>
                                        <span>100.0</span>
                                        <span>5.0</span>
                                        <span>5.0</span>
                                        <span>2.0</span>
                                    </div>
                                    <div className={css.tableCol}>
                                        <h3>Liquidity</h3>
                                        <span>100.0</span>
                                        <span>100.0</span>
                                        <span>5.0</span>
                                        <span>100.0</span>
                                        <span>2.0</span>
                                        <span>5.0</span>
                                        <span>2.0</span>
                                        <span>100.0</span>
                                    </div>
                                </footer>
                            </div>
                        </footer>
                    </div>
                }

                </div>
        </>

    )
}

export default Popup