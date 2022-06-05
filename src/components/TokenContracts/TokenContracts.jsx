import React, { useCallback, useEffect, useState } from 'react'
import BreadCrumbs from './../BreadCrumbs/BreadCrumbs';
import css from './TokenContracts.module.scss'
import { observer } from 'mobx-react-lite';
import metamaskStore from '../../store/metamaskStore'
import Button from './../common/Button/Button';
import { ethOptions, BNBoptions, polygonOptions } from './../../metamask/metamask-chains-options';
import metamaskTokensParams from '../../metamask/metamask-tokens-params'
import Contract from './Contract/Contract';
import News from './../Main/News/News';
import Snippet from './../WhatIsMetacosmo/Snippet/Snippet';
import { COLLECTIONS_PATH } from '../../consts';
import Footer from './../Footer/Footer';
import newsStore from '../../store/newsStore';
import Preloader from '../Preloader/Preloader';
import { useNavigate } from 'react-router-dom';
import { scrollTop } from '../../scrollTop';
import string1 from '../../assets/collections/spring-1.png'
import string2 from '../../assets/collections/spring-2.png'

const TokenContracts = (props) => {
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()
    const isMetamaskConnected = metamaskStore.isConnected
    const currentChain = metamaskStore.currentChain
    let keys = {
        '0x89': 'Polygon',
        '0x38': 'BEP20',
        '0x1': 'ERC20'
    }
    const getTokens = useCallback(() => 
                                 metamaskTokensParams.filter(token => token.chain == keys[currentChain]),
                                 [currentChain])
    const tokens = getTokens()

    //bnb - 0x38
    //0x1 - ethereum
    //0x89 polygon

    useEffect(() => {
        async function init() {
            await metamaskStore.getConnectedAccount()
            await metamaskStore.getCurrentChainId()
            metamaskStore.subscribeOnChainChanged()
            metamaskStore.subscribeOnConnectionReset()

        } 

        init()
    }, [])

    useEffect(() => {
        async function getNews() {
            await newsStore.getNews(1, 4)
            setLoading(false)
        }

        getNews()
    }, [])

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <div className="container">
                <BreadCrumbs crumb={'Token Contracts'} />
            </div>

            <section className={css.mainScreen}>
                <div className="container">
                    <div className={css.mainScreenContainer}>
                        <div className={css.buttons}>
                        {!isMetamaskConnected ?
                                <div className={css.connectContainer}>
                                    <Button style={{background: 'linear-gradient(54deg, #f99800, #f8750b)'}} 
                                            onClick={() => metamaskStore.connect_to_metamask(true)}>connect metamask
                                    </Button>
                                    <p>
                                        To see contracts, <a href="https://metamask.io" target="__blank">download</a> the MetaMask wallet and click the Connect MetaMask button
                                    </p>
                                </div>:
                                <>
                                    <Button isFilled={true} animatedGradient={currentChain == '0x1' ? true: false} boxShadowOnHover={true} onClick={() => metamaskStore.switchChain(ethOptions)} style={{width: '300px'}}>
                                        {currentChain == '0x1' ? 'Connected to ETH': 'Switch to ETH'}
                                    </Button>

                                    <Button isFilled={true} animatedGradient={currentChain == '0x38' ? true: false} boxShadowOnHover={true} onClick={() => metamaskStore.switchChain(BNBoptions)} style={{width: '300px'}}>
                                        {currentChain == '0x38' ? 'Connected to BSC': 'Switch to BSC'}
                                    </Button>

                                    <Button isFilled={true} animatedGradient={currentChain == '0x89' ? true: false} boxShadowOnHover={true} onClick={() => metamaskStore.switchChain(polygonOptions)} style={{width: '300px'}}>
                                        {currentChain == '0x89' ? 'Connected to Polygon': 'Switch to Polygon'}
                                    </Button>       
                                </>
                            }
                        </div>

                        <div className={css.contracts}>
                            {isMetamaskConnected &&
                                tokens.map(token => (
                                    <Contract key={token.options.address} {...token} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <img src={string1} alt="" className={css.string + " " + css.first} />
                <img src={string2} className={css.string + " " + css.second} alt="" />
            </section>

            <News noAos={true} />
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            secondColText={'Learn more about Collections'}
                            thirdColText={<Button isColorBlack={true}
                                                  onClick={() => scrollTop(() => navigate(COLLECTIONS_PATH))}>learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>
            <Footer />
        </>
    )
}

export default observer(TokenContracts)