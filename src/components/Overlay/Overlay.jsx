import React from 'react';
import { useState } from 'react';
import GradientBtn from 'components/Buttons/GradientButton/GradientBtn';
import styles from './Overlay.module.scss';
import GridData from '../../assets/js/GridData';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { common, solidarity, expense } from '../../assets/img/index.js';
import Grid from '../../pages/LandingPage/Grid/Grid';
import CategoryBtn from './CategoryBtn/CategoryBtn';
export default function Overlay(props) {
  const [heading, setHeading] = useState('What type of money pot?');
  const [page_index, setPageIndex] = useState(1);
  const [c_index, setCategoryIndex] = useState(0);
  const [isFilled, setFilled] = useState(false);
  const [isRobert, setRobert] = useState(true);
  const [progress_step, setProgressStep] = useState(styles.step1);
  const [isSelected, setSelected] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [btnText, setBtnText] = useState('Next');
  const [btnVisibility, setBtnVisibility] = useState(styles.invisible);
  const [values, setValues] = useState({});
  const [categoryName, setCategoryName] = useState('');
  const handleSelectChange = (fieldId, value, title) => {
    setValues({ [fieldId]: value });
    setSelected(value);
    if (value == true) {
      setCategoryName(title);
    }
  };
  const category_icons = [common, solidarity, expense];
  const placeholder = 'My super project name that i like';
  var subcategory = [];
  const nextPage = () => {
    setPageIndex(page_index + 1 > 4 ? 4 : page_index + 1);
    if (page_index == 1) {
      setHeading('I choose my category');
      setProgressStep(styles.step2);
      setBtnVisibility(styles.visible);
    } else if (page_index == 2) {
      setHeading('I choose a project name');
      setProgressStep(styles.step3);
      setBtnVisibility(styles.visible);
    } else if (page_index == 3) {
      setHeading('Are you a robot?');
      setProgressStep(styles.step4);
      setBtnText('I create my project');
    }
  };
  const setCategory = (index) => {
    setSelected(false);
    setCategoryIndex(index);
    nextPage();
  };
  const main_categories = GridData.map((item, index) => {
    return (
      <CategoryBtn
        key={item.key}
        clickAction={setCategory}
        img={category_icons[index]}
        name={item.category}
        index={index}
      ></CategoryBtn>
    );
  });
  const createProject = () => {
    console.log(categoryName, projectName);
  };
  const previousPage = () => {
    setPageIndex(page_index - 1 < 1 ? 1 : page_index - 1);
    if (page_index == 2) {
      setHeading('What type of money pot?');
      setBtnVisibility(styles.invisible);
      setProgressStep(styles.step1);
    } else if (page_index == 3) {
      setHeading('I choose my category');
      setProgressStep(styles.step2);
    } else if (page_index == 4) {
      setHeading('I choose a project name');
      setProgressStep(styles.step3);
      setBtnText('Next');
    }
  };
  const onChange = (event) => {
    const text = event.target.value;
    setProjectName(text);
    setFilled(text == '' ? false : true);
  };
  const onChangeCaptcha = (value) => {
    setRobert(false);
  };
  const nonCategory = () => {
    setPageIndex(3);
    setHeading('I choose a project name');
    setProgressStep(styles.step3);
    setBtnVisibility(styles.visible);
  };
  const renderBtn = () => {
    if (page_index == 1) {
      return (
        <div onClick={nextPage}>
          <GradientBtn text={btnText} />
        </div>
      );
    } else if (page_index == 2) {
      if (isSelected == true) {
        return (
          <div onClick={nextPage}>
            <GradientBtn text={btnText} />
          </div>
        );
      } else {
        return (
          <div>
            <GradientBtn style={styles.black_gradient} text={btnText} />
          </div>
        );
      }
    } else if (page_index == 3) {
      if (isFilled == true) {
        return (
          <div onClick={nextPage}>
            <GradientBtn text={btnText} />
          </div>
        );
      } else {
        return (
          <div>
            <GradientBtn style={styles.black_gradient} text={btnText} />
          </div>
        );
      }
    } else {
      if (isRobert == false) {
        return (
          <div onClick={createProject}>
            <GradientBtn text={btnText} />
          </div>
        );
      } else {
        return (
          <div>
            <GradientBtn style={styles.black_gradient} text={btnText} />
          </div>
        );
      }
    }
  };
  return (
    <div className={styles.overlay_wrap}>
      <div className={styles.overlay_head}>
        <span>{heading}</span>
      </div>
      <div className={styles.progress_wrap}>
        <div className={[styles.progress, progress_step].join(' ')}></div>
      </div>
      <div className={styles.content_wrap}>
        <div
          className={styles.main_category}
          style={{ display: page_index == 1 ? 'inherit' : 'none' }}
        >
          {main_categories}
          <button onClick={nonCategory}>None of these categories</button>
        </div>
        <div
          className={styles.overlay_body}
          style={{ display: page_index == 2 ? 'inherit' : 'none' }}
        >
          <Grid
            selectAction={handleSelectChange}
            active={values[GridData[c_index].key]}
            key={GridData[c_index].key}
            field_id={GridData[c_index].key}
            category={GridData[c_index].category}
            items={GridData[c_index].items}
          />
        </div>
        <input
          placeholder={placeholder}
          className={styles.input_name}
          style={{ display: page_index == 3 ? 'inherit' : 'none' }}
          onChange={onChange}
        ></input>
        <div
          className={styles.align_center}
          style={{ display: page_index == 4 ? 'inherit' : 'none' }}
        >
          <ReCAPTCHA
            sitekey='6Legi-QfAAAAAA2Vc33o6HW35HVtET7dXzb4Ws_d'
            onChange={onChangeCaptcha}
          />
        </div>
      </div>
      <div className={styles.btn_wrap}>
        <div onClick={previousPage} className={btnVisibility}>
          <GradientBtn text='Previous' />
        </div>
        {renderBtn()}
      </div>
    </div>
  );
}
