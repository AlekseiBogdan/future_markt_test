import MediaQuery from 'react-responsive';

import logo from '../images/logo.svg'
import phone from '../images/phone.svg'
import menu from '../images/menu.svg'

import styles from '../styles/navigation.module.css'

function Nav() {
    return (
        <nav>
            <img id={styles.logo} src={ logo } alt='logo' />            
            <MediaQuery minWidth={1440}>
                <div id={styles.links}>
                    <a href='.'>Обо мне</a>
                    <a href='.'>Наставничество</a>
                    <a href='.'>Мероприятия</a>
                    <a href='.'>Кейсы</a>
                    <a href='.'>Отзывы</a>
                    <a href='.'>Контакты</a>
                </div>
            </MediaQuery>
            <div id={styles.addInfo}>
                <MediaQuery maxWidth={1439}>
                    <img src={menu} alt='menu' />
                </MediaQuery>
                <img src={ phone } alt='phone' />
                <MediaQuery minWidth={1024}>
                    <span id={styles.number}>8-345-123-34-45</span>
                </MediaQuery>
            </div>
        </nav>
    )
}

export default Nav