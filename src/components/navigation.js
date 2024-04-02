import logo from '../images/logo.svg'
import phone from '../images/phone.svg'
import styles from '../styles/navigation.module.css'

function Nav() {
    return (
        <nav>
            <img src={ logo } alt='logo' />
            <div id={styles.links}>
                <a href='.'>Обо мне</a>
                <a href='.'>Наставничество</a>
                <a href='.'>Мероприятия</a>
                <a href='.'>Кейсы</a>
                <a href='.'>Отзывы</a>
                <a href='.'>Контакты</a>
            </div>
            <div id={styles.phone}>
                <img src={ phone } alt='phone' />
                <span id={styles.number}>8-345-123-34-45</span>
            </div>
        </nav>
    )
}

export default Nav