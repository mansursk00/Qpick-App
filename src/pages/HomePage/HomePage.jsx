import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard'

const HomePage = ({ addToCart, toggleFavorite, favorites, language }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(data => {
				const filtered = data.filter(
					product =>
						!['jewelery', "men's clothing", "women's clothing"].includes(
							product.category
						)
				)
				setProducts(filtered)
			})
	}, [])
	console.log(products)

	return (
		<div className={styles.container}>
			<header className={styles.banner}>
				<h2>
					Аксессуары для <br /> iPhone 13 Pro Max
				</h2>
				<div className={styles.img}>
					{/* <img src='public/assets/banner-phone.png' alt='Iphone' /> */}
				</div>
			</header>

			<section className={styles.section}>
				<h3>{language === 'ru' ? 'Товары' : 'Products'}</h3>
				<div className={styles.cardGrid}>
					{products.map(item => (
						<ProductCard
							key={item.id}
							{...item}
							isFavorite={favorites.some(f => f.id === item.id)}
							addToCart={() => addToCart(item)}
							toggleFavorite={() => toggleFavorite(item)}
						/>
					))}
				</div>
			</section>
		</div>
	)
}

export default HomePage
