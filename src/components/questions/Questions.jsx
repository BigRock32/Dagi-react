import st from './questions.module.scss'

import Question from '../question/Question';
import { questions } from '../../helpers/questionsList';

import server from './../../media/server.png'


const Questions = ({toggleQuestions}) => {
   return (
      <section className={st.questions}>
         <div className="container">
            <div className={st.questions__wrap}>
               <div className={st.questions__intro}>
                  <h2 className={`${st.questions__title} titleH2`}>Возможно у вас <span className="yellow-text">остались вопросы к нам</span>
                  </h2>
                  <div className={st.questions__subtitle}>Не нашли ответа на свой вопрос? Задайте его нам, а мы не будем отвечать</div>
                  <a href="#" className={`${st.questions__btn} btn`}>Написать нам</a>
               </div>
               <div className={st.questions__content}>
                  {questions.map((question, i) => {
                     return <Question index={i} question={question} toggleQuestions={toggleQuestions} />
                  })}
               </div>
               <img src={server} alt="" className={st.questions__bgImg} />
               <div className={st.questions__bgGradient}></div>
            </div>
         </div>
      </section>
   );
}

export default Questions;