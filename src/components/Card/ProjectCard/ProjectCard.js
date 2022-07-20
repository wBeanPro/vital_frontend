import React from 'react';
import { PromptProps } from 'react-router-dom';
import { cake, heart, person, money } from '../../../assets/img';
import styles from './ProjectCard.module.scss';

export default function ProjectCard(props) {
  const pro = (props.amount / props.goal).toFixed(1) * 100;
  var pro_class = styles.w0;
  switch (pro) {
    case 10:
      pro_class = styles.w10;
      break;
    case 20:
      pro_class = styles.w20;
      break;
    case 30:
      pro_class = styles.w30;
      break;
    case 40:
      pro_class = styles.w40;
      break;
    case 50:
      pro_class = styles.w50;
      break;
    case 60:
      pro_class = styles.w60;
      break;
    case 70:
      pro_class = styles.w70;
      break;
    case 80:
      pro_class = styles.w80;
      break;
    case 90:
      pro_class = styles.w90;
      break;
    case 100:
      pro_class = styles.w100;
      break;
    default:
      break;
  }
  return (
    // ADVANCE CAROUSEL:
    <div
      className={styles.projectCard}
      onClick={() => {
        window.location.href = '/projectdetail';
      }}
    >
      {/* CAROUSEL WRAP */}
      <div className={styles.projectCard_wrap}>
        {/* CAROUSEL IMAGE */}
        <img className={styles.projectCard_img} src={cake} alt='cake' />
        {/* CAROUSEL CONTENT WRAP */}
        <div className={styles.projectCard_body_wrap}>
          <div className={styles.projectCard_text_additional}>
            {/* CAROUSEL TEXT WRAP */}
            <div className={styles.projectCard_textWrap}>
              <span className={styles.projectCard_title}>{props.name}</span>
              <p className={styles.projectCard_info}>{props.description}</p>
            </div>
            {/* ADDITIONAL */}
            <div className={styles.projectCard_additional}>
              {/* HEART */}
              <div className={styles.projectCard_additional_heart}>
                <img src={heart} alt='heart' />
                <span>30</span>
              </div>
              {/* PERSON */}
              <div className={styles.projectCard_additional_person}>
                <img src={person} alt='person' />
                <span>30</span>
              </div>
              {/* MONEY */}
              <div className={styles.projectCard_additional_money}>
                <img src={money} alt='money' />
                <span>${props.amount}</span>
              </div>
            </div>
          </div>
          {/* CAROUSEL BAR */}
          <div className={styles.projectCard_barWrap}>
            <div className={styles.projectCard_barContainer}>
              <div className={[styles.projectCard_bar, pro_class].join(' ')}>
                <span className={styles.projectCard_current}>
                  ${props.amount} raised
                </span>
                <span className={styles.projectCard_total}>
                  Goals: ${props.goal}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
