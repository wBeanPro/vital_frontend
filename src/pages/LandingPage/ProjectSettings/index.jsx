/* eslint @typescript-eslint/no-var-requires: "off" */
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import GradientBtn from 'components/Buttons/GradientButton/GradientBtn';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { Select, setOptions } from '@mobiscroll/react';
import Select, { components } from 'react-select';
import GridData from '../../../assets/js/GridData';
import { content_actions, worker } from 'assets/img';
import styles from './ProjectSettings.module.scss';
import { FaColumns } from 'react-icons/fa';
// setOptions({
//   theme: 'ios',
//   themeVariant: 'light'
// });
const category_list = [];
GridData.map((i) => {
  i.items.map((item) => {
    category_list.push({
      label: item.title,
      value: item.key,
      img: item.img
    });
  });
});
const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    <img
      src={
        require('../../../assets/img/category_static/' +
          props.data.img +
          '.png').default
      }
      style={{ width: 30, 'padding-right': '10px' }}
      alt={props.data.label}
    />
    {props.data.label}
  </Option>
);
// const renderCustomItem = (item) => {
//   const img_src = require('../../../assets/img/category_static/' +
//     item.data.img +
//     '.png').default;
//   return (
//     <div className={styles.md_image_text_item}>
//       <img className={styles.md_image_text_avatar} src={img_src} />
//       <div className={styles.md_image_text_name}>{item.display}</div>
//     </div>
//   );
// };
// const inputProps = {
//   inputStyle: 'box',
//   labelStyle: 'stacked',
//   placeholder: 'Select'
// };
const GeneralContent = () => {
  return (
    <div className={styles.right_side}>
      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Title'}</div>
        <div className={styles.field_input}>
          <input type='text' placeholder='My super project name that i like' />
        </div>
      </div>

      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Cover Picture'}</div>
        <div className={styles.field_input}>
          <div className={styles.field_input_container}>
            <div className={styles.file_div}>
              <button className={styles.choose_btn}>Browse</button>
              <input type='file'></input>
            </div>
            <div className={styles.image_box}>
              <img src={worker} alt='cover' />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Category'}</div>
        <div className={styles.field_input}>
          <div className={styles.field_input_container}>
            {/* <Select
              data={category_list}
              inputProps={inputProps}
              display='anchored'
              itemHeight={50}
              renderItem={renderCustomItem}
            /> */}
            <Select
              defaultValue={category_list[0]}
              options={category_list}
              components={{ Option: IconOption }}
            />
          </div>
        </div>
      </div>

      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Description'}</div>
        <Editor
          toolbarClassName={styles.editorToolbarClassName}
          wrapperClassName={styles.editorWrapperClassName}
          editorClassName={styles.editorClassName}
          toolbar={{
            options: ['inline', 'image'],
            inline: {
              options: ['bold', 'italic', 'underline']
            }
          }}
        />
      </div>
    </div>
  );
};

const GoalContent = () => {
  return (
    <div className={styles.right_side}>
      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Event date'}</div>
        <div className={styles.field_input}>
          <input type='date' />
        </div>
      </div>
      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Entry deadline'}</div>
        <div className={styles.field_input}>
          <input type='date' />
        </div>
      </div>
      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Amount to reach'}</div>
        <div className={`${styles.field_input} ${styles.number_input}`}>
          <span className={styles.currency}>$</span>
          <input type='number' />
        </div>
      </div>
    </div>
  );
};
export default function ProjectSettings() {
  const [activeAction, setActiveAction] = React.useState('General');

  return (
    <div className={styles.main_wrap}>
      <div className={styles.overlay_head}>
        <span>Settings</span>
      </div>
      <div className={styles.settings_wrapper}>
        <div className={styles.left_side}>
          <div className={styles.action_btn_container}>
            <button
              className={`${styles.action_btn} ${
                activeAction === 'General' && styles.active
              }`}
              onClick={() => setActiveAction('General')}
            >
              General
            </button>
            <button
              className={`${styles.action_btn} ${
                activeAction === 'Goal' && styles.active
              }`}
              onClick={() => setActiveAction('Goal')}
            >
              Goal
            </button>
          </div>
        </div>
        {activeAction === 'General' && <GeneralContent />}
        {activeAction === 'Goal' && <GoalContent />}
      </div>
      <div className={styles.btn_wrap}>
        <GradientBtn style={styles.black_gradient} text='Validate' />
      </div>
    </div>
  );
}
