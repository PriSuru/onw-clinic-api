import React from 'react'

import Topbar from './Header/Topbar'
import MainNavBar from './Header/MainNavBar';
import FooterContent from './Footer/FooterContent';
import RoutesContent from '../RoutesContent';

const Index = () => {
  return (
    <div>
      <Topbar />
      <MainNavBar />
      <RoutesContent />
      <FooterContent />
    </div>
  )
}

export default Index
