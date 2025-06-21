import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'
import { FiTrash } from 'react-icons/fi'
import { FaMinus, FaPlus, FaTruck } from 'react-icons/fa'

const CartPage = ({ cart, setCart, removeFromCart, language }) => {
	const navigate = useNavigate()

	const handleIncrease = index => {
		const updatedCart = [...cart]
		updatedCart[index].count = (updatedCart[index].count || 1) + 1
		setCart(updatedCart)
	}

	const handleDecrease = index => {
		const updatedCart = [...cart]
		if ((updatedCart[index].count || 1) > 1) {
			updatedCart[index].count -= 1
			setCart(updatedCart)
		}
	}

	const total = cart.reduce(
		(sum, item) => sum + item.price * (item.count || 1),
		0
	)

	return (
		<div className={styles.cartPage}>
			{cart.length === 0 ? (
				<div className={styles.emptyCart}>
					<img
						src='/assets/cart.png'
						alt={language === 'ru' ? 'Пустая корзина' : 'Empty cart'}
						className={styles.emptyCartImage}
					/>
					<h2 className={styles.title}>
						{language === 'ru' ? 'Корзина пуста' : 'Cart is empty'}
					</h2>
					<p className={styles.message}>
						{language === 'ru'
							? 'Но это никогда не поздно исправить :)'
							: "But it's never too late to fix that :)"}
					</p>
					<button
						className={styles.catalogButton}
						onClick={() => navigate('/')}
					>
						{language === 'ru' ? 'В каталог товаров' : 'Go to product catalog'}
					</button>
				</div>
			) : (
				<div className={styles.cartContent}>
					<div className={styles.leftSide}>
						{cart.map((item, index) => (
							<div className={styles.cartItemBox} key={index}>
								<div className={styles.itemInfo}>
									<img
										src={item.image}
										alt={item.title}
										className={styles.itemImage}
									/>
									<div>
										<h3 className={styles.itemTitle}>{item.title}</h3>
										<p className={styles.itemPrice}>
											{item.price.toFixed(0)} ₸
										</p>
									</div>
								</div>

								<div className={styles.itemControls}>
									<div className={styles.quantityControls}>
										<button
											className={styles.minus}
											onClick={() => handleDecrease(index)}
										>
											<FaMinus />
										</button>
										<span className={styles.count}>{item.count || 1}</span>
										<button
											className={styles.plus}
											onClick={() => handleIncrease(index)}
										>
											<FaPlus />
										</button>
									</div>
									<span className={styles.totalItemPrice}>
										{(item.price * (item.count || 1)).toFixed(0)} ₸
									</span>
									<button
										className={styles.removeButton}
										onClick={() => removeFromCart(index)}
										aria-label={
											language === 'ru' ? 'Удалить товар' : 'Remove item'
										}
									>
										<FiTrash />
									</button>
								</div>
							</div>
						))}

						<div className={styles.deliveryBox}>
							<div className={styles.deliveryHeader}>
								<h3>{language === 'ru' ? 'Доставка' : 'Delivery'}</h3>
							</div>
							<iframe
								className={styles.map}
								src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCEz33sndv6d_cJCUtjvpJ_aruEwrJQ3EA&q=Казахстан'
								allowFullScreen
								loading='lazy'
								title='map'
							/>
							<div className={styles.deliveryFooter}>
								<FaTruck />
								<span>
									{language === 'ru' ? 'Доставка курьером' : 'Courier delivery'}
								</span>
								<span className={styles.deliveryPrice}>499 ₸</span>
							</div>
						</div>
					</div>

					<div className={styles.summaryBox}>
						<h3>{language === 'ru' ? 'ИТОГО' : 'TOTAL'}</h3>
						<p className={styles.summaryPrice}>{total.toFixed(0)} ₸</p>
						<button
							className={styles.checkoutBtn}
							onClick={() => navigate('/checkout')}
						>
							{language === 'ru'
								? 'Перейти к оформлению'
								: 'Proceed to checkout'}
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default CartPage
