import React from 'react';
import styles from './Participation.module.scss';
import GradientBtn from 'components/Buttons/GradientButton/GradientBtn';

export default function Participation(props) {
  return (
    <div className={styles.overlay_wrap}>
      <div className={styles.overlay_head}>
        <span>Participation</span>
      </div>
      <p>First Name</p>
      <input className={styles.input} placeholder='My first name'></input>
      <p>Amount of my participation</p>
      <div className={styles.input_div}>
        <input className={styles.input_no_border}></input>
        <span>EGLD</span>
      </div>
      <div className={styles.btn_wrap}>
        <GradientBtn style={styles.black_gradient} text='Validate' />
      </div>
    </div>
  );
}
