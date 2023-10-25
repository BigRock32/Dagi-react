import st from './backBtn.module.scss'

import backIcon from '../../media/backIcon.svg'

function BackBtn({ text }) {

   const returnBack = () => {
      window.history.back()
   }

   return (
      <div className={st.button} onClick={returnBack} >
         <img src={backIcon} alt="назад" />
      </div>
   )
}

export default BackBtn
