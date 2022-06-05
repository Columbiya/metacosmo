import React, { useEffect, useState } from 'react'
import metamaskStore from '../../store/metamaskStore'
import newsStore from '../../store/newsStore'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Button from '../common/Button/Button'
import Warning from '../common/Warning/Warning'
import Footer from '../Footer/Footer'
import BuyCvr from '../Main/BuyCvr/BuyCvr'
import Join from '../Main/Join/Join'
import News from '../Main/News/News'
import Preloader from '../Preloader/Preloader'
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet'
import css from './BuyCosmoland.module.scss'
import Popup from './Popups/Popup'
import { observer } from 'mobx-react-lite';
import { scrollTop } from '../../scrollTop'
import { useNavigate } from 'react-router-dom';

const BuyCosmoland = (props) => {
    const [isLoading, setLoading] = useState(true)
    const isMetamaskConnected = metamaskStore.isConnected
    const isCurrentChainMatic = metamaskStore.isChainMatic ? 'polygon': ''
    const walletInfo = metamaskStore.connectedWallet
    const youOwn = Number(metamaskStore.currentOwn)
    const total = Number(metamaskStore.currentSupplyCosmoland)
    const price = Number(metamaskStore.currentPriceCosmoland)
    const percentage = metamaskStore.percentage
    const cosmolandWallet = metamaskStore.cosmoland_address
    const usdcWallet = metamaskStore.usdc_address
    const [buyAmount, setBuyAmount] = useState('')
    const [error, setError] = useState('')
    const [purchaseSucceed, setSucceed] = useState(false)

    const fullPercentageClass = percentage === 100 ? css.full: null

    useEffect(() => {
        async function init() {
            newsStore.limit = 4
            newsStore.page = 1
            await newsStore.getNews()
            await metamaskStore.init()
            await metamaskStore.checkMetamask()
            setLoading(false)
        }
        try {
            init()
        } catch(e) {

        } finally {
            setLoading(false)
        }
    }, [metamaskStore.isConnected, metamaskStore.isChainMatic])

    const connectMetamask = async () => {
        await metamaskStore.connect_to_metamask()
    }

    const switchChain = async () => {
        await metamaskStore.switchChain()
    }

    const buy = async () => {
        if (!buyAmount) {
            return setError('Enter the amount of nfts you want to buy')
        }

        if (buyAmount < 0) {
            return setError(`NFT amount can't be negative`)
        }

        if (buyAmount > 150) {
            return setError(`You can buy only 150 CosmoLands per transaction`)
        }

        try {
            await metamaskStore.buyCosmoland(buyAmount)
        } catch(e) {
            return setError(e.message)
        }

        setSucceed(true)
    }

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <section className={css.buyCosmoland} data-aos="fade-down">
                <div className="container">
                    <div className={css.header}>    
                        <BreadCrumbs crumb={'Buy CosmoLand'} />
                        {isMetamaskConnected && isCurrentChainMatic === 'polygon' && 
                            <div className={css.walletInfo}>
                                <p data-aos="fade-down"><strong>You own:</strong> <span>{youOwn || 0}</span> Cosmoland NFTs</p>
                                <p data-aos="fade-down"><strong>WALLET:</strong> {walletInfo}</p>
                            </div>
                        }
                    </div>
                    {isMetamaskConnected && isCurrentChainMatic === 'polygon' && 
                        <div className={css.nftsInfo}>
                            <header className={css.nftsHeader}>
                                <div className={css.nftsInfoItem}>
                                    <span data-aos="fade-down"><strong>Sold NFTS</strong></span>
                                    <span data-aos="fade-down">{total} NFTs</span>
                                </div>
                                <div className={css.nftsInfoItem}>
                                    <span data-aos="fade-down"><strong>Current Price</strong></span>
                                    <span data-aos="fade-down">{price} USDC</span>
                                </div>
                            </header>
                            <div className={css.bar} data-aos="fade-down">
                                <div className={css.progressBar + " " + fullPercentageClass} style={{width: `${percentage}%`}}>
                                    <span data-aos="fade-down">{Math.ceil((percentage * 100)) / 100}%</span>
                                </div>
                            </div>
                            <div className={css.buy}>
                                <input type="number" value={buyAmount} 
                                        className={css.nftsInput} 
                                        placeholder="Enter the amount of NFT you want to buy" 
                                        data-aos="fade-down"
                                        onChange={e => setBuyAmount(e.target.value)}/>
                                <span className={css.buyLimitations} data-aos="fade-down">1-150<br />per transaction</span>
                                <div className={css.buyButtons}>
                                    <Button isFilled={true} onClick={buy} data-aos="fade-down">buy cosmoland</Button>
                                    <a className={css.buyingInstructions} 
                                       data-aos="fade-down"
                                       href="https://www.youtube.com/playlist?list=PLAQ4lZX4VqcFHpfNVacA7fYUz3TfKHUIk"
                                       target="__blank">Buying instructions</a>
                                </div>
                            </div>
                            <div className={css.cosmolandNFTs}>
                                <span data-aos="fade-down"> Find Cosmoland NFTs on <a className={css.nftsLink} 
                                                                target="__blank" href="https://opensea.io/collection/metacosmoland">OpenSea</a></span>
                            </div>
                            <div className={css.wallets}>
                                <p data-aos="fade-down"><strong>CosmoLand:</strong> <a href="https://polygonscan.com/address/0x0deee3b23764246e36cb84f6c1bdd9d414564db5"
                                                                  target="__blank">{cosmolandWallet}</a></p>
                                <p data-aos="fade-down"><strong>USDC:</strong> <a href="https://polygonscan.com/token/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                                                             target="__blank">{usdcWallet}</a></p>
                            </div>
                        </div>
                    }

                    <div className={css.inner}>
                        {!isMetamaskConnected || isCurrentChainMatic !== 'polygon' ?
                            <div className={css.buyInfo}>
                                <header className={css.buyHeader}>
                                    <p className={css.text} data-aos="fade-down">Connect MetaMask wallet and switch<br />to Polygon blockchain (MATIC) to see statistics</p>
                                    {!isMetamaskConnected && 
                                        <div className={css.flex}>
                                            <Button style={{background: 'linear-gradient(54deg, #f99800, #f8750b)'}} 
                                                    data-aos="fade-down"
                                                    onClick={connectMetamask}>connect metamask</Button>
                                            <a className={css.buyingInstructions} 
                                                data-aos="fade-down"
                                                href="https://www.youtube.com/playlist?list=PLAQ4lZX4VqcFHpfNVacA7fYUz3TfKHUIk"
                                                target="__blank">Buying instructions</a>
                                        </div>

                                    }
                                    {isCurrentChainMatic !== 'polygon' && isMetamaskConnected && 
                                        <div className={css.flex}>
                                            <Button isFilled={true}
                                                    data-aos="fade-down"
                                                    onClick={switchChain}>switch to polygon</Button>
                                            <a className={css.buyingInstructions} 
                                                data-aos="fade-down"
                                                href="https://www.youtube.com/playlist?list=PLAQ4lZX4VqcFHpfNVacA7fYUz3TfKHUIk"
                                                target="__blank">Buying instructions</a>
                                        </div>

                                    }
                                </header>
                                <Warning errorText={<span>Please install <strong><a href="https://metamask.io/" data-aos="fade-down" target="__blank">Metamask</a>
                                                    </strong> or open it in <strong>Metamask Mobile</strong></span>}  />
                            </div>:
                            null
                        }
                    </div>
                </div>
            </section>
            {purchaseSucceed &&
                <Popup onHide={() => setSucceed(false)} amount={youOwn} />
            }

            {error && 
                <Popup errorText={error} onHide={() => setError('')} />
            }

            <Join />
            <BuyCvr earn={true} /> 
            <News />
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            data-aos="fade-down"
                            secondColText={'Learn more about CosmoWay'}
                            thirdColText={<Button isColorBlack={true}
                                                  href="http://cosmoway.network/">learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>
            <Footer />

        </>
    )
}

export default observer(BuyCosmoland)