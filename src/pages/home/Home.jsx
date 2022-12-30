import tgFix from './../../media/tg-fixed.svg'
import user from './../../media/icon_user.svg'
import check from './../../media/check.svg'
import pc from './../../media/pc.png'
import arrow from './../../media/arrow.svg'
import bannerBg from './../../media/banner-1-bg.svg'
import fixedBg from './../../media/bg-image-banner.png'
import chat from './../../media/chat-ico.png'
import grafic from './../../media/grafic-ico.png'
import list from './../../media/list-ico.png'
import reword from './../../media/reword-ico.png'

import animJson from "./firstScreenAnim.json"



import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'

import ProjectsOnHome from '../../components/projects/Projects'
import TitleH2 from '../../components/title-h2/TitleH2'
import Servises from '../../components/services/Services'
import Questions from '../../components/questions/Questions'
import Cooperate from '../../components/cooperate/Cooperate'

const Home = (props) => {

   const container = useRef(null)

   useEffect(() => {
      lottie.loadAnimation({
         container: container.current,
         rerender: 'svg',
         loop: true,
         autoplay: true,
         animationData: animJson
      })
      return () => {
         lottie.destroy();
      }
   }, [])


   return (
      <div className="wrapper">
         <a href="" className="fixed-tg-link">
            <img src={tgFix} alt="телеграмм" />
         </a>
         <div className="bg-blur-1"></div>
         <div className="bg-blur-circle"></div>
         <div className="bg-blur-circle circ-2"></div>
         <div className="bg-blur-circle orng"></div>
         <div className="bg-blur-circle orng-2"></div>
         <div className="bg-blur-circle circ-3"></div>
         <div className="bg-blur-circle circ-4"></div>
         <div className="bg-blur-circle yellow"></div>
         <div className="modals">
         </div>

         <section className="first-screen">
            <div className="container">
               <div className="first-screen__intro">
                  <div className="first-screen__left">
                     <h1 className="first-screen__title title-h1"><span className="yellow-text">Разработка</span> уникальных сайтов для вашего бизнеса</h1>
                     <p className="first-screen__subtitle">Мы современная команда со свежим взглядом и эффективным подходом к веб-разработке. Нашей целью в каждом проекте является достижение максимального результата.
                     </p>
                     <a href="" className="first-screen__btn btn" onClick={props.openModal}>Заказть консультацию</a>
                  </div>
                  <div className="first-screen__right">
                     <div className="first-screen__anim" ref={container}></div>
                  </div>
               </div>
            </div>
         </section>

         <Cooperate />

         <Servises />

         <section className="banner">
            <div className="container">
               <div className="banner__wrap">
                  <h2 className="banner__title titleH2">Ещё не определились, какой тип сайта вам нужен?</h2>
                  <div className="banner__text">Оставьте заявку для получения бесплатной консультации по вашему бизнесу.</div>
                  <a href="" className="banner__btn btn">Заказть консультацию</a>
               </div>
            </div>
         </section>

         <section className="results">
            <div className="container">
               <h2 className="titleH2"><span className="yellow-text">На какие результаты</span> способен вывести сайт</h2>
               <div className="results__wrap">
                  <div className="results__image">
                     <img className="results__img" src={pc} alt="" />
                     <div className="results__image-bg"></div>
                  </div>
                  <div className="results__row">
                     <div className="results__item">
                        <div className="results__item-top">
                           <div className="results__item-check">
                              <svg className="results__item-icon" width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path className="results__item-icon" d="M2 9L9.64645 16.6464C9.84171 16.8417 10.1583 16.8417 10.3536 16.6464L25 2" stroke="#FFDD2D" strokeWidth="3" strokeLinecap="round" />
                              </svg>
                           </div>
                           <h3 className="results__title title-h3">Рост вашего бизнеса</h3>
                        </div>
                        <p className="results__item-text">Разработанный нами сайт выделится среди ваших конкуретнов и обеспечит поток заинтерисованных клиентов. </p>
                     </div>
                     <div className="results__item">
                        <div className="results__item-top">
                           <div className="results__item-check">
                              <svg className="results__item-icon" width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path className="results__item-icon" d="M2 9L9.64645 16.6464C9.84171 16.8417 10.1583 16.8417 10.3536 16.6464L25 2" stroke="#FFDD2D" strokeWidth="3" strokeLinecap="round" />
                              </svg>
                           </div>
                           <h3 className="results__title title-h3">Увеличение конверсии</h3>
                        </div>
                        <p className="results__item-text">Мы проводим анализ ваших потенциальных клиентов и
                           выявляем их главные потребности.</p>
                     </div>
                     <div className="results__item">
                        <div className="results__item-top">
                           <div className="results__item-check">
                              <svg className="results__item-icon" width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path className="results__item-icon" d="M2 9L9.64645 16.6464C9.84171 16.8417 10.1583 16.8417 10.3536 16.6464L25 2" stroke="#FFDD2D" strokeWidth="3" strokeLinecap="round" />
                              </svg>
                           </div>
                           <h3 className="results__title title-h3">Продвижение услуг</h3>
                        </div>
                        <p className="results__item-text">Получение новых возможностей для продвижения и продажи ваших услуг с помощью рекламы вашего сайта.</p>
                     </div>
                     <div className="results__item">
                        <div className="results__item-top">
                           <div className="results__item-check">
                              <svg className="results__item-icon" width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path className="results__item-icon" d="M2 9L9.64645 16.6464C9.84171 16.8417 10.1583 16.8417 10.3536 16.6464L25 2" stroke="#FFDD2D" strokeWidth="3" strokeLinecap="round" />
                              </svg>
                           </div>
                           <h3 className="results__title title-h3">Повышение доверия</h3>
                        </div>
                        <p className="results__item-text">Получение новых возможностей для продвижения и продажи ваших услуг с помощью рекламы вашего сайта.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <TitleH2 text='' yellowText='Реализованные нами' text1='проекты' />
         <ProjectsOnHome />

         <section className="banner">
            <div className="banner__wrap no-radius">
               <h2 className="banner__title titleH2">Ещё не определились, какой тип сайта вам нужен?</h2>
               <div className="banner__text">Оставьте заявку для получения бесплатной консультации по вашему бизнесу.</div>
               <a href="" className="banner__btn btn">Заказть консультацию</a>
            </div>
         </section>

         <section className="steps">
            <div className="container">
               <div className="titleH2 h2-large">Осталось всего несколько шагов <span className="yellow-text">до вашего сайта</span></div>
               <div className="steps__wrap">
                  <a href="" className="steps__item">
                     <div className="steps__content">
                        <h3 className="steps__title title-h3"><span className="steps__number">1.</span> Оставьте заявку</h3>
                        <div className="steps__text">Закажите бесплатную консультацию по вашей задачи. Мы подберем оптимальное решение для начала работа над проектом.</div>
                        <div className="steps__btn arrow-btn">
                           <div className="steps__btn-text">Перейти к услуге</div>
                           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className='arrow' d="M2 7C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9L2 7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928933C9.95262 0.538409 9.31946 0.538409 8.92893 0.928933C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM2 9L16 9L16 7L2 7L2 9Z" fill="var(--yellow)" />
                           </svg>
                        </div>
                     </div>
                     <img src={chat} alt="" className="steps__img" />
                     <div className="steps__bg-gradient"></div>
                  </a>
                  <div className="steps__item">
                     <div className="steps__content">
                        <h3 className="steps__title title-h3"><span className="steps__number">2.</span> Определяем задачи</h3>
                        <div className="steps__text">На этом этапе мы испольуем фирменный бриф для определения целей и ожиданий от проекта.</div>
                     </div>
                     <img src={list} alt="" className="steps__img" />
                     <div className="steps__bg-gradient"></div>
                  </div>
                  <div className="steps__item">
                     <div className="steps__content">
                        <h3 className="steps__title title-h3"><span className="steps__number">3.</span> Процесс разработки</h3>
                        <div className="steps__text">Основной этап создания сайта, включающий в себя разработку дизайна, а так же програмирования технической стороны.</div>
                     </div>
                     <img src={grafic} alt="" className="steps__img" />
                     <div className="steps__bg-gradient"></div>
                  </div>
                  <div className="steps__item">
                     <div className="steps__content">
                        <h3 className="steps__title title-h3"><span className="steps__number">4.</span> Готовый сайт</h3>
                        <div className="steps__text">Заключительным этапом ялвяется передача реализованного проекта вместе с инструкцией по его функционалу</div>
                     </div>
                     <img src={reword} alt="" className="steps__img reword" />
                     <div className="steps__bg-gradient"></div>
                  </div>
               </div>
            </div>
         </section>
         <Questions toggleQuestions={props.toggleQuestions} />

      </div>
   );
}

export default Home;