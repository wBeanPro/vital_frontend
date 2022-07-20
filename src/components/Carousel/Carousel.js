import React from 'react';
import Cake from '../../assets/img/cake.svg';
import styles from './Carousel.module.scss';

export default function Carousel(props) {
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
    <div
      className={styles.carousel}
      onClick={() => {
        window.location.href = '/projectdetail';
      }}
    >
      <div className={styles.carousel_wrapper}>
        <img className={styles.carousel_img} src={Cake} alt='cake' />
        <div className={styles.carousel_body_wrapper}>
          <div className={styles.carousel_textWrap}>
            <span className={styles.carousel_title}>{props.title}</span>
            <p className={styles.carousel_info}>{props.description}</p>
          </div>

          <div className={styles.carousel_barWrap}>
            <div className={styles.carousel_barContainer}>
              <div className={[styles.carousel_bar, pro_class].join(' ')}>
                <span className={styles.carousel_current}>
                  ${props.amount} raised
                </span>
                <span className={styles.carousel_total}>
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
