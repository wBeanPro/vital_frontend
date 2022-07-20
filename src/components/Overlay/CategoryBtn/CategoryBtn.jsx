import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styles from './CategoryBtn.module.scss';

export default function CategoryBtn(props) {
  const handleChange = (index) => {
    props.clickAction(index);
  };
  return (
    <div
      className={styles.btn_connect}
      onClick={() => handleChange(props.index)}
    >
      <div className={styles.flex_div}>
        <img src={props.img} alt={props.name} />
        <span>{props.name}</span>
        <FaLongArrowAltRight size={28} />
      </div>
    </div>
  );
}
