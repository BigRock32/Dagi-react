import CooperateItem from '../cooperateItem/cooperateItem';

import { cooperate } from '../../helpers/cooperateList';

import st from './cooperate.module.scss'

const Cooperate = () => {
   return (
      <section className={st.cooperate}>
         <div className="container">
            <h2 className="titleH2"><span className="yellow-text">Принципы нашего</span> сотрудничества</h2>
            <div className={st.cooperate__row}>
               {cooperate.map((cooperat, index) => {
                  return <CooperateItem key={index} number={cooperat.number} title={cooperat.title} text={cooperat.text} />
               })}
            </div>
         </div>
      </section>
   )
}

export default Cooperate;