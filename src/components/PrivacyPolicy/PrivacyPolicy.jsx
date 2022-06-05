import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { COSMOLANDS_PATH, TERMS_OF_USE_PATH } from '../../consts'
import { scrollTop } from '../../scrollTop'
import newsStore from '../../store/newsStore'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Button from '../common/Button/Button'
import Footer from '../Footer/Footer'
import News from '../Main/News/News'
import Preloader from '../Preloader/Preloader'
import css from '../TermsOfUse/TermsOfUse.module.scss'
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet'

const PrivacyPolicy = (props) => {
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
            await newsStore.getNews(1, 4)
            setLoading(false)
        }

        getData()
    }, [])

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <div className="container">
                <BreadCrumbs crumb={'Privacy Policy'} />
            </div>  

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>PRIVACY POLICY</h2>
                    <div className={css.text}>
                        <p>
                            These terms and conditions apply to the use of games and other products developed by CosmoFund, a.s., ("MetaCosmo").
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>1. INTRODUCTION AND GENERAL TERMS</h2>
                    <div className={css.text}>
                        <p>
                            This privacy and data policy (“Privacy Policy”) applies and has effect in respect 
                            of all games, related online services (including online network play connectivity 
                            and interactivity) and other software and products made available by us (together 
                            the “Game(s)”), as well as any other online features relating to the Games including our 
                            website. Together the Game(s), the Website, the Downloads and the Support Center 
                            are referred to as the “Online Services”.
                        </p>
                        <p>
                            If you have any questions or comments about this Privacy Policy, please contact us at support@CosmoFund.space.
                        </p>
                        <p>
                            We are committed to protecting and respecting your privacy. The Privacy Policy explains 
                            the basis on which personal information we collect from you will be processed by us or 
                            on our behalf. Where we decide the purpose or means for which personal data you supply 
                            through these Online Services is processed, we are the “data controller.” We will comply 
                            with all applicable data protection laws, including the General Data Protection Regulation 
                            2016/679.
                        </p>
                        <p>
                            Please read this Privacy Policy carefully as it contains important 
                            information about the following:
                        </p>
                        <ul>
                            <li>What information we may collect about you;</li>
                            <li>How we will use information we collect about you;</li>
                            <li>Whether we will disclose your details to anyone else; and</li>
                            <li>Your choices and rights regarding the personal information you have provided to us.</li>
                        </ul>
                        <p>
                            This Privacy Policy forms a part of and should be read in conjunction with our terms of use, 
                            which can be found at <a onClick={() => scrollTop(() => navigate(TERMS_OF_USE_PATH))}>https://www.metacosmo.space/terms-of-use</a>.
                        </p>
                        <p>
                            The Online Services may contain hyperlinks to services owned and operated 
                            by third parties. These third party services may have their own privacy policies 
                            and we recommend that you review them. They will govern the use of personal information 
                            that you submit or which is collected by cookies and other tracking technologies 
                            whilst using these services. We do not accept any responsibility or liability for 
                            the privacy practices of such third party services and your use of these is at your own risk.
                        </p>
                        <p>
                            We may make changes to this Privacy Policy in future, which will be posted on this page. 
                            You should check this page from time to time to ensure you are aware of any changes. Where 
                            appropriate we may notify you of changes through the Games.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>2. INFORMATION WE MAY COLLECT ABOUT YOU</h2>
                    <div className={css.text}>
                        <p>
                            We collect and process the following information which may include your personal data. 
                            Contact information provided by you when you contact us or use the Support Centre (“Contact 
                            Information”)
                        </p>
                        <p>
                            We may ask you for, or you may submit, certain contact information to us whenever 
                            you contact us through the Support Centre or via support@CosmoFund.space.
                        </p>
                        <p>
                            This may include:
                        </p>
                        <ul>
                            <li>Your email adress</li>
                            <li>Your telephone number; and</li>
                            <li>Your name</li>
                        </ul>
                        <p>
                            Information collected for the purposes of providing analytics (“Analytics”).
                        </p>
                        <p>
                            We may collect technical information about your use of the Online Services through 
                            the use of tracking technologies and analytics.
                        </p>
                        <p>
                            Personal data we may collect includes the following:
                        </p>
                        <ul>
                            <li>
                                Your Device ID;
                            </li>
                            <li>
                                Your device operating system & version;
                            </li>
                            <li>
                                Your device make and model;
                            </li>
                            <li>
                                Game play attempts, progression and results;
                            </li>
                            <li>
                                Session game time start, end and duration;
                            </li>
                            <li>
                                The country of your Device;
                            </li>
                            <li>
                                Any in-game purchases you have made (The Room Pocket only);
                            </li>
                            <li>
                                The time, date and install source of your first download; and
                            </li>
                            <li>
                                Identification of crashes and defects.
                            </li>
                        </ul>
                        <p style={{textDecoration: 'underline'}}>Facebook and twitter</p>
                        <p>
                            If you post or upload any content about the Games on Facebook or Twitter, this will be under 
                            Facebook and Twitter’s privacy policies which can be found 
                            at <a href="https://www.facebook.com/full_data_use_policy" target="__blank">https://www.facebook.com/full_data_use_policy</a> 
                            and <a href="https://twitter.com/en/privacy" target="__blank">https://twitter.com/en/privacy</a>.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>3. WHY WE COLLECT INFORMATION ABOUT YOU</h2>
                    <div className={css.text}>
                        <p>
                            To provide our Games to you
                        </p>
                        <p>
                            We will use information about you (including Analytics) for delivering our Games 
                            to you under the terms of use agreed between us. The processing of information 
                            in this way is necessary for us to record your progress and current status within 
                            a Game, and to ensure the Games deliver the features promised and function properly, 
                            so that you have the best experience when playing any one of our Games.
                        </p>
                        <p>
                            To help us improve the Online Services and fix any problems
                        </p>
                        <p>
                            We may process information about you (including Analytics) so that we can analyze 
                            and improve our Games and Online Services.
                        </p>
                        <p>
                            This processing is also necessary for us to pursue our legitimate interests of (i) 
                            ensuring that our Online Services function properly so that you and other users have 
                            the best experience when playing any of our Game(s) and using the other Online Services; 
                            (ii) improving the quality of our Online Services, and providing a better experience to 
                            our users; and (iii) identifying and correcting any bugs in the Games and Online Services.
                        </p>
                        <p>Cookies</p>
                        <p>A cookie is a small file which asks permission to be placed on your computer’s hard drive. 
                            Once you agree, the file is added and the cookie helps analyze web traffic or lets you know 
                            when you visit a particular site. Cookies allow web applications to respond to you as an 
                            individual. The web application can tailor its operations to your needs, likes and dislikes 
                            by gathering and remembering information about your preferences.</p>
                        <p>
                            We use traffic log cookies to identify which pages are being used. This helps us analyze 
                            data about web page traffic and improve the Online Services in order to tailor them to 
                            customer needs. We only use this information for statistical analysis purposes and then 
                            the data is removed from the system.
                        </p>
                        <p>
                            Overall, cookies help us provide you with a better Website, by enabling us to monitor 
                            which pages you find useful and which you do not. A cookie in no way gives us access to 
                            your computer or any information about you, other than the data you choose to share with us.
                        </p>
                        <p>
                            You can choose to accept or decline cookies.
                        </p>
                        <p>
                            To respond to your enquiries and requests for support
                        </p>
                        <p>
                            We may process Contact Information so that we are able to properly respond to your 
                            enquiries and support requests either via the Support Centre or through MetaCosmo.space , 
                            in accordance with the terms of use agreed between us.
                        </p>
                        <p>
                            To prevent fraud and illegal activity
                        </p>
                        <p>
                            We process personal data for our legitimate interests of ensuring that any use of the 
                            Online Services is lawful and non-fraudulent, does not disrupt the operation of our services, 
                            does not harass our staff or other individuals, to enforce our legal rights and to comply 
                            with our legal obligations.
                        </p>
                        <p>
                            Where we reasonably believe that you are or may be in breach of any applicable laws or our 
                            terms of use, we may use your personal information to inform relevant third parties such 
                            as your law enforcement agencies about the content.
                        </p>
                        <p>
                            We work with the Digital Content Stores (listed below) to assist us with fraud prevention 
                            and the detection of any illegal activity (e.g. to verify in-app purchases made).
                        </p>

                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>4. Data sharing</h2>
                    <div className={css.text}>
                        <p>
                            We will share your information with third parties only in the ways that are described in this Privacy Policy
                        </p>
                        <p>
                            Group members, personnel, suppliers or subcontractors: We keep your information confidential, 
                            but may disclose it to any member of our group (which means our subsidiaries, our ultimate 
                            holding company and its subsidiaries, as defined in section 1159 of the Companies Act 2006), 
                            our personnel, suppliers or subcontractors insofar as it is reasonably necessary for the 
                            purposes set out in this Privacy Policy. However, this is on the basis that they do not make 
                            independent use of the information, and have agreed to safeguard it.
                        </p>
                        <p>
                            Merger or acquisition: If we are involved in a merger, acquisition, or sale of all or 
                            a portion of its assets, you will be notified via, account message and/or a prominent 
                            notice on our website of any change in ownership or uses of this information, as well 
                            as any choices you may have regarding this information.
                        </p>
                        <p>
                            Required by law: In addition, we may disclose your information to the extent that we are 
                            required to do so by law (which may include to government bodies and law enforcement 
                            agencies); in connection with any legal proceedings or prospective legal proceedings; 
                            and in order to establish, exercise or defend our legal rights (including providing 
                            information to others for the purposes of fraud prevention).
                        </p>
                        <p>
                            Enforcement: We may also disclose your personal information to third parties in order 
                            to enforce or apply the terms of agreements, to investigate potential breaches, or 
                            to protect the rights, property or safety, our customers, or others.
                        </p>
                        <p>
                            Digital Content Stores: Where the Games are downloaded through Steam, Xbox Live, 
                            PSN, Google Play, iTunes/Apple App Store, Oculus Store, Nintendo Switch eShop 
                            and/or Amazon App Store we may disclose your personal information to Valve Corporation, 
                            Microsoft, Sony, Google, Apple, Facebook, Nintendo and/or Amazon respectively for 
                            the purposes of facilitating any payments made through these platforms.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>5. YOUR RIGHTS IN RELATION TO PERSONAL DATA WHICH WE PROCESS RELATING TO YOU</h2>
                    <div className={css.text}>
                        <p>
                            You have the following rights over the way we process personal data relating to you, as set out in the table below. We aim to comply without undue delay, and within one month at the latest.
                        </p>
                        <p>
                            To make a request, please let us know by sending an email to support@CosmoFund.space.
                        </p>
                        <p>
                            Ask for a copy of data we are processing about you and have inaccuracies corrected
                        </p>
                        <p>
                            You have the right to request a copy of the personal information we hold about you and to have any inaccuracies corrected.
                        </p>
                        <p>
                            We will use reasonable efforts to the extent required by law to supply, correct or 
                            delete personal information held about you on our files (and with any third parties 
                            to whom it has been disclosed to).
                        </p>
                        <p>
                            Object to us processing data about you
                        </p>
                        <ul>
                            <li>
                                You can ask us to restrict, stop processing, or to delete your personal data if:
                            </li>
                            <li>
                                You consented to our processing the personal data, and have withdrawn that consent;
                            </li>
                            <li>
                                We no longer need to process that personal data for the reason it was collected;
                            </li>
                            <li>
                                We are processing that personal data because it is in the public interest or it is 
                                in order to pursue a legitimate interest of Victoria VR, a.s. or a third party, 
                                you don’t agree with that processing, and there is no overriding legitimate interest 
                                for us to continue processing it;
                            </li>
                            <li>
                                The personal data was unlawfully processed;
                            </li>
                            <li>
                                You need the personal data to be deleted in order to comply with legal obligations;
                            </li>
                            <li>
                                The personal data is processed in relation to the offer of a service to a child.
                            </li>
                        </ul>
                        <p>
                            Obtain a machine readable copy of your personal data, which you can use with another service provider
                        </p>
                        <ul>
                            <li>
                                If we are processing data in order to perform our obligations to you, or because you 
                                con-sented, or if that processing is carried out by automated means, we will help you 
                                to move, copy or transfer your personal data to other IT systems.
                            </li>
                            <li>
                                If you request, we will supply you with the relevant personal data in a commonly used, 
                                machine-readable and interoperable format where it is technically feasible, you can 
                                ask us to send this information directly to another IT system provider if you prefer.
                            </li>
                        </ul>
                        <p>Make a complaint to a Supervisory Authority</p>
                        <ul>
                            <li>
                                If you are unhappy with the way we are processing your personal data, please let us know 
                                by contacting us via the support services.
                            </li>
                            <li>
                                If you do not agree with the way we have processed your data or responded to your 
                                concerns, an alternative is to submit a complaint to a Data Protection Supervisory 
                                Authority.
                            </li>
                        </ul>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>6. DATA RETENTION</h2>
                    <div className={css.text}>
                        <p>
                            We will hold your personal information on our systems for as long as is necessary for 
                            the relevant service, or as otherwise described in this Privacy Policy.
                        </p>
                        <p>
                            We will hold any correspondence sent to <a>support@CosmoFund.space</a> or via the Support Centre 
                            (which may include Contact Information) for a period of 12 months so that we can refer 
                            back to any previous support/help requests made by users in order that we are able 
                            to offer our users the best level of support and help.
                        </p>
                        <p>
                            At the end of these periods or once you withdraw your consent, your data is 
                            deleted or destroyed.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>7. children</h2>
                    <div className={css.text}>
                        <p>
                            We do not use our Online Services to knowingly solicit information from or market to 
                            children under the age of 15. Our terms of use prohibit users aged under 15 years from 
                            accessing our Online Services. In the event that we learn that we have collected 
                            personal information from a child under 15 years of age we will delete that information 
                            as quickly as possible. If you believe that we might have any information from or about 
                            a child under 15 years of age please contact us at <a>support@CosmoFund.space</a>.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>8. security</h2>
                    <div className={css.text}>
                        <p>
                            We will take all reasonable technical and organizational precautions to prevent the 
                            loss misuse or alteration of your personal information.
                        </p>
                        <p>
                            Please be aware that, although we endeavour to provide reasonable security for information 
                            we process and maintain, no security system can prevent all potential security breaches.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>9. INTERNATIONAL DATA TRANSFERS</h2>
                    <div className={css.text}>
                        <p>
                            It is possible that your personal information may be transferred outside of the EEA by 
                            Valve Corporation, Amazon, Flurry, Google, Unity Analytics, Freshdesk or Salesforce 
                            Desk. We recommend that you refer to the privacy policies and/or terms and conditions 
                            of these third parties if you are concerned about your data being transferred outside the EEA.
                        </p>
                        <p>
                            In respect of The Room Pocket only, where you make an in-Game purchase via iTunes, 
                            the confirmation that your purchase is valid as required by Apple for such purchases 
                            will be processed using servers hosted in Singapore in the event that there is a problem 
                            with the servers hosted in Ireland.
                        </p>
                        <p>
                            Where we transfer your information outside of the EEA, we have agreements in place with 
                            those parties which include standard data protection clauses adopted by a data protection 
                            regulator and approved by the European Commission to ensure that appropriate safeguards 
                            are in place to protect your personal data. If you would like to find out more about these 
                            safeguards, please let us know by writing to <a>support@CosmoFund.space</a>.
                        </p>
                    </div>
                </div>
            </section>

                        <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>contact information</h2>
                    <div className={css.text}>
                        <p>
                            All questions, comments or enquiries should be directed to MetaCosmo, a.s. 
                            at <a>support@CosmoFund.space</a>. We will endeavour to respond to any query or 
                            questions within three business days.
                        </p>
                        <div className={css.rights}>
                            © 2022 MetaCosmo, a.s. All trade marks are the property of the relevant owners. All rights reserved.
                        </div>
                    </div>
                </div>
            </section>  

            <News />
            <div className={css.learnMoreContainer}>
                <Snippet title={'Learn more'}
                            data-aos="fade-down"
                            secondColText={'Learn more about Cosmolands'}
                            thirdColText={<Button isColorBlack={true}
                                                  onClick={() => scrollTop(() => navigate(COSMOLANDS_PATH))}>learn more</Button>}
                            secondColTextWidth={500} /> 
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy