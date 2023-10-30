import st from './tgButton.module.scss'

import tg from './../../media/tg-icon.svg'

function TgButton() {
   return (
      <a className={st.button} href='https://t.me/dagiwebagancy'>
         Перейти в Telegram
         <img src={tg} className={st.tgIcon} alt="иконка телеграмма" />
      </a>
   )
}

export default TgButton