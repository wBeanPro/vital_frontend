/* eslint @typescript-eslint/no-var-requires: "off" */
import React from 'react';
import { useState } from 'react';
import { grayBox } from '../../../assets/img/index.js';
import styles from './OverlayCard.module.scss';
export default function OverlayCard(props) {
  const img_src = require('../../../assets/img/category_static/' +
    props.img +
    '.png').default;
  const ani_src = require('../../../assets/img/category_ani/' +
    props.img +
    '.gif').default;
  const [selected, setSelected] = useState(false);
  const [img_path, setPath] = useState(img_src);
  const handleChange = (key) => {
    setSelected(!selected);
    props.clickAction(key, !selected, props.title);
  };
  const MouseOver = (event) => {
    setPath(ani_src);
  };
  const MouseOut = (event) => {
    setPath(img_src);
  };
  return (
    <div
      className={[
        styles.overlay_card,
        props.parent_active == true && props.active == true
          ? styles.active
          : ' '
      ].join(' ')}
      onClick={() => handleChange(props.field_id)}
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
    >
      <div className={styles.overlay_img_wrap}>
        <img
          src={
            props.parent_active == true && props.active == true
              ? ani_src
              : img_path
          }
          alt='gray-box'
        />
      </div>
      <div className={styles.overlay_title}>
        <span>{props.title}</span>
      </div>
    </div>
  );
}
