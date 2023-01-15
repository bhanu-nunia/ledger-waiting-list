import React, { useState } from 'react';
import SubscribeModal from './modals';
import { MODAL_SCREENS } from './modals/constants';
import SubscribeForm from './modals/subscribeForm';
import Success from './modals/success';
import FaqModal from './modals/faq';
import { TermsConditions, Cover, Header } from './partials';
import PageLayout from './partials/Layout';

const Landing = () => {
  const [currentScreen, setCurrentScreen] = useState(MODAL_SCREENS[0]);
  const [isJoined, setIsJoined] = useState(false);
  const [name, setName] = useState('null');
  console.log('currentScreen', currentScreen)
  console.log('isJoined', isJoined)
  return (
    <PageLayout>
      <Header isJoined={isJoined} name={name} />
      <Cover />
     
      <SubscribeModal screens={MODAL_SCREENS} currentScreen={currentScreen}>
        <SubscribeForm onChangeScreen={setCurrentScreen} showDropdown={setIsJoined} candidateName={setName} />
        <Success onChangeScreen={setCurrentScreen} />
      </SubscribeModal>
      <TermsConditions />
      <FaqModal />
    </PageLayout>
  );
};

export default Landing;
