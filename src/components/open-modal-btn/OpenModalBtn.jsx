import st from './tgButton.module.scss'

function OpenModalBtn({ openModal }) {
   return (
      <button onClick={openModal} className={st.button} >Связаться с нами</button>
   )
}

export default OpenModalBtn