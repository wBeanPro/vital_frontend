import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  worker,
  location,
  heart,
  person,
  money,
  share,
  donation
} from '../../assets/img/index';
import { FacebookShareButton } from 'react-share';
import { GradientBtn, Overlay } from '../../components/index';
import styles from './ProjectDetails.module.scss';
import ProjectSettings from '../LandingPage/ProjectSettings';
import Participation from './Participation/Participation';
export default function ProjectDetails() {
  const [openModal, setOpenModal] = useState(false);
  const [copyText, setCopyText] = useState('Copy');
  const [openParticipationModal, setParticipationModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);
  const onParticipationCloseModal = () => setParticipationModal(false);
  const openSetting = () => {
    onOpenModal();
  };
  const openParticipation = () => {
    setParticipationModal(true);
  };
  const goal = 100000;
  const amount = 60000;
  const pro = (amount / goal).toFixed(1) * 100;
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
  const link = 'https://vital-dapp.com/mymoneypot';
  return (
    <div className={styles.projectDetails}>
      <div className={styles.project_details_card}>
        <section className={styles.img_wrap}>
          <img src={worker} alt='worker' />
          <div className={styles.content_wrap}>
            <span className={styles.project_title}>Project Name</span>
            <div className={styles.money}>
              <img src={money} alt='money' />
              <span>
                ${amount} / ${goal}
              </span>
            </div>
            <GradientBtn text='Participate' clickAction={openParticipation} />
          </div>
        </section>
        <section className={styles.participate}>
          <div className={styles.content}>
            <span className={styles.content_head}>Project Name</span>
            <div className={styles.content_details}>
              <div className={styles.category}>
                <span className={styles.left}>Category:</span>
                <span className={styles.right}>Personal projects</span>
              </div>
              <div className={styles.properties}>
                <span className={styles.left}>Likes</span>
                <div className={styles.right}>
                  <img src={heart} alt='heart' />
                  <span>30</span>
                </div>
              </div>
              <div className={styles.properties}>
                <span className={styles.left}>Participants</span>
                <div className={styles.right}>
                  <img src={person} alt='person' />
                  <span>30</span>
                </div>
              </div>
              <div className={styles.properties}>
                <span className={styles.left}>Amount raised</span>
                <div className={styles.right}>
                  <img src={money} alt='money' />
                  <span>${amount}</span>
                </div>
              </div>
              <div className={styles.btn_participation}>
                <GradientBtn
                  text='Participate'
                  clickAction={openParticipation}
                />
              </div>
              <div className={styles.categories_wrapper}>
                <input
                  className={styles.inputMobile}
                  disabled={'disabled'}
                  value={link}
                ></input>
                <input
                  className={styles.inputDesktop}
                  disabled={'disabled'}
                  value={link}
                ></input>

                <div className={styles.bottom}>
                  <CopyToClipboard
                    text={link}
                    onCopy={() => setCopyText('Copied')}
                  >
                    <button className={styles.copy_btn}>{copyText}</button>
                  </CopyToClipboard>
                  <div className={styles.share}>
                    <FacebookShareButton url={link} quote='Share'>
                      <span>Share</span>
                      <img src={share} alt='share' />
                    </FacebookShareButton>
                  </div>
                </div>
                <div className={styles.category_box}>
                  <div className={styles.right}>
                    <img src={heart} alt='heart' />
                    <span>30</span>
                  </div>
                </div>
              </div>
              {/* ************************************* */}
            </div>
            <div className={styles.btn}>
              <GradientBtn text='Harvest' />
              <GradientBtn text='Setting' clickAction={openSetting} />
            </div>
          </div>
        </section>

        <section className={styles.target_amount}>
          <div className={styles.target_desktop}>
            <div className={styles.amount_title}>
              <span className={styles.left}>Target amount:</span>
              <span className={styles.right}>${goal}</span>
            </div>
          </div>
          <div className={styles.copy_wrapper}>
            30 persons participated in this project until now. You can be one of
            them by pressing „Participate” Button!
          </div>
          <div className={styles.amount_wrap}>
            <div className={[styles.raised_amount, pro_class].join(' ')}>
              <span>${amount} raised</span>
            </div>
          </div>
        </section>

        <section className={styles.details}>
          <div className={styles.content_title}>
            <span>About this project</span>
          </div>
          <div className={styles.detail_content}>
            <img src={worker} alt='worker' />
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className={styles.detail_content}>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <img src={worker} alt='worker' />
          </div>
        </section>

        <section className={styles.organizer_wrapper}>
          <div className={styles.organizer_name}>
            <span className={styles.organizer_name_text}>Organizer Name</span>
          </div>
          <div className={styles.organizer_profile}>
            <div className={styles.organizer_profile_img}>
              <img
                src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
                alt='john'
              />
            </div>
            <div className={styles.organizer_profile_name}>
              <span className={styles.organizer_profile_name_text}>
                John Doe
              </span>
            </div>
          </div>
          <div className={styles.organizer_address}>
            <div className={styles.organizer_address_icon}>
              <img src={location} alt='location' />
            </div>
            <div className={styles.organizer_address_wrap}>
              <span className={styles.organizer_address_text}>
                9473 Rocky River Rd. Raleigh, NC 27603
              </span>
            </div>
          </div>
        </section>
        <section className={styles.organizer_wrapper_mobile}>
          <span className={styles.label}>Organizer</span>
          <span className={styles.value}>
            erd158qsdfqqdfqc4gutf9tqmqqlxmepm5mepm5t2dz99
          </span>
        </section>
      </div>
      <Modal
        classNames={{ root: 'modal_root', modal: 'vital_modal' }}
        open={openModal}
        onClose={onCloseModal}
        center
      >
        <ProjectSettings />
        <div className={styles.modal_content}></div>
      </Modal>
      <Modal
        classNames={{ root: 'modal_root', modal: 'vital_modal' }}
        open={openParticipationModal}
        onClose={onParticipationCloseModal}
        center
      >
        <Participation />
      </Modal>
    </div>
  );
}
