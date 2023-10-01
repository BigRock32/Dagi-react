import logo from './../../media/logo.svg'
import whatsapp from './../../media/Whatsapp.svg'
import tg from './../../media/Telegram.svg'

import './footer.scss'
import { NavLink } from 'react-router-dom'


const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__row">
               <div className="footer__wrap">
                  <div className="footer__top">
                     <div className="footer__logo">
                        <img src={logo} alt="" className="footer__logo-img" />
                     </div>
                     <div className="footer__nav">
                        <NavLink to='/' className="footer__link">Главная</NavLink>
                        <NavLink to='/projects' className="footer__link">Проекты</NavLink>
                        <NavLink to='/contacts' className="footer__link">Контакты</NavLink>
                     </div>
                     <div className="footer__social">
                        {/* <a href="" className="footer__icon">
                           <svg className="footer__icon" width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="white" strokeOpacity="0.2" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_b_664_930)">
                                 <rect width="56" height="56" rx="15" fill="white" fillOpacity="0.04" />
                                 <g clipPath="url(#clip0_664_930)">
                                    <path className="footer__icon footer__icon_inner" fillRule="evenodd" clip-rule="evenodd" d="M35.22 31.1761C34.8227 30.9774 32.8747 30.0201 32.512 29.8867C32.1493 29.7547 31.8853 29.6894 31.62 30.0867C31.356 30.4814 30.5973 31.3747 30.3667 31.6387C30.1347 31.9041 29.904 31.9361 29.508 31.7387C29.112 31.5387 27.8347 31.1214 26.3213 29.7721C25.144 28.7214 24.348 27.4241 24.1173 27.0267C23.8867 26.6307 24.092 26.4161 24.2907 26.2187C24.4693 26.0414 24.6867 25.7561 24.8853 25.5254C25.084 25.2934 25.1493 25.1281 25.2813 24.8627C25.4147 24.5987 25.348 24.3681 25.248 24.1694C25.1493 23.9707 24.3573 22.0201 24.0267 21.2267C23.7053 20.4547 23.3787 20.5601 23.136 20.5467C22.904 20.5361 22.64 20.5334 22.376 20.5334C22.112 20.5334 21.6827 20.6321 21.32 21.0294C20.956 21.4254 19.9333 22.3841 19.9333 24.3347C19.9333 26.2841 21.352 28.1681 21.5507 28.4334C21.7493 28.6974 24.344 32.7 28.3187 34.416C29.2653 34.824 30.0027 35.068 30.5773 35.2494C31.5267 35.552 32.3907 35.5094 33.0733 35.4067C33.8333 35.2934 35.4173 34.448 35.748 33.5227C36.0773 32.5974 36.0773 31.8041 35.9787 31.6387C35.88 31.4734 35.616 31.3747 35.2187 31.1761H35.22ZM27.9907 41.0467H27.9853C25.6246 41.0471 23.3072 40.4125 21.276 39.2094L20.796 38.924L15.8067 40.2334L17.1387 35.3694L16.8253 34.8707C15.5055 32.7698 14.8071 30.3384 14.8107 27.8574C14.8133 20.5907 20.7253 14.6787 27.996 14.6787C31.516 14.6787 34.8253 16.0521 37.3133 18.5427C38.5405 19.7648 39.5132 21.2181 40.175 22.8186C40.8369 24.419 41.1748 26.1348 41.1693 27.8667C41.1667 35.1334 35.2547 41.0467 27.9907 41.0467ZM39.2067 16.6507C37.7376 15.172 35.9896 13.9994 34.0641 13.2011C32.1386 12.4028 30.0738 11.9946 27.9893 12.0001C19.2507 12.0001 12.136 19.1134 12.1333 27.8561C12.1293 30.6384 12.8592 33.3726 14.2493 35.7827L12 44L20.4053 41.7947C22.7305 43.0615 25.3361 43.7253 27.984 43.7254H27.9907C36.7293 43.7254 43.844 36.612 43.8467 27.8681C43.8531 25.7844 43.4463 23.7202 42.6499 21.7948C41.8535 19.8693 40.6831 18.1209 39.2067 16.6507Z" fill="white" fill-opacity="0.5" />
                                 </g>
                                 <rect x="0.5" y="0.5" width="55" height="55" rx="14.5" />
                              </g>
                              <defs>
                                 <filter id="filter0_b_664_930" x="-10" y="-10" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_664_930" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_664_930" result="shape" />
                                 </filter>
                                 <clipPath id="clip0_664_930">
                                    <rect width="32" height="32" fill="white" transform="translate(12 12)" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </a> */}
                        <a href="https://t.me/Vaska325" className="footer__icon">
                           <svg className="footer__icon" width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="white" strokeOpacity="0.2" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_b_664_933)">
                                 <rect width="56" height="56" rx="15" fill="white" fill-opacity="0.04" />
                                 <path className="footer__icon footer__icon_inner" d="M10.4833 27.2582C13.757 25.4651 17.4113 23.9686 20.8257 22.4644C26.6999 20.0007 32.5973 17.5797 38.5543 15.3258C39.7133 14.9417 41.7958 14.5662 42 16.2741C41.8882 18.6916 41.4282 21.095 41.1127 23.4984C40.3119 28.7836 39.3864 34.0507 38.4838 39.3186C38.1729 41.0733 35.9623 41.9816 34.5478 40.8587C31.1486 38.5756 27.7232 36.3147 24.3673 33.9786C23.2681 32.8679 24.2874 31.2728 25.2692 30.4797C28.0689 27.7361 31.0381 25.4051 33.6915 22.5198C34.4072 20.8011 32.2924 22.2496 31.5949 22.6934C27.762 25.3197 24.023 28.1065 19.982 30.4147C17.9178 31.5446 15.512 30.579 13.4488 29.9485C11.5989 29.1869 8.88823 28.4195 10.4833 27.2582Z" fill="white" fill-opacity="0.5" />
                                 <rect x="0.5" y="0.5" width="55" height="55" rx="14.5" />
                              </g>
                              <defs>
                                 <filter id="filter0_b_664_933" x="-10" y="-10" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_664_933" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_664_933" result="shape" />
                                 </filter>
                              </defs>
                           </svg>
                        </a>
                     </div>
                  </div>
                  <div className="footer__subtop">
                     
                     <div className="footer__social footer__social_mob">
                        {/* <a href="" className="footer__icon">
                           <img src={whatsapp} alt="" />
                        </a> */}
                        <a href="https://t.me/Vaska325" className="footer__icon">
                           <img src={tg} alt="" />
                        </a>
                     </div>
                  </div>
               </div>
               <div className="footer__bottom">
                  <div className="footer__copywright">© 2022 Dagi-web. Все права защищены</div>
                  <a href="mailto:dev@dagiweb.com" className="footer__mail">dev@dagiweb.com</a>
                  <a href="" className="footer__privacy">политика конфиденциальности</a>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;