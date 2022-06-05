import React, { useEffect, useState } from 'react'
import css from './BuyCvr.module.scss'
import BreadCrumbs from './../BreadCrumbs/BreadCrumbs';
import Warning from '../common/Warning/Warning';
import Button from './../common/Button/Button';
import News from '../Main/News/News';
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet';
import Footer from '../Footer/Footer';
import newsStore from '../../store/newsStore';
import Preloader from './../Preloader/Preloader';
import Popup from '../BuyCosmoland/Popups/Popup';
import { scrollTop } from './../../scrollTop';
import { COLLECTIONS_PATH } from '../../consts';
import { useNavigate } from 'react-router-dom';
import cvrStore from '../../store/cvrStore';
import { observer } from 'mobx-react-lite';

const BuyCvr = (props) => {
    const isMetamaskConnected = cvrStore.isConnected
    const currentChain = cvrStore.isChainBSC ? 'bsc mainnet': null
    const supply = cvrStore.cvr_emission
    const price = cvrStore.cvr_price / 100
    const percentage = Math.ceil(cvrStore.cvr_percent * 100) / 100
    const wallet = cvrStore.connectedWallet
    const stage = cvrStore.cvr_stage
    const youOwn = cvrStore.youOwn
    const sold = cvrStore.soldCVR
    const left = cvrStore.cvr_rest
    const [isLoading, setLoading] = useState(true)
    const [cvrAmount, setCvrAmount] = useState('')
    const [usdtAmount, setUsdtAmount] = useState('')
    const [error, setError] = useState('')
    const [succeed, setSucceed] = useState(false)
    const navigate = useNavigate()

    const fullPercentageClass = percentage == 100 ? css.full: null;

    useEffect(() => {
        async function init() {
            await newsStore.getNews(1, 4)
            await cvrStore.init()
            await cvrStore.checkMetamask()
            setLoading(false)
        }

        try {
            init()
        } catch(e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }, [cvrStore.isConnected, cvrStore.isChainBSC])

    const connectMetamask = async () => {
        await cvrStore.init()
        cvrStore.isConnected = true
    }

    const switchChain = async () => {
        try {
            await cvrStore.switchChain()
            cvrStore.isChainBSC = true
        } catch (e){
            console.log(e)
        }
    }

    const buyCvr = async () => {
        if (!cvrAmount && !usdtAmount) {
            return setError('Enter the number of CVRs you want to buy or the amount of USDT you want to spend on the purchase')
        }

        if (isNaN(cvrAmount) || isNaN(usdtAmount)) {
            return setError('The amount of CVR must be a number')
        }

        if (cvrAmount < 0 || usdtAmount < 0) {
            return setError("The amount can't be negative")
        }

        try {
            await cvrStore.purchaseCVR(cvrAmount, price)
            await cvrStore.getStatus()
            setSucceed(true)
        } catch(e) {
            return setError(e.message)
        }
    }

    const setUSDT = (e) => {
        if (isNaN(e.target.value)) {
            return
        }

        setUsdtAmount(e.target.value * price)
        setCvrAmount(e.target.value)
    }

    const setCVR = (e) => {
        if (isNaN(e.target.value)) {
            return
        }

        setCvrAmount(Math.floor(e.target.value / price))
        setUsdtAmount(e.target.value)
    }

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <section className={css.mainScreen} data-aos="fade-down">
                <div className="container">
                    <header className={css.header}>
                        <BreadCrumbs crumb={'Buy CVR'} />
                        {isMetamaskConnected && currentChain === 'bsc mainnet' &&
                            <div className={css.accountInfo}>
                                <span data-aos="fade-down"><strong>You own</strong>: <span className={css.colored}>{youOwn}</span> CVR</span>
                                <span data-aos="fade-down"><strong>WALLET: </strong>{wallet}</span>
                            </div>
                        }

                    </header>
                    {!isMetamaskConnected || currentChain !== 'bsc mainnet' ?
                        <div className={css.inner}>
                            <div className={css.info}>
                                <header className={css.infoHeader}>
                                    <p className={css.infoText} data-aos="fade-down">
                                        {isMetamaskConnected && currentChain == 'bsc mainnet' ? 'Switch to BSC mainnet':
                                                                                'Please connect MetaMask on BSC mainnet (BEP 20)'}
                                    </p>
                                    <div className={css.infoBtns}>
                                        {!isMetamaskConnected && 
                                            <>
                                                <Button style={{background: 'linear-gradient(54deg, #f99800, #f8750b)'}} 
                                                         data-aos="fade-down"
                                                        onClick={connectMetamask}>connect metamask</Button>
                                                <a href="https://www.youtube.com/playlist?list=PLAQ4lZX4VqcEGxppIgm0vMJxjbI2Ryego"
                                                    target="__blank" data-aos="fade-down">
                                                    Buying instructions
                                                </a>
                                            </>
                                        }
                                        {isMetamaskConnected && currentChain !== 'bsc mainnet' && 
                                        <>
                                            <Button isFilled={true} onClick={switchChain} data-aos="fade-down">Switch to bsc</Button>
                                            <a href="https://www.youtube.com/playlist?list=PLAQ4lZX4VqcEGxppIgm0vMJxjbI2Ryego"
                                                target="__blank" data-aos="fade-down">
                                                Buying instructions
                                            </a>
                                        </>

                                        }
                                    </div>
                                </header>
                                <footer>
                                    {!isMetamaskConnected &&
                                        <Warning data-aos="fade-down" errorText={
                                            <p data-aos="fade-down">Please install <strong><a target="__blank" href="https://metamask.io">MetaMask</a>
                                            </strong> of or open it in <strong>MetaMask Mobile</strong></p>
                                        } />
                                    }
                                </footer>
                            </div>
                        </div>:
                        null
                    }

                    {isMetamaskConnected && currentChain === 'bsc mainnet' &&
                        <>
                            <header className={css.buyHeader}>
                                <h2 className={css.headerTitle} data-aos="fade-down"><span>cvr</span> token sale</h2>
                                <h3 className={css.headerTitle} data-aos="fade-down"><span>stage {stage} / 10</span></h3>
                            </header>
                            <div className={css.cvrBuyInfo}>
                                <p className={css.cvrBuyText} data-aos="fade-down">Become a member of the multigalactic economy by purchasing CVR</p>
                                <div className={css.infoButtons}>
                                    <Button isColorBlack={true}
                                            href='https://bscscan.com/address/0x4de3a72f8f96d66b3c2e7da6fd49061e1879f722'
                                            data-aos="fade-down">token contract</Button>
                                    <Button isColorBlack={true} 
                                            href='https://pancakeswap.finance/add/0x4DE3a72f8F96D66B3c2E7Da6FD49061E1879f722/0x55d398326f99059fF775485246999027B3197955'
                                            data-aos="fade-down">
                                                liquidity pool
                                    </Button>
                                    <Button isColorBlack={true}
                                            href='https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x4de3a72f8f96d66b3c2e7da6fd49061e1879f722'
                                            data-aos="fade-down">exchange</Button>
                                </div>
                            </div>
                            <div className={css.cvrInfo}>
                                <div className={css.cvrInfoHeader}>
                                    <div className={css.cvrInfoItem}>
                                        <span data-aos="fade-down"><strong>Total Stage Supply</strong></span>
                                        <span data-aos="fade-down">{supply} CVR</span>
                                    </div>
                                    <div className={css.cvrInfoItem}>
                                        <span data-aos="fade-down"><strong>Current Price</strong></span>
                                        <span data-aos="fade-down">{price} USDT</span>
                                    </div>
                                </div>
                                <div className={css.bar} data-aos="zoom-out">
                                    <div className={css.progressBar + " " + fullPercentageClass} style={{width: `${percentage}%`}}>
                                        <span data-aos="fade-down">{percentage}%</span>
                                    </div>
                                </div>
                                <div className={css.cvrsInfo}>
                                    <span data-aos="fade-down">Sold {sold} CVR.</span> Left<span>{left} CVR</span>at this price.
                                </div>
                                <p className={css.cvrInfoText}>Make sure you have BNB in your wallet to pay for gas</p>
                                <div className={css.buyCvrForm}>
                                    <input type="number" value={cvrAmount} 
                                            className={css.nftsInput} 
                                            placeholder="Enter the amount of CVR" 
                                            data-aos="fade-down"
                                            onChange={setUSDT}/>
                                    <span>or</span>
                                    <input type="number" value={usdtAmount} 
                                            className={css.nftsInput} 
                                            placeholder="Enter the amount of USDT"
                                            data-aos="fade-down"
                                            onChange={setCVR} />
                                    <div className={css.instructionsLink}>
                                        <Button isFilled={true} onClick={buyCvr}>buy cvr</Button>
                                        <a href="https://www.youtube.com/playlist?list=PLAQ4lZX4VqcEGxppIgm0vMJxjbI2Ryego"
                                           target="__blank" data-aos="fade-down">
                                            Buying instructions
                                        </a>
                                    </div>
                                </div>


                            </div>
                        </>

                    }
                </div>
            </section>

            {error && 
                <Popup errorText={error} onHide={() => setError('')} />
            }

            {succeed &&
                <Popup onHide={() => setSucceed(false)} isCvr={true} amount={youOwn} />
            }

            <News />
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            data-aos="fade-down"
                            secondColText={'Learn more about Collections'}
                            thirdColText={<Button isColorBlack={true}
                                                  onClick={() => scrollTop(() => navigate(COLLECTIONS_PATH))}>learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>
            <Footer />

        </>
    )
}

export default observer(BuyCvr)