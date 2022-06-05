import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { COSMOLANDS_PATH } from '../../consts'
import { scrollTop } from '../../scrollTop'
import newsStore from '../../store/newsStore'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Button from '../common/Button/Button'
import Footer from '../Footer/Footer'
import News from '../Main/News/News'
import Snippet from '../WhatIsMetacosmo/Snippet/Snippet'
import css from './TermsOfUse.module.scss'

const TermsOfUse = (props) => {
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
            await newsStore.getNews(1, 4)
            setLoading(false)
        }

        getData()
    }, [])

    return (
        <>
            <div className="container">
                <BreadCrumbs crumb={'Terms Of Use'} />
            </div>  
            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>introduction</h2>
                    <div className={css.text}>
                        <p>These are the terms and conditions (the ‘T&Cs’) MetaCosmo, a.s. (‘we’, ‘us’, ‘our’, ‘MetaCosmo) 
                            use to govern our websites and games (the “Games”, each a “Game”) (except where a Game or 
                            website sets out that other terms and conditions apply). We’ve tried to keep them as short as 
                            possible, to help you understand how you can use each of the Games and our websites.</p>
                        <p>
                            If you don’t want to or cannot agree to these T&Cs, then you must not use the website or buy 
                            (where applicable), download, use or play the Games. By using the website or buying (where 
                            applicable), downloading, installing, updating, using or playing the Game, or by clicking ‘accept’, 
                            ‘start’ or similar (where applicable), you agree to these T&Cs.
                        </p>
                        <p>
                            We may offer each Game through application and/or games stores including, without 
                            limitation, the Apple App Store, Google Play Store, the Amazon Appstore, the Oculus Store 
                            (each a ‘Store’). That means you need a Store account to play the Games, and your use of each 
                            Store is subject to the terms of use applicable to that Store (as may change from time to time).
                        </p>
                        <p>
                            Where applicable, the Stores may allow you to get a refund in respect of or 
                            in connection with a Game, in some cases. You should contact the Store through 
                            which you made a purchase, where applicable, in the event that you desire a refund.
                        </p>
                        <p>
                            Please read and implement the Health and Safety Notice at section 6 below before you play our Games.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>summary</h2>
                    <div className={css.text}>
                        <p>These T&Cs are a legal agreement between us and you, so please read it carefully.</p>
                        <p>
                            These T&Cs describe how you are permitted to use the Games and our websites.
                        </p>
                        <p>
                            If you break these terms and conditions, we may stop you using the Games and/or 
                            our websites, contact you regarding your use of them or exercise other remedies that 
                            we have available to us at law or in equity.
                        </p>
                        <p>
                            Each Game and website are provided on an ‘as is’ basis, and we make no (and hereby 
                            disclaim any and all) representations and warranties with respect to it, to the extent 
                            permitted by applicable law.
                        </p>
                        <p>
                            These T&Cs may change from time to time. Please check back with us periodically 
                            to make sure that you’re aware of the latest version.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>what you can do</h2>
                    <div className={css.text}>
                        <p>As long as you follow the rest of the terms and conditions in these T&Cs, you can 
                            use the website for your, personal use and we grant you a non-exclusive, revocable, 
                            non-transferable, non-sublicensable, limited right and license to do the same. Similarly, 
                            as long as you follow the rest of the terms and conditions in these T&Cs, you can use the 
                            Game in the following ways:</p>
                        <p>
                            To play the Games. We grant you a non-exclusive, revocable, non-transferable, 
                            non-sublicensable, limited right and license to use one copy of the relevant Game 
                            for your personal, non-commercial use for gameplay in accordance with these T&Cs.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>what you cannot do</h2>
                    <div className={css.text}>
                        <p>We use commercially reasonable endeavours to protect our websites, 
                            Games and our users, and it is important that the websites and Games are 
                            not used in a way which is unfair or which might harm our rights or the rights 
                            of others. Accordingly, we reserve the right to take any and all action 
                            available to us with respect to any conduct that violates the terms or spirit 
                            of these T&Cs.</p>
                        <p>
                            The following sets out some of the things that you cannot do with 
                            any Game (and, where applicable, our websites):
                        </p>

                        <ul>
                            <li>
                                do not share, rent, resell, or make available copies of the Game 
                                (or any ‘hacked’ versions) or otherwise use the Game or our websites 
                                commercially in any way except as expressly permitted by law (such as under 
                                ‘fair dealing or ‘fair use’ laws);
                            </li>
                            <li>
                                do not cheat, rig, fix, circumvent rules or processes, use multiple accounts, exploit 
                                ‘loop-holes’ or bugs, or use our Games or websites in a way which is not within the 
                                spirit intended by our T&Cs or in a way which may harm the experience of other users 
                                of the Games and websites;
                            </li>
                            <li>
                                do not modify or adapt the Game or our websites or hack, merge, translate, 
                                creative derivatives from the Game or our websites, mimic, disable the Game 
                                or our websites or tamper with them;
                            </li>
                            <li>
                                do not make public or commercial use, by any means, of any Game or our websites, 
                                products or services without our prior written consent;
                            </li>
                            <li>
                                do not provide hyperlinks to, or other forms of links to, our websites for 
                                obtaining profit or other commercial gain without our express prior written consent;
                            </li>
                            <li>
                                do not reverse engineer, decompile, disassemble, decipher or otherwise attempt 
                                to derive the source code for any underlying software or other intellectual property 
                                used to provide the Game or our websites;
                            </li>
                            <li>
                                where applicable, do not share any password or security information you use to 
                                access the Game or our websites with any other person;
                            </li>
                            <li>
                                do not delete, obscure, remove or otherwise prevent the proper display of 
                                intellectual property (including without limitation copyright and trade mark 
                                notices or other legal lines or credits) notices in our Games or websites;
                            </li>
                            <li>
                                do not do anything (or attempt to do anything) which might disrupt use of the Game 
                                or websites by us or other users, or which could threaten, harass or upset other users 
                                of the Game or website community; and
                            </li>
                            <li>
                                do not make anything available on or through the Game or our websites that 
                                violates the rights of third parties (including without limitation their 
                                intellectual property or privacy rights).
                            </li>
                        </ul>
                        <p>
                            We may make codes of conduct and usage rules and guidance available to you, 
                            which may provide additional rules and guidance about your use of our Games and/or 
                            websites. We require that you comply with these rules so that we can properly operate 
                            our Games and websites and to ensure that our users have a safe and fair experience. 
                            To the extent of ambiguity or conflict between a code of conduct and these T&Cs, these 
                            T&Cs prevail.
                        </p>
                        <p>
                            Please make sure you read these T&Cs carefully and understand them. If we are threatened 
                            with or face legal action because you break any of the terms and conditions in these T&Cs, 
                            we may hold you responsible. That means you may need to compensate us, and pay us back for 
                            any damage we suffer as a result, and for our legal and other expenses.
                        </p>
                        <p>
                            If you breach these T&Cs, we have the right to suspend, terminate or otherwise take under 
                            review your licenses granted hereunder.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>THIRD PARTY CONTENT IN OUR GAMES & WEBSITES</h2>
                    <div className={css.text}>
                        <p>
                            The Games and our websites may include third party website links and other 
                            third-party materials such as posts, comments, videos, images and other content such 
                            as other user-generated content. We are not responsible for this content. We may moderate 
                            or otherwise check such content in some instances, but we are not required to do so. 
                            Depending upon the particular Game or website and the content involved, we may be solely 
                            a mere conduit for the transmission, storage and retrieval of the relevant content.
                            In other words, we may not review content for its legality, tastefulness or its compliance 
                            with these T&Cs.
                        </p>
                        <p>
                            We may rely upon a reporting system whereby players and users can report 
                            third party or user-generated content to us, such as because it is illegal 
                            content or as it is content which breaches these T&Cs. A reporting mechanism may 
                            be made available for these purposes in the relevant website or Game, and you can 
                            also let us know by contacting us at: support@CosmoFund.space
                        </p>
                        <p>
                            Where we provide the functionality for you to upload any content, 
                            including any user generated content, to our Games and/or websites such as, 
                            without limitation, posts, photos, videos, images, voice communications, text 
                            and other communications, comments or other content or files, you agree and undertake 
                            that the content:
                        </p>
                        <ul>
                            <li>        
                                is lawful and will not give rise to any actual or possible civil or criminal 
                                liability for you or for us and does not promote any unlawful or illegal activity 
                                (including without limitation in respect of the territory and local laws applicable
                                 where you may upload such content);
                            </li>
                            <li>        
                                does not infringe the rights of any third party, including without limitation their 
                                intellectual property or privacy rights;
                            </li>
                            <li>        
                                does not include any virus, worm, logic bomb, bug or any other form of malicious 
                                or technically harmful data, code, link or information;
                            </li>
                            <li>        
                                is not violent, threatening, abusive, pornographic, defamatory, discriminatory, obscene 
                                or otherwise morally objectionable (in our reasonable opinion);
                            </li>
                            <li>
                                does not harass or defame any person or organization;
                            </li>
                            <li>
                                does not commercially market or promote any third party, product or organization;
                            </li>
                            <li>
                                does not seek to or attempt to make any arrangement to meet a child under the 
                                age of eighteen (18);
                            </li>
                            <li>
                                does not contain any restricted or security related content such as the passwords, 
                                medical information or confidential information of any person; and
                            </li>
                            <li>
                                does not solicit, encourage, invite, advocate, request or provoke directly or 
                                indirectly any of the foregoing or any illegal activity or breach of these T&Cs.
                            </li>
                        </ul>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>health and safety precautions</h2>
                    <div className={css.text}>
                        <p>The Game may contain flashing lights, realistic images and simulations.</p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>PLEASE READ THIS NOTICE BEFORE YOU USE OUR GAMES</h2>
                    <div className={css.text}>
                        <p>Some people experience side effects such as motion sickness, epileptic seizures, 
                            momentary loss of consciousness, dizziness, motion sickness or nausea when viewing 
                            certain types of flashing light or pattern including when using VR equipment and VR 
                            content. This may happen where a person has not previously suffered in this way and have 
                            no known symptoms or history of such side effects. If you or anyone considering using 
                            our Games suffers or has suffered in this way, has a condition which makes this possible 
                            or has experienced similar symptoms, please consult a doctor before using the Games. 
                            If you or they are already playing a Game please stop and consult a doctor.</p>
                        <p>
                            If you or any part of you feels tired, fatigue or discomfort whilst playing 
                            a Game please stop and rest. If it continues after you stop playing, please consult 
                            a doctor. If you have suffered or suffer from an injury play a Game, particularly 
                            together with VR equipment, can aggravate it. In that case, please consult a doctor. 
                            Failure to follow this advice may result in long term injury.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>PLEASE FOLLOW THESE PRECAUTIONS WHENEVER USING A GAME WITH VR EQUIPMENT:</h2>
                    <div className={css.text}>
                        <p>Please:</p>
                        <ul>
                            <li>
                                only play a Game with VR equipment (including VR headsets and sensors) in a safe environment;
                            </li>
                            <li>
                                be aware of your surroundings before playing a Game with VR equipment;
                            </li>
                            <li>
                                do not use a VR headset and/or VR hardware, if you are sick, sleep, or feel tired, 
                                fatigue or discomfort, under the influence of alcohol or drugs, or hung-over;
                            </li>
                            <li>
                                do not play a Game with VR equipment while in a moving vehicle such as a car, bus, or train;
                            </li>
                            <li>
                                do not use VR equipment for too long at any one time,
                            </li>
                            <li>
                                take 10 - 15 minute break every 30 minutes.
                            </li>
                        </ul>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>our liability</h2>
                    <div className={css.text}>
                        <p>Nothing in these T&Cs will limit any of your rights which may not be excluded under 
                            law. This means that, notwithstanding any other terms in these T&Cs:
                        </p>
                        <ul>
                            <li>
                                our liability to you for personal injury or death caused by our negligence 
                                is not excluded or limited, nor is our liability to you for any fraudulent 
                                representation we make;
                            </li>
                            <li>
                                if a paid-for Game is faulty when we deliver it to you, we will try to repair or replace it;
                            </li>
                            <li>
                                if we can’t fix that fault within a reasonable time, or without significant inconvenience, 
                                you’re entitled to all or some of your money back that you paid to use the Game 
                                (where applicable);
                            </li>
                            <li>
                                if, as a result of the fault, the Game damages your device and we haven’t 
                                used reasonable care and skill, you may be entitled to a repair or compensation.
                            </li>
                        </ul>
                        <p>
                            Other than as mentioned above, our overall liability to you is limited to the 
                            price you paid to use the relevant Game or, where no price was paid, £10.
                        </p>
                        <p>
                            The Game and our websites, along with any updates, upgrades and any additional content, 
                            are provided ‘as is’. That means we don’t make any promises to you about the Game 
                            or websites other than that they will be of satisfactory quality, as described, 
                            and fit for purpose. We don’t make any other promises about the Game or our websites.
                        </p>
                        <p>
                            We’ll use reasonable skill and care to provide the relevant Game and our websites, 
                            but can’t guarantee there won’t be any errors, bugs or interruptions to them, or that 
                            our Games will not cause any problems with your device.
                        </p>
                        <p>
                            If we release a version of a Game which is not yet complete, because we want to give you early 
                            access, then you’ll need to bear in mind that it may have some errors, bugs or interruptions.
                        </p>
                        <p>
                            Please do let us know straight away if you discover any problems with a Game, so we 
                            are aware and can decide whether it is something we need to address in a future release 
                            or update (if there is a future release or update). You can contact us to let us know about 
                            any problems with a Game the following email address support@CosmoFund.space.
                        </p>
                        <p>
                            Any views expressed in the Games or our websites are the views of the authors 
                            and not of us, unless we expressly specify otherwise.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>Privacy</h2>
                    <div className={css.text}>
                        <p>
                            Under data protection legislation, we are required to provide you with certain 
                            information about who we are, how we process your personal data and for what purposes 
                            and your rights in relation to your personal data and how to exercise them. 
                            This information is provided in our Privacy Policy and it is important that 
                            you read that information.
                        </p>
                        <p>
                            Please take care when disclosing any information about yourself on or through our 
                            websites or Games. A known risk of the public internet is people not necessarily 
                            being who they say they are, or behaving in an unreliable, misleading or illegal 
                            way. We cannot control information you choose to provide to other users, where our 
                            websites or Games include facilities for you to interact with others. We strongly 
                            recommend that you exercise caution, act sensibly and not disclose any information 
                            which you do not wish to have disseminated into the wider public internet. Any 
                            disclosures of your information by you to other users are made by you at your own 
                            risk. Once information is disclosed by you in this way, it may not be possible for 
                            us to prevent its dissemination over the public internet.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>Intellectual property</h2>
                    <div className={css.text}>
                        <p>
                            All intellectual property rights in the Games, and our websites, throughout 
                            the world belong to us and our licensors, and the rights in the relevant Game 
                            and websites are granted to you by way of a limited license (and are not sold) 
                            to you. You have no intellectual property rights in, or to, the Games or websites 
                            other than the right to use the relevant Game or website in accordance with these 
                            T&Cs on the applicable platform / Store and device. Except as otherwise expressly 
                            provided in these T&Cs, all rights are reserved by us and our licensors.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>Operating system and device requirements</h2>
                    <div className={css.text}>
                        <p>
                            Each Game requires a certain operating system version (or later) and a minimum amount 
                            of memory to play the Game. Please review the Game-specific minimum requirements where 
                            these are made available to you in the relevant Game description / store page information 
                            to ensure that the Game is compatible with your device.
                        </p>
                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>TERMINATION AND SERVICE OUTAGE</h2>
                    <div className={css.text}>
                        <p>
                            We may temporarily discontinue any or all Games, websites and any and all services 
                            and content available through them at any time for the purposes of upgrades, maintenance 
                            or other service administration reasons. We will use our reasonable endeavours to limit 
                            the length of time this occurs for.
                        </p>
                        <p>
                            We may end your rights to use the Games or and/or websites at any time in the event 
                            that you breach these T&Cs. If what you have done can be put right, we may, in our 
                            sole discretion, give you a reasonable opportunity to do so. Where you have paid for 
                            a Game, content or services in connection with a Game or website and your rights have 
                            been terminated in accordance with this clause because of your breach of these T&Cs, 
                            we will not refund you.
                        </p>
                        <p>
                            We may terminate our agreement with you (in whole or in part) for any reason at our 
                            discretion upon reasonable notice to you. This may happen, without limitation, because 
                            we choose to end the availability of a particular Game and/or website. If your use of 
                            the Game or website was provided to you free of charge, you will not be entitled to 
                            compensation in this event. If you paid for the Game, content or services in connection 
                            with a Game or website, you will not be entitled to a refund where you have substantially 
                            had the enjoyment of what you had paid for. Where you have not had a reasonable period of 
                            opportunity to enjoy the paid-for Game, we may offer you a partial or full refund.
                        </p>
                        <p>
                            Upon your deletion/uninstallation of the Game, any in-Game or 
                            website rankings or scores, including virtual currency balances 
                            (whether earned or purchased), or scores or information in connection with the 
                            Game services will not be retained or accessible. These may not be recoverable by 
                            us once they are deleted or made inaccessible.
                        </p>

                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>General</h2>
                    <div className={css.text}>
                        <p>
                            These T&Cs do not affect any legal rights you may have under the law which cannot be excluded or limited.
                        </p>
                        <p>
                            We may change or update these T&Cs from time to time, but changes only affect you to the 
                            extent they can legally apply. For example, if we release an update with a new set of T&Cs, 
                            and you don’t use the update, then the old set of T&Cs applies, but if you do use the updates 
                            or if you use parts of the Game(s) that rely on our ongoing online services then the new 
                            T&Cs will apply. Please check back at our website from time to time in case of updates to 
                            the T&Cs.
                        </p>
                        <p>
                            We may transfer our rights and obligations under these T&Cs to another organization. 
                            We will let you know if that happens and we will ensure that your rights under these 
                            T&Cs are unaffected. You may not transfer your rights or obligations under these T&Cs 
                            unless we expressly agree to the transfer in writing.
                        </p>
                        <p>
                            Even if we delay in enforcing these T&Cs and/or our rights, we can still enforce 
                            these T&Cs and/or our rights later. If we do not insist immediately that you do 
                            anything you are required to do under these T&Cs, or if we delay in taking steps 
                            against you in respect of your breaking of any term of these T&Cs, that will not 
                            mean that you do not have to do those things and it will not prevent us taking steps 
                            against you at a later date.
                        </p>
                        <p>           
                            These T&Cs are governed by English law and you can bring proceedings in respect of 
                            the relevant Game or these T&Cs in the English courts. In addition, you may have 
                            the legal right to bring proceedings in your local jurisdiction and if this is the 
                            case then you may bring proceedings there. For instance if you live in Scotland, 
                            you can bring legal proceedings in respect of the relevant Game in either the Scottish 
                            or the English courts.
                        </p>


                    </div>
                </div>
            </section> 

            <section className={css.introduction}>
                <div className="container">
                    <h2 className={css.title}>complaints and alternative dispute resolution</h2>
                    <div className={css.text}>
                        <p>
                            Should you have any queries or complaints, please get in touch via the contact information set out in clause 16 below.
                        </p>
                        <p>
                            Alternative dispute resolution is a process where an independent body considers the 
                            facts of a dispute and seeks to resolve it, without you having to go to court. If you 
                            are not happy with how we have handled any complaint, you may want to consider an 
                            alternative dispute resolution provider. In addition, please note that disputes may 
                            be submitted for online resolution to the European Commission Online Dispute Resolution 
                            platform.
                        </p>
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

export default TermsOfUse