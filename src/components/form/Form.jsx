import st from './form.module.scss'

const Form = (props) => {

   return (
      <form name='popupForm' data-netlify='true' method='POST' onSubmit='submit' className={st.form}>
         <h2 className={st.form__title} >{props.titleText}</h2>
         <div className={`${st.form__item} ${st.form__item_first}`}>
            <input id="formName" type="text" name="name" placeholder=" " className={`${st.form__input} _req`} />
            <lable for="formName" className={st.form__lable}>Ваше имя</lable>
            <svg className={st.form__inputImg} width="20" height="21" viewBox="0 0 20 21" fill="white" opacity="0.7" xmlns="http://www.w3.org/2000/svg">
               <path d="M16.1873 13.0628C15.2342 12.1098 14.0999 11.4043 12.8622 10.9772C14.1878 10.0642 15.0586 8.53627 15.0586 6.80861C15.0586 4.0193 12.7893 1.75 10 1.75C7.21072 1.75 4.94142 4.0193 4.94142 6.80861C4.94142 8.53634 5.81229 10.0643 7.13788 10.9772C5.90023 11.4043 4.76587 12.1098 3.81284 13.0628C2.16017 14.7155 1.25 16.9128 1.25 19.25H2.61719C2.61719 15.1792 5.92911 11.8672 10 11.8672C14.071 11.8672 17.3829 15.1791 17.3829 19.25H18.7501C18.7501 16.9128 17.8399 14.7154 16.1873 13.0628ZM10 10.5C7.96459 10.5 6.30861 8.84402 6.30861 6.80855C6.30861 4.77307 7.96459 3.11712 10 3.11712C12.0355 3.11712 13.6915 4.77307 13.6915 6.80855C13.6915 8.84402 12.0355 10.5 10 10.5V10.5Z" />
            </svg>
         </div>
         <div className={st.form__item}>
            <input id="formEmail" type="text" name="email" placeholder=" " className={`${st.form__input} _req _email`} />
            <lable for="formEmail" className={st.form__lable}>E-mail</lable>
            <svg className={st.form__inputImg} width="20" height="21" viewBox="0 0 20 21" fill="white" opacity="0.7" xmlns="http://www.w3.org/2000/svg">
               <path d="M14.1847 13.9508C12.9317 15.3292 11.428 15.9557 9.67373 15.8304C8.29537 15.7051 7.16763 15.2039 6.29049 14.2014C4.28561 12.3219 4.16031 9.18922 6.03988 7.05904C6.66641 6.30721 7.54355 5.80598 8.54599 5.55537C9.54843 5.30476 10.5509 5.30476 11.5533 5.55537C12.5557 5.80598 13.3076 6.30721 14.0594 7.18434C14.0594 6.80843 14.0594 6.43251 14.0594 6.0566C14.0594 5.68068 14.31 5.30476 14.6859 5.30476C15.0619 5.30476 15.3125 5.55537 15.3125 6.0566C15.3125 8.43739 15.3125 10.8182 15.3125 13.199C15.3125 13.9508 15.8137 14.5773 16.5655 14.7026C17.192 14.828 17.9439 14.452 18.0692 13.8255C18.5704 12.5725 18.6957 11.4447 18.5704 10.0664C18.4451 8.18678 17.6933 6.55782 16.5655 5.17946C15.1872 3.55049 13.5582 2.54805 11.5533 2.29744C7.79415 1.67092 4.16031 3.42519 2.40604 6.80843C1.5289 8.18678 1.27829 9.81575 1.40359 11.6953C1.77951 15.0786 4.41092 18.0859 7.79415 18.963C10.0496 19.5895 12.1798 19.2136 14.31 18.0859C14.4353 17.9606 14.6859 17.8353 14.9365 17.8353C15.1872 17.8353 15.4378 18.0859 15.5631 18.3365C15.6884 18.5871 15.5631 18.963 15.1872 19.0883C14.31 19.5896 13.3076 20.0908 12.3051 20.2161C9.04721 20.9679 6.16519 20.2161 3.65909 18.0859C1.77951 16.5822 0.651764 14.5773 0.275848 12.3219C-0.225372 9.69044 0.275848 7.18434 1.77951 4.92885C3.40848 2.54805 5.53866 1.1697 8.29538 0.668475C11.0521 0.167254 13.6835 0.79378 15.939 2.42275C18.0692 3.92641 19.3222 6.0566 19.8234 8.688C20.1994 10.4423 19.9488 12.1965 19.3222 13.9508C18.9463 15.0786 17.9439 15.8304 16.8161 15.8304C15.6884 15.9557 14.6859 15.2039 14.1847 13.9508C14.1847 14.0761 14.1847 14.0761 14.1847 13.9508ZM14.0594 10.5676C14.0594 8.31209 12.3051 6.55782 10.0496 6.55782C7.79416 6.55782 6.03988 8.43739 6.03988 10.5676C6.03988 12.6978 7.79416 14.5773 10.0496 14.5773C12.1798 14.5773 14.0594 12.8231 14.0594 10.5676Z" />
            </svg>
         </div>
         <button type="submit" className={st.form__button}>Отправить заявку</button>
      </form>
   );
}

export default Form;