import st from './titleH2.module.scss'

const TitleH2 = (props) => {
   return (
      <div className="container">
         <h2 className={st.titleH2}>
            {props.text} <span className="yellow-text">{props.yellowText}</span> {props.text1}
         </h2>
      </div>
   );
}

export default TitleH2;