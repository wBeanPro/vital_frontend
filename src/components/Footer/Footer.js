import React from 'react';
import Facebook from '../../assets/img/facebook.svg';
import Footer_img from '../../assets/img/footer-img.svg';
import Instagram from '../../assets/img/instagram.svg';
import vitalLogo from '../../assets/img/logo.svg';
import Twitter from '../../assets/img/twitter.svg';
import GradientBtn from '../Buttons/GradientButton/GradientBtn';
import styles from './Footer.module.scss';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_desktop_wrap}>
        <div className={styles.footer_content_wrap}>
          <div className={styles.footer_logo}>
            <img
              className={styles.footer_logo_img}
              src={vitalLogo}
              alt='footer-logo'
            />
            <span className={styles.footer_logo_text}>vital</span>
          </div>
          <span className={styles.footer_head}>Earn</span>
          <p className={styles.footer_description_one}>
            Stake you VITAL to earn more VITAL
          </p>
          <p className={styles.footer_description_two}>
            Stake your NFTs to earn VITAL
          </p>
          <div className={styles.footer_btn_wrap}>
            <GradientBtn text='Connect' />
          </div>
        </div>
        <div className={styles.footer_img}>
          <img src={Footer_img} alt='footer-img' />
        </div>
      </div>

      <div>
        <div className={styles.footer_bottom_wrap}>
          <div className={styles.footer_social}>
            <span className={styles.footer_social_text}>Social Connect</span>
            <img src={Facebook} alt='facebook' />
            <img src={Twitter} alt='twitter' />
            <img src={Instagram} alt='instagram' />
          </div>
          <div className={styles.footer_copyright}>
            <p className={styles.footer_copyright_text}>
              © <span className={styles.footer_copyright_year}>2019</span> All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
