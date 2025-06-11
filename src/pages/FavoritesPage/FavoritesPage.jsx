import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'

const FavoritesPage = ({ favorites, addToCart, language }) => {
	return (
		<div style={{ padding: '20px' }}>
			<h2>{language === 'ru' ? 'Избранное' : 'Favorites'}</h2>
			{favorites.length === 0 ? (
				<p>{language === 'ru' ? 'Пусто' : 'No items yet'}</p>
			) : (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
						gap: '16px',
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
