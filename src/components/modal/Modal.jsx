import Form from '../form/Form';
import st from './modal.module.scss'

import cross from './../../media/modal-cross.svg'




const Modal = (props) => {
   return (
      <div className={props.active ? `${st.modalOverlay} ${st._open}` : `${st.modalOverlay}`} onClick={props.closeModal}>

         <div className={st.modal} onClick={e => e.stopPropagation()} >

            <div className={st.modal__content} >
               <div className={st.modal__bgCircle}></div>
               <div className={`${st.modal__bgCircle} modal__bg-circle_right`}></div>
               <img src={cross} alt="закрыть" className={st.modal__closeIcon} onClick={props.closeModal}/>
               <Form titleText={props.titleText}/>
            </div>

         </div>

      </div>
   );
}

export default Modal;