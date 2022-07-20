/* eslint @typescript-eslint/no-var-requires: "off" */
import React, { useState } from 'react';
import { GradientBtn, ProjectCard } from 'components/index';
import ReactPaginate from 'react-paginate';
// import { Select, setOptions } from '@mobiscroll/react';
import Select, { components } from 'react-select';
import GridData from '../../assets/js/GridData';
import ProjectList from '../../assets/js/ProjectList';
import styles from './Projects.module.scss';

export default function Projects() {
  // setOptions({
  //   theme: 'ios',
  //   themeVariant: 'light'
  // });
  // const categoryProps = {
  //   inputStyle: 'box',
  //   labelStyle: 'stacked',
  //   placeholder: 'Select Category'
  // };
  // const typeProps = {
  //   inputStyle: 'box',
  //   labelStyle: 'stacked',
  //   placeholder: 'Select Type'
  // };
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
          require('../../assets/img/category_static/' + props.data.img + '.png')
            .default
        }
        style={{ width: 30, 'padding-right': '10px' }}
        alt={props.data.label}
      />
      {props.data.label}
    </Option>
  );
  // const renderCustomItem = (item) => {
  //   const img_src = require('../../assets/img/category_static/' +
  //     item.data.img +
  //     '.png').default;
  //   return (
  //     <div className={styles.md_image_text_item}>
  //       <img className={styles.md_image_text_avatar} src={img_src} />
  //       <div className={styles.md_image_text_name}>{item.display}</div>
  //     </div>
  //   );
  // };
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(ProjectList.length / PER_PAGE);
  var data = ProjectList.slice(offset, offset + PER_PAGE).map((item) => (
    <ProjectCard
      name={item.name}
      category={item.category}
      key={item.id}
      project_id={item.key}
      amount={item.collected_amount}
      goal={item.goal}
      photo={item.photo}
      description={item.description}
    />
  ));
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  return (
    <div className={styles.projects}>
      <div className={styles.projects_wrap}>
        {/* HEAD*/}
        <span className={styles.projects_head}>search by categories</span>
        <div className={styles.projects_wrap_container}>
          {/* INPUT BOX */}
          <div className={styles.projects_inputBox}>
            <div className={styles.projects_inputBox_wrap}>
              {/* NAME */}
              <div className={styles.projects_inputBox_name}>
                <div className={styles.projects_inputBox_name_text}>Name</div>
                <input
                  placeholder='Enter your name'
                  className={styles.projects_inputBox_name_input}
                ></input>
              </div>
              {/* TYPE */}
              <div className={styles.projects_inputBox_type}>
                <div className={styles.projects_inputBox_type_text}>Type</div>
                {/* <Select
                  data={category_list}
                  inputProps={typeProps}
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
              {/* CATEGORY */}
              <div className={styles.projects_inputBox_category}>
                <div className={styles.projects_inputBox_category_text}>
                  Category
                </div>
                <Select
                  defaultValue={category_list[0]}
                  options={category_list}
                  components={{ Option: IconOption }}
                />
                {/* <Select
                  data={category_list}
                  inputProps={categoryProps}
                  display='anchored'
                  itemHeight={50}
                  renderItem={renderCustomItem}
                /> */}
              </div>
              {/* BUTTON */}
              <div className={styles.projects_btn_wrap}>
                <GradientBtn text='Search' />
              </div>
            </div>
          </div>
          <div className={styles.projects_content_wrap}>
            <div className={styles.projects_wrap_container_projects}>
              {data}
            </div>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={styles.pagination}
              previousClassName={styles.pagination__link}
              nextClassName={styles.pagination__link}
              disabledClassName={styles.pagination_link_disabled}
              activeClassName={styles.pagination_link_active}
              pageClassName={styles.page_link}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
