import React from 'react';
// import { OverlayStepTwo } from 'components';
import GradientBtn from 'components/Buttons/GradientButton/GradientBtn';
import styles from './OverlayStepTwo.module.scss';

export default function OverlayStepTwo() {
  return (
    <div className={styles.step_two}>
      <div className={styles.step_two_wrap}>
        <div className={styles.close_btn}>
          <button>X</button>
        </div>
        <div className={styles.step_two_head}>
          <span>I choose a project name</span>
        </div>
        <div className={styles.bar_input}>
          <div className={styles.bar_container}></div>
          <input placeholder='My super project name that i like'></input>
        </div>
        <div className={styles.dual_btn_wrap}>
          <GradientBtn text='Previous' />
          <GradientBtn text='Next' />
        </div>
      </div>
    </div>
  );
}
