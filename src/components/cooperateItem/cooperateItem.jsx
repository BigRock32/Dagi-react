import st from './cooperateItem.module.scss'

const CooperateItem = ({number, title, text}) => {
   return (
      <div className={st.item}>
         <div className={st.item__numberBox}>
            <div className={st.item__number}>{number}</div>
         </div>
         <div className={st.item__content}>
            <h3 className={st.item__title}>{title}</h3>
            <p className={st.item__text}>{text}</p>
         </div>
      </div>
   );
}

export default CooperateItem;