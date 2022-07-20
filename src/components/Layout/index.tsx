import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { logout, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import { useLocation } from 'react-router-dom';
import { logo } from 'assets/img';
import { Footer, GradientBtn, WalletConnect } from 'components';
import routes, { routeNames } from 'routes';
import { FaEllipsisV, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Layout({ children }: { children: React.ReactNode }) {
  const { search } = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [isHidden, setHidden] = useState('hide');
  const connect = () => {
    setHidden('hide');
    onOpenModal();
  };
  const disconnect = () => {
    logout(routeNames.home);
  };
  const { isLoggedIn } = useGetLoginInfo();
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);
  const showNavBar = () => {
    setHidden('show');
  };
  const hideNavBar = () => {
    setHidden('hide');
  };
  return (
    <div className='bg-light d-flex flex-column flex-fill wrapper'>
      <header className='App-header'>
        <nav>
          <div className='nav_mobile'>
            <div className='brand_logo_wrapper_mob'>
              <img src={logo} alt='brand logo' />
              <span className='brand_name'>VITAL</span>
            </div>
            <div className='nav_icon_div' onClick={showNavBar}>
              <FaEllipsisV />
            </div>
          </div>
          <div className='nav_desktop'>
            <div className='brand_logo_wrapper'>
              <img src={logo} alt='brand logo' />
              <span className='brand_name'>VITAL</span>
            </div>
            <div className='nav_links'>
              <div className='links_wrapper'>
                <Link to={routeNames.home}>Home</Link>
                <a href='*'>About Us</a>
                <Link to={routeNames.projects}>Projects</Link>
                <a href='*'>Contact</a>
              </div>
              <div className='connect_wrapper'>
                <GradientBtn
                  text={isLoggedIn ? 'Disconnect' : 'Connect'}
                  clickAction={isLoggedIn ? disconnect : connect}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.home}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      <Footer />
      <Modal
        classNames={{ root: 'modal_root', modal: 'vital_modal' }}
        open={openModal}
        onClose={onCloseModal}
        center
      >
        <WalletConnect />
      </Modal>
      <div className={['mobile-navbar', isHidden].join(' ')}>
        <div className='nav_cancel_div' onClick={hideNavBar}>
          <FaTimesCircle size={25} />
        </div>
        <Link to={routeNames.home} onClick={hideNavBar}>
          Home
        </Link>
        <Link to={routeNames.home} onClick={hideNavBar}>
          About Us
        </Link>
        <Link to={routeNames.projects} onClick={hideNavBar}>
          Projects
        </Link>
        <Link to={routeNames.home} onClick={hideNavBar}>
          Contact
        </Link>
        <GradientBtn
          text={isLoggedIn ? 'Disconnect' : 'Connect'}
          clickAction={isLoggedIn ? disconnect : connect}
        />
      </div>
    </div>
  );
}

export default Layout;
