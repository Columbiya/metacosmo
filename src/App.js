import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom'
import { ADMIN_PATH, NEWS_PATH, ARTICLES_PATH, LOGIN_PATH, ABOUT_PATH, DAO_PATH, PARTNER_INTEGRATIONS, COSMOLANDS_PATH, BUY_COSMOLAND_PATH, BUY_CVR_PATH, WHAT_IS_METACOSMO_PATH, ABOUT_CVR_PATH, COLLECTIONS_PATH, PARTNERS_PATH, BONUS_PROGRAM_PATH, TERMS_OF_USE_PATH, PRIVACY_POLICY_PATH, INSTRUCTIONS_PATH, CONTACTS_PATH, COSMOMARKET_PATH, TEAM_PATH, ACTIVATE_EMAIL_PATH, UNSUBSCRIBE_EMAIL_PATH, TOKEN_CONTRACTS_PATH } from './consts';
import AdminPanel from "./components/AdminPanel/AdminPanel";
import News from './components/News/News';
import Articles from './components/Articles/Articles';
import SingleItemPage from './components/NewPage/SingleItemPage'
import Main from './components/Main/Main';
import newsStore from './store/newsStore';
import articlesStore from './store/articlesStore';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import authStore from './store/authStore';
import Login from './components/Login/Login';
import WhatIsMetacosmo from "./components/WhatIsMetacosmo/WhatIsMetacosmo";
import DAO from "./components/DAOPage/DAO";
import PartnerIntegrations from "./components/PartnerIntegrations/PartnerIntegrations";
import Cosmolands from "./components/Cosmolands/Cosmolands";
import BuyCosmoland from "./components/BuyCosmoland/BuyCosmoland";
import BuyCvr from "./components/BuyCvr/BuyCvr";
import CvrTokenomics from "./components/CvrTokenomics/CvrTokenomics";
import Collections from "./components/Collections/Collections";
import Partners from "./components/Partners/Partners";
import MetaverseBonusProgram from './components/MetaverseBonusProgram/MetaverseBonusProgram';
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Contacts from "./components/Contacts/Contacts";
import { YMInitializer } from 'react-yandex-metrika';
import CosmoMarket from "./components/CosmoMarket/CosmoMarket";
import Team from "./components/Team/Team";
import ActivateEmail from "./components/activateEmail/ActivateEmail";
import UnsubscribeEmail from './components/UnsubscribeEmail/UnsubscribeEmail';
import TokenContracts from "./components/TokenContracts/TokenContracts";

const App = () => {

  useEffect(() => {
    Aos.init({
      easing: 'ease-out-cubic',
      offset: 50
    })
  }, [])

  useEffect(() => {
    authStore.checkAuth()

    setInterval(() => {
      authStore.checkAuth()
    }, 120000)
  }, [])

  return (
    <>
      <Header />
      <main className='main'>
        <YMInitializer accounts={[88483045]} options={{clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true}} />
        <Routes>
          <Route path={NEWS_PATH} element={<News />} />
          <Route path={NEWS_PATH + '/:id'} element={<SingleItemPage store={newsStore} isNews={true} />} />
          <Route path={ARTICLES_PATH + '/:id'} element={<SingleItemPage store={articlesStore} isNews={false} />} />
          <Route path={ARTICLES_PATH} element={<Articles />} />
          <Route path={WHAT_IS_METACOSMO_PATH} element={<WhatIsMetacosmo />} />
          <Route path={DAO_PATH} element={<DAO />} />
          <Route path={ADMIN_PATH} element={<AdminPanel />} />
          {!authStore.isAuth && <Route path={LOGIN_PATH} element={<Login />} />}
          <Route path={PARTNER_INTEGRATIONS} element={<PartnerIntegrations />} />
          <Route path={BUY_CVR_PATH} element={<BuyCvr />} />
          <Route path={BUY_COSMOLAND_PATH} element={<BuyCosmoland />} />
          <Route path={COSMOLANDS_PATH} element={<Cosmolands />} />
          <Route path={ABOUT_CVR_PATH} element={<CvrTokenomics />} />
          <Route path={COLLECTIONS_PATH} element={<Collections />} />
          <Route path={PARTNERS_PATH} element={<Partners />} />
          <Route path={BONUS_PROGRAM_PATH} element={<MetaverseBonusProgram />} />
          <Route path={TERMS_OF_USE_PATH} element={<TermsOfUse />} />
          <Route path={PRIVACY_POLICY_PATH} element={<PrivacyPolicy />} />
          <Route path={INSTRUCTIONS_PATH} element={<Collections isInstructions={true} />} />
          <Route path={CONTACTS_PATH} element={<Contacts />} />
          <Route path={COSMOMARKET_PATH} element={<CosmoMarket />} />
          <Route path={TEAM_PATH} element={<Team />} />
          <Route path={ACTIVATE_EMAIL_PATH + '/:link'} element={<ActivateEmail />} />
          <Route path={UNSUBSCRIBE_EMAIL_PATH + '/:link'} element={<UnsubscribeEmail />} />
          <Route path={TOKEN_CONTRACTS_PATH} element={<TokenContracts />} />
          <Route index element={<Main />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
