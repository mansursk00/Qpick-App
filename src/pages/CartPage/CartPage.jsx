import React from 'react'
import styles from './style.module.scss'

const CartPage = ({ cart, removeFromCart, language }) => {
	const total = cart.reduce((sum, item) => sum + item.price, 0)

	return (
		<div className={styles.cartPage}>
			{cart.length === 0 ? (
				<div className={styles.emptyCart}>
					<h2 className={styles.title}>
						{language === 'ru' ? 'Корзина пуста' : 'Cart is empty'}
					</h2>
					<p className={styles.message}>
						{language === 'ru'
							? 'Но это никогда не поздно исправить :)'
							: "But it's never too late to fix that :)"}
					</p>
					<button className={styles.catalogButton}>
						{language === 'ru' ? 'В каталог товаров' : 'Go to product catalog'}
					</button>
				</div>
			) : (
				<>
					<h2 className={styles.title}>
						{language === 'ru' ? 'Корзина' : 'Cart'}
					</h2>

					<ul className={styles.cartList}>
						{cart.map((item, index) => (
							<li key={index} className={styles.cartItem}>
								<span className={styles.itemTitle}>{item.title}</span>
								<span className={styles.itemPrice}>
									${item.price.toFixed(2)}
								</span>
								<button
									onClick={() => removeFromCart(index)}
									className={styles.removeButton}
									aria-label={
										language === 'ru' ? 'Удалить товар' : 'Remove item'
									}
								>
									✕
								</button>
							</li>
						))}
					</ul>

					<div className={styles.total}>
						<h3>
							{language === 'ru' ? 'Итого' : 'Total'}:{' '}
							<span>${total.toFixed(2)}</span>
						</h3>
					</div>
				</>
			)}
		</div>
	)
}

export default CartPage
