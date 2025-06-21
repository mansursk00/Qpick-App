import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CartPage from './pages/CartPage/CartPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import ProductPage from './pages/ProductPage/ProductPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TermsModal from './components/TermsService/TermsService'
import Contacts from './components/Contacts/Contacts'
import SearchPage from './pages/SearchPage/SearchPage'

function App() {
	const [cart, setCart] = useState([])
	const [favorites, setFavorites] = useState([])
	const [language, setLanguage] = useState('ru')
	const [showTermsModal, setShowTermsModal] = useState(false)

	// Добавление/удаление из избранного
	const toggleFavorite = product => {
		setFavorites(prev =>
			prev.find(item => item.id === product.id)
				? prev.filter(item => item.id !== product.id)
				: [...prev, product]
		)
	}

	// Добавление товара в корзину (увеличивает count, если уже есть)
	const addToCart = product => {
		setCart(prev => {
			const existingIndex = prev.findIndex(item => item.id === product.id)
			if (existingIndex !== -1) {
				const updated = [...prev]
				updated[existingIndex].count = (updated[existingIndex].count || 1) + 1
				return updated
			}
			return [...prev, { ...product, count: 1 }]
		})
	}

	// Удаление товара из корзины по индексу
	const removeFromCart = index => {
		setCart(prev => prev.filter((_, i) => i !== index))
	}

	return (
		<>
			<Header
				favoritesCount={favorites.length}
				cartCount={cart.reduce((acc, item) => acc + (item.count || 1), 0)}
				language={language}
			/>

			<Routes>
				<Route
					path='/'
					element={
						<HomePage
							addToCart={addToCart}
							toggleFavorite={toggleFavorite}
							favorites={favorites}
							language={language}
						/>
					}
				/>
				<Route
					path='/cart'
					element={
						<CartPage
							cart={cart}
							setCart={setCart} // ← передаём для счётчика
							removeFromCart={removeFromCart}
							language={language}
						/>
					}
				/>
				<Route path='/checkout' element={<CheckoutPage cart={cart} />} />
				<Route
					path='/favorites'
					element={
						<FavoritesPage
							favorites={favorites}
							addToCart={addToCart}
							language={language}
						/>
					}
				/>
				<Route
					path='/product/:id'
					element={<ProductPage addToCart={addToCart} />}
				/>
				<Route path='/contacts' element={<Contacts />} />
				<Route
					path='/search'
					element={
						<SearchPage
							addToCart={addToCart}
							toggleFavorite={toggleFavorite}
							favorites={favorites}
							language={language}
						/>
					}
				/>
			</Routes>

			<Footer
				language={language}
				setLanguage={setLanguage}
				onTermsClick={() => setShowTermsModal(true)}
			/>

			{showTermsModal && (
				<TermsModal onClose={() => setShowTermsModal(false)} />
			)}
		</>
	)
}

export default App
