import React, { useState } from 'react'
import styles from './style.module.scss'

const CheckoutPage = ({ cart = [], product = null }) => {
	const [paymentMethod, setPaymentMethod] = useState('kaspi')
	const [promoCode, setPromoCode] = useState('')
	const [isOrderPlaced, setIsOrderPlaced] = useState(false)
	const [orderNumber, setOrderNumber] = useState(null)

	const [city, setCity] = useState('')
	const [street, setStreet] = useState('')
	const [house, setHouse] = useState('')
	const [entrance, setEntrance] = useState('')
	const [apartment, setApartment] = useState('')
	const [phone, setPhone] = useState('')

	const isFormValid =
		city.trim() &&
		street.trim() &&
		house.trim() &&
		entrance.trim() &&
		apartment.trim() &&
		phone.trim()

	const totalPrice = product
		? product.price
		: cart.reduce((sum, item) => sum + (item.price || 0) * (item.count || 1), 0)

	const handlePaymentChange = e => {
		setPaymentMethod(e.target.value)
	}

	const handleOrderPlacement = () => {
		if (!isFormValid) return
		const randomOrder = Math.floor(Math.random() * 900000 + 100000)
		setOrderNumber(randomOrder)
		setIsOrderPlaced(true)
	}

	return (
		<div className={styles.checkoutPage}>
			{isOrderPlaced ? (
				<div className={styles.orderPlaced}>
					<h2 className={styles.orderTitle}>Заказ размещен</h2>
					<p className={styles.orderText}>
						Номер вашего заказа: <strong>№{orderNumber}</strong>
					</p>
				</div>
			) : (
				<>
					<div className={styles.leftBlock}>
						<div className={styles.titleIn}>
							<h2 className={styles.title}>Доставка курьером</h2>
							<p className={styles.titlePrice}>499 ₸</p>
						</div>
						<iframe
							className={styles.map}
							src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCEz33sndv6d_cJCUtjvpJ_aruEwrJQ3EA&q=Кыргызстан'
							allowFullScreen
							loading='lazy'
							title='map'
						/>
						<div className={styles.adress}>
							<div className={styles.adressSvg}>
								<svg
									width='22'
									height='22'
									viewBox='0 0 22 22'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M11.0379 22L3.70937 15.5563C2.25993 14.2819 1.27286 12.6581 0.872967 10.8905C0.473076 9.12277 0.678327 7.29051 1.46277 5.62539C2.2472 3.96027 3.5756 2.53707 5.27996 1.53576C6.98433 0.534448 8.98812 0 11.0379 0C13.0878 0 15.0916 0.534448 16.7959 1.53576C18.5003 2.53707 19.8287 3.96027 20.6131 5.62539C21.3976 7.29051 21.6028 9.12277 21.2029 10.8905C20.803 12.6581 19.816 14.2819 18.3665 15.5563L11.0379 22ZM16.7382 14.1246C17.8655 13.1333 18.6331 11.8704 18.9441 10.4956C19.2551 9.12075 19.0954 7.69569 18.4852 6.40064C17.8751 5.10558 16.8419 3.99868 15.5163 3.21991C14.1907 2.44114 12.6322 2.02548 11.0379 2.02548C9.44367 2.02548 7.88519 2.44114 6.55959 3.21991C5.23399 3.99868 4.20079 5.10558 3.59065 6.40064C2.98051 7.69569 2.82083 9.12075 3.1318 10.4956C3.44277 11.8704 4.21042 13.1333 5.33768 14.1246L11.0379 19.1366L16.7382 14.1246ZM11.0379 11.1377C10.4271 11.1377 9.8413 10.9243 9.40938 10.5445C8.97746 10.1648 8.73481 9.64969 8.73481 9.11262C8.73481 8.57554 8.97746 8.06047 9.40938 7.6807C9.8413 7.30093 10.4271 7.08757 11.0379 7.08757C11.6488 7.08757 12.2346 7.30093 12.6665 7.6807C13.0984 8.06047 13.3411 8.57554 13.3411 9.11262C13.3411 9.64969 13.0984 10.1648 12.6665 10.5445C12.2346 10.9243 11.6488 11.1377 11.0379 11.1377Z'
										fill='#101010'
									/>
								</svg>
							</div>
							<div className={styles.adressTitle}>
								<h3>Адрес доставки</h3>
							</div>
						</div>

						<form className={styles.form}>
							<input
								type='text'
								placeholder='Город'
								className={styles.input}
								value={city}
								onChange={e => setCity(e.target.value)}
							/>
							<input
								type='text'
								placeholder='Улица/Район'
								className={styles.input}
								value={street}
								onChange={e => setStreet(e.target.value)}
							/>

							<div className={styles.formIn}>
								<input
									type='text'
									placeholder='Дом'
									className={styles.inputSmall}
									value={house}
									onChange={e => setHouse(e.target.value)}
								/>
								<input
									type='text'
									placeholder='Подъезд'
									className={styles.inputSmall}
									value={entrance}
									onChange={e => setEntrance(e.target.value)}
								/>
								<input
									type='text'
									placeholder='Квартира'
									className={styles.inputSmall}
									value={apartment}
									onChange={e => setApartment(e.target.value)}
								/>
							</div>
						</form>
					</div>

					<div className={styles.rightBlock}>
						<div className={styles.summary}>
							<h3 className={styles.summaryTitle}>Ваш заказ</h3>
							<ul className={styles.productList}>
								{product ? (
									<li className={styles.productItem}>
										{product.title} — {product.price.toFixed(0)} ₸
									</li>
								) : (
									cart.map((item, index) => (
										<li className={styles.productItem} key={index}>
											{item.title} —{' '}
											{(item.price * (item.count || 1)).toFixed(0)} ₸
										</li>
									))
								)}
							</ul>
						</div>

						<div className={styles.payment}>
							<h1 className={styles.title}>Способ оплаты</h1>

							<div className={styles.paymentOptions}>
								<div className={styles.radioGroup}>
									<input
										type='radio'
										id='kaspi'
										name='payment'
										value='kaspi'
										checked={paymentMethod === 'kaspi'}
										onChange={handlePaymentChange}
										className={styles.radioInput}
									/>
									<label htmlFor='kaspi' className={styles.radioLabel}>
										Kaspi.kz
									</label>
								</div>

								<div className={styles.radioGroup}>
									<input
										type='radio'
										id='visa'
										name='payment'
										value='visa'
										checked={paymentMethod === 'visa'}
										onChange={handlePaymentChange}
										className={styles.radioInput}
									/>
									<label htmlFor='visa' className={styles.radioLabel}>
										VISA / MasterCard
									</label>
								</div>
							</div>

							<p className={styles.description}>
								{paymentMethod === 'kaspi'
									? 'Счет будет выставлен на Kaspi.kz'
									: 'Оплата картой VISA или MasterCard'}
							</p>
						</div>

						<div className={styles.number}>
							<h1 className={styles.titleNum}>Номер получателя</h1>
							<div className={styles.phoneInputContainer}>
								<input
									type='tel'
									className={styles.phoneInput}
									placeholder='+7 ___ ___ __ __'
									value={phone}
									onChange={e => setPhone(e.target.value)}
								/>
							</div>
						</div>

						<button
							className={styles.checkoutButton}
							onClick={handleOrderPlacement}
							disabled={!isFormValid}
						>
							Закончить оформление
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default CheckoutPage
