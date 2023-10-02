import Form from '../form/Form';
import st from './modal.module.scss'

import cross from './../../media/cross-black.svg'
import TgButton from '../tg-button/TgButton';


const Modal = (props) => {
   return (
      <div className={props.active ? `${st.modalOverlay} ${st._open}` : `${st.modalOverlay}`} onClick={props.closeModal}>

         <div className={st.modal} onClick={e => e.stopPropagation()} >

            <div className={st.modal__top}>Связаться с нами</div>
            <div className={st.modal__content} >
               <div className={st.modal__bgCircle}></div>
               <div className={`${st.modal__bgCircle} ${st.modal__bgCircle_right}`}></div>
               <img src={cross} alt="закрыть" className={st.modal__closeIcon} onClick={props.closeModal} />
               <div className={st.modal__subtitle}>Наш менеджер уже ожидает Ваше сообщение</div>
               {/* <Form titleText={props.titleText} sendEmail={props.sendEmail} form={props.form} /> */}
               <TgButton />
            </div>

         </div>

      </div>
   );
}

export default Modal;