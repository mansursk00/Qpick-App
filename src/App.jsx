import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CartPage from './pages/CartPage/CartPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TermsModal from './components/TermsService/TermsService'
import Contacts from './components/Contacts/Contacts'

function App() {
	const [cart, setCart] = useState([])
	const [favorites, setFavorites] = useState([])
	const [language, setLanguage] = useState('ru')
	const [showTermsModal, setShowTermsModal] = useState(false)

	const toggleFavorite = product => {
		setFavorites(prev =>
			prev.find(item => item.id === product.id)
				? prev.filter(item => item.id !== product.id)
				: [...prev, product]
		)
	}

	const addToCart = product => {
		setCart(prev => [...prev, product])
	}

	const removeFromCart = id => {
		setCart(prev => prev.filter((item, idx) => idx !== id))
	}

	return (
		<>
			<Header
				cartCount={cart.length}
				favoritesCount={favorites.length}
				language={language}
				setLanguage={setLanguage}
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
							removeFromCart={removeFromCart}
							language={language}
						/>
					}
				/>
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
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
			<Footer
				language={language}
				setLanguage={setLanguage}
				onTermsClick={() => setShowTermsModal(true)}
			/>

			{}
			{showTermsModal && (
				<TermsModal onClose={() => setShowTermsModal(false)} />
			)}
		</>
	)
}

export default App
