import React from 'react'
import { useSelector } from 'react-redux';
import Topbar from './Header/Topbar'
import MainNavBar from './Header/MainNavBar';
import FooterContent from './Footer/FooterContent';
import RoutesContent from '../RoutesContent';
import BreadcrumbNav from './Header/BreadcrumbNav';

const Index = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div>
      <Topbar />
      <MainNavBar />
      <BreadcrumbNav />
      <RoutesContent />
      <FooterContent />
    </div>
  )
}

export default Index
