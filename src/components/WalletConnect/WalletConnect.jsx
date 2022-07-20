import React from 'react';
import { DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { routeNames } from 'routes';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styles from './WalletConnect.module.scss';
import { defi_wallet } from '../../assets/img/index.js';
import { app_wallet } from '../../assets/img/index.js';
import { ledger } from '../../assets/img/index.js';
import { web_wallet } from '../../assets/img/index.js';

export default function WalletConnect(props) {
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  const { isLoggedIn } = useGetLoginInfo();
  React.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = routeNames.home;
    }
  }, [isLoggedIn]);
  return (
    <div className={styles.overlay_wrap}>
      <div className={styles.overlay_head}>
        <span>Connect to a wallet</span>
      </div>
      <div className={styles.btn_connect}>
        <div className={styles.flex_div}>
          <img src={defi_wallet} alt='Maiar Defi Wallet' />
          <span>Maiar Defi Wallet</span>
          <FaLongArrowAltRight size={28} />
        </div>
        <ExtensionLoginButton
          callbackRoute={routeNames.dashboard}
          loginButtonText={'Extension'}
        />
      </div>
      <div className={styles.btn_connect}>
        <div className={styles.flex_div}>
          <img src={app_wallet} alt='Maiar App' />
          <span>Maiar App</span>
          <FaLongArrowAltRight size={28} />
        </div>
        <WalletConnectLoginButton
          callbackRoute={routeNames.dashboard}
          loginButtonText={'Maiar'}
        />
      </div>
      <div className={styles.btn_connect}>
        <div className={styles.flex_div}>
          <img src={ledger} alt='Ledger' />
          <span>Ledger</span>
          <FaLongArrowAltRight size={28} />
        </div>
        <LedgerLoginButton
          loginButtonText={'Ledger'}
          callbackRoute={routeNames.dashboard}
          className={'test-class_name'}
        />
      </div>
      <div className={styles.btn_connect}>
        <div className={styles.flex_div}>
          <img src={web_wallet} alt='Elrond Web Wallet' />
          <span>Elrond web Wallet</span>
          <FaLongArrowAltRight size={28} />
        </div>
        <WebWalletLoginButton
          callbackRoute={routeNames.dashboard}
          loginButtonText={'Web wallet'}
        />
      </div>
      <div className={styles.bottom_div}>
        <span>New to Elrond?</span>
        <a
          href='https://wallet.elrond.com/create'
          rel='noreferrer'
          target='_blank'
        >
          Learn How to setup a wallet
        </a>
      </div>
    </div>
  );
}
