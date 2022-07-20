import React from 'react';
import BirthdayWedding from '../../assets/img/birthday_wedding.svg';
import styles from './Ocassion.module.scss';
import OcassionBoxes from './Ocassion_boxes/Ocassion_boxes';

export default function Ocassion() {
  return (
    <div>
      <div className={styles.ocassion_desktop}>
        <div className={styles.ocassion_desktop_top}>
          <OcassionBoxes title='Wedding' />
          <OcassionBoxes title='Community' />
          <OcassionBoxes title='Health' />
          <OcassionBoxes title='Other common expenses' />
        </div>
        <div className={styles.ocassion_desktop_center}>
          <img src={BirthdayWedding} alt='BirthdayWedding' />
        </div>
        <div className={styles.ocassion_desktop_bottom}>
          <OcassionBoxes title='Birthday' />
          <OcassionBoxes title='Baby shower' />
          <OcassionBoxes title='Animals' />
          <OcassionBoxes title='Weekend getaway' />
        </div>
      </div>
    </div>
  );
}
