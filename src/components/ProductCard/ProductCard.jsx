import React from 'react'
import styles from './style.module.scss'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = ({
	id,
	title,
	image,
	price,
	rating = { rate: 4.5 },
	isFavorite,
	addToCart,
	toggleFavorite,
}) => {
	return (
		<div className={styles.card}>
			{/* Кнопка избранного — вне Link */}
			<button className={styles.favorite} onClick={toggleFavorite}>
				<svg
					width='20'
					height='19'
					viewBox='0 0 20 19'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 17.8l-1.45-1.32C4.4 12.36 2 10.28 2 7.5 2 5.42 3.42 4 5.5 4c1.54 0 3.04.99 3.57 2.36h1.87C11.46 4.99 12.96 4 14.5 4 16.58 4 18 5.42 18 7.5c0 2.78-2.4 4.86-6.55 8L10 17.8z'
						fill={isFavorite ? '#000000' : '#FFFFFF'}
						stroke='#000000'
						strokeWidth='1.5'
					/>
				</svg>
			</button>

			{/* Обернутый в Link контент */}
			<Link to={`/product/${id}`} className={styles.link}>
				<img src={image} alt={title} className={styles.image} />
				<div className={styles.info}>
					<div className={styles.priceRow}>
						<h4 className={styles.title}>{title}</h4>
					</div>

					<div className={styles.bottomRow}>
						<div className={styles.rating}>
							<svg
								width='25'
								height='23'
								viewBox='0 0 25 23'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M12.627 18.2497L5.41636 22.6079L7.37665 14.4742L0.960938 9.03564L9.38233 8.36796L12.627 0.647087L15.8716 8.36796L24.2943 9.03564L17.8773 14.4742L19.8376 22.6079L12.627 18.2497Z'
									fill='#FFCE7F'
								/>
							</svg>
							<span>{rating.rate}</span>
						</div>

						<span className={styles.price}>{price.toFixed(0)} ₸</span>
					</div>
				</div>
			</Link>

			{}
			<button className={styles.cartBtn} onClick={addToCart}>
				<FaCartPlus />
			</button>
		</div>
	)
}

export default ProductCard
