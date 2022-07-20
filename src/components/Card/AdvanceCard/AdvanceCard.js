import React from 'react';
import GradientBtn from '../../Buttons/GradientButton/GradientBtn';
import styles from './AdvanceCard.module.scss';
export default function AdvanceCard(props) {
  let chosen;
  if (props.id === 1) {
    chosen = 'View all personal projects';
  } else {
    chosen = 'See all charities';
  }
  return (
    <>
      <div className={styles.advance_card}>
        <img className={styles.advance_card_img} src={props.img} alt={chosen} />
        <div className={styles.advance_card_content_wrap}>
          <h2 className={styles.advance_card_title}>{props.title}</h2>

          <p className={styles.advance_card_description_first}>
            {props.description_first}
          </p>
          <p className={styles.advance_card_description_second}>
            {' '}
            {props.description_second}
          </p>

          <div btns={chosen} className={styles.advance_card_btn}>
            <GradientBtn text={chosen} />
          </div>
        </div>
      </div>
    </>
  );
}
