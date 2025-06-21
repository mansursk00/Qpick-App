import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './style.module.scss'

const SearchPage = ({ addToCart, toggleFavorite, favorites }) => {
	const [searchParams] = useSearchParams()
	const [products, setProducts] = useState([])
	const query = searchParams.get('query')?.toLowerCase() || ''

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(data => {
				const filtered = data.filter(item =>
					item.title.toLowerCase().includes(query)
				)
				setProducts(filtered)
			})
	}, [query])

	return (
		<div className={styles.searchPage}>
			<h2>Результаты для: {query}</h2>
			<div className={styles.grid}>
				{products.length > 0 ? (
					products.map(product => (
						<ProductCard
							key={product.id}
							{...product}
							addToCart={() => addToCart(product)}
							toggleFavorite={() => toggleFavorite(product)}
							isFavorite={favorites.some(fav => fav.id === product.id)}
						/>
					))
				) : (
					<p>Ничего не найдено.</p>
				)}
			</div>
		</div>
	)
}

export default SearchPage
