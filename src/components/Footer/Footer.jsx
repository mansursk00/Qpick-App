// components/Footer/index.jsx
import React from 'react'
import styles from './style.module.scss'
import { FaVk, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = ({ language, setLanguage, onTermsClick }) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.logo}>QPICK</div>
			<div className={styles.menu}>
				<Link to='/favorites'>Избранное</Link>
				<Link to='/cart'>Корзина</Link>
				<Link to='/contacts'>Контакты</Link>
			</div>
			<div className={styles.serviceLang}>
				<a
					href='#'
					className={styles.service}
					onClick={e => {
						e.preventDefault()
						onTermsClick()
					}}
				>
					Условия сервиса
				</a>
				<div className={styles.lang}>
					<FaGlobe />
					<span onClick={() => setLanguage('kz')}>Каз</span>
					<span
						className={language === 'ru' ? styles.active : ''}
						onClick={() => setLanguage('ru')}
					>
						Рус
					</span>
					<span onClick={() => setLanguage('en')}>Eng</span>
				</div>
			</div>
			<div className={styles.socials}>
				<FaVk />
				<FaInstagram />
				<FaTelegramPlane />
				<FaWhatsapp />
			</div>
		</footer>
	)
}

export default Footer
