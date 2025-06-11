import React from 'react'
import styles from './style.module.scss'
import { FaStar, FaHeart, FaRegHeart, FaCartPlus } from 'react-icons/fa'

const ProductCard = ({
	id,
	title,
	image,
	price,
	rating = { rate: 4.5 },
	isFavorite,
	addToCart,
	toggleFavorite,
	discount = 0,
}) => {
	const discountedPrice = discount ? price - (price * discount) / 100 : price

	return (
		<div className={styles.card}>
			<button className={styles.favorite} onClick={toggleFavorite}>
				{isFavorite ? <FaHeart color='#FF6F61' /> : <FaRegHeart />}
			</button>

			<img src={image} alt={title} className={styles.image} />

			<div className={styles.info}>
				<h4 className={styles.title}>{title}</h4>

				<div className={styles.priceRow}>
					<span className={styles.price}>{discountedPrice.toFixed(0)} ₸</span>
					{discount > 0 && (
						<span className={styles.oldPrice}>{price.toFixed(0)} ₸</span>
					)}
				</div>

				<div className={styles.bottomRow}>
					<div className={styles.rating}>
						<FaStar color='#FFB800' />
						<span>{rating.rate}</span>
					</div>
					<button className={styles.cartBtn} onClick={addToCart}>
						<FaCartPlus />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
