import React from 'react';
import { useState } from 'react';
import OverlayCard from '../../../components/Overlay/OverlayCard/OverlayCard';
import styles from './Grid.module.scss';
export default function Grid(props) {
  const [values, setValues] = useState({});
  const handleFieldChange = (fieldId, value, title) => {
    setValues({ [fieldId]: value });
    props.selectAction(props.field_id, value, title);
  };
  // const details = props.items;
  // if (props.active != true) {
  //   setValues({});
  // }
  const gridData = props.items.map((item) => (
    <OverlayCard
      clickAction={handleFieldChange}
      active={values[item.key]}
      parent_active={props.active}
      key={item.key}
      field_id={item.key}
      img={item.img}
      title={item.title}
    />
  ));
  return (
    <div className={styles.grid}>
      <div className={styles.grid_head}>
        <span>{props.category}</span>
      </div>
      <div className={styles.grid_body}>{gridData}</div>
    </div>
  );
}
