import React from 'react';
import GradientBtn from '../../Buttons/GradientButton/GradientBtn';
import styles from './Ocassion_boxes.module.scss';
export default function Ocassion_boxes(props) {
  return (
    <div sel={props.title} className={styles.Ocassion_box}>
      <h3 className={styles.Ocassion_box_head}>{props.title}</h3>
      <p className={styles.Ocassion_box_description}>
        Create your kitty for all types of needs: Wedding, birthday, retirement,
        medical support or simply for common expenses. And invite your friends,
        family or entourage to participate in the simplest way
      </p>
      <div className={styles.Ocassion_box_btn}>
        <GradientBtn text='See all personal projects' />
      </div>
    </div>
  );
}
