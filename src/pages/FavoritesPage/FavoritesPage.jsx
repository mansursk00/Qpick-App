import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './style.module.scss' // если хочешь — можно перенести в scss

const FavoritesPage = ({ favorites, addToCart, language }) => {
	return (
		<div style={{ padding: '20px 165px' }}>
			<h2 style={{ marginBottom: '24px' }}>
				{language === 'ru' ? 'Избранное' : 'Favorites'}
			</h2>
			{favorites.length === 0 ? (
				<p>{language === 'ru' ? 'Пусто' : 'No items yet'}</p>
			) : (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
						gap: '30px',
					}}
				>
					{favorites.map(item => (
						<ProductCard
							key={item.id}
							{...item}
							isFavorite={true}
							addToCart={() => addToCart(item)}
							toggleFavorite={() => {}}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default FavoritesPage
