import st from './contacts.module.scss'

import ContactsForm from './../../components/contacts-form/ContactsForm'

const Contacts = () => {
   return (
      <section className={`${st.contacts} first-screen-padding`}>
         <div className="container">
            <div className={st.contacts__row}>
               <div className={st.contacts__content}>
                  <h1 className={`${st.contacts__title} title-h1`}>Контакты</h1>
                  <div className={st.contacts__contentRow}>
                     <div className={st.contacts__item}>
                        <h2 className={`${st.contacts__titleH2} titleH2`}>Местоположение</h2>
                        <div className={st.contacts__subtitle}>Санкт-Петербург, Россия / Bali, Indonesia</div>
                     </div>
                     <div className={st.contacts__item}>
                        <div className={st.contacts__socials}>
                           <a href="" className={`${st.contacts__link} titleH2`}>Telegram</a>
                           <span className={`${st.contacts__sep} titleH2`}>/</span>
                           <a href="" className={`${st.contacts__link} titleH2`}>WhatsApp</a>
                        </div>
                        <div className={st.contacts__subtitle}>+7 (999) 999-92-12 </div>
                     </div>
                     <div className={st.contacts__item}>
                        <h2 className={`${st.contacts__titleH2} titleH2`}>Email</h2>
                        <a href='' className={`${st.contacts__subtitle} ${st.contacts__subtitle_link}`}>Dagiweb@gmail.com</a>
                     </div>
                  </div>
               </div>
               <div className={st.contacts__form}>
                  <ContactsForm />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contacts;