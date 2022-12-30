import st from './question.module.scss'

import questArrow from './../../media/question-arrow.svg'

const Question = ({ question, index, toggleQuestions }) => {
   return (
      <div className={`${st.question}` + `${(question.open ? ` ${st._open}` : '')}`} onClick={() => toggleQuestions(index)}
         key={index}
      >
         <div className={st.question__head}>
            <div className={`${st.question__title} title-h2`}>{question.title}</div>
            <img src={questArrow} alt="" className={st.question__icon} />
         </div>
         <div className={st.question__body}>
            <div className={st.question__textBox}>
               <p className={st.question__text}>{question.text}</p>
            </div>
         </div>
      </div>
   );
}

//{question.open ? `${st.question} 'open' : '' `}

export default Question;