import React from 'react'
import styles from './style.module.scss'
import {
	FaWhatsapp,
	FaVk,
	FaInstagram,
	FaTelegramPlane,
	FaPhoneAlt,
} from 'react-icons/fa'

const Contacts = () => {
	const officeLocation = {
		lat: 51.1605,
		lng: 71.4704,
	}

	const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCEz33sndv6d_cJCUtjvpJ_aruEwrJQ3EA&q=Comfort+Hotel+Astana,Astana&center=${officeLocation.lat},${officeLocation.lng}&zoom=15`

	return (
		<div className={styles.contactsContainer}>
			<div className={styles.mapCard}>
				<h3 className={styles.title}>Наш офис</h3>
				<div className={styles.mapWrapper}>
					<iframe
						title='Office Location'
						width='100%'
						height='100%'
						frameBorder='0'
						style={{ border: 0 }}
						src={mapUrl}
						allowFullScreen
					></iframe>
				</div>
				<div className={styles.address}>
					<p>Аксай-3а, 62Ф, Алматы, Казахстан</p>
					<span>3 этаж 35 кабинет</span>
				</div>
			</div>

			<div className={styles.socialBlock}>
				<a href='#'>
					<FaWhatsapp />
				</a>
				<a href='#'>
					<FaVk />
				</a>
				<a href='#'>
					<FaInstagram />
				</a>
				<a href='#'>
					<FaTelegramPlane />
				</a>
			</div>

			<div className={styles.phoneBlock}>
				<FaPhoneAlt />
				<a href='tel:+77777777777'>+7 777 777 77 77</a>
			</div>
		</div>
	)
}

export default Contacts
