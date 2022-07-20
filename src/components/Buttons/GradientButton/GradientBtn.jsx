import React from 'react';
import styles from './GradientBtn.module.scss';
const GradientBtn = (props) => {
  const { text, clickAction, style } = props;
  return (
    <button
      type='button'
      className={style ? style : styles.gradient_btn}
      onClick={(e) => {
        if (clickAction) clickAction(e);
      }}
    >
      <span className='gradient_btn-text'>{text}</span>
    </button>
  );
};

export default GradientBtn;
