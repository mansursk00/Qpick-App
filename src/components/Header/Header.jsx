import React, { useState } from 'react'
import styles from './style.module.scss'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FiSmartphone, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedModel, setSelectedModel] = useState('')

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleSelect = model => {
		setSelectedModel(model)
		setIsOpen(false)
	}

	const models = [' iPhone 12', ' iPhone 12 Max', 'iPhone 13', 'iPhone 13 Max']

	const favoritesCount = 2
	const cartCount = 3

	return (
		<header className={styles.header}>
			<Link to='/'>
				<h3 className={styles.qpick}>QPICK</h3>
			</Link>
			<div className={styles.wrapper}>
				<div className={styles.selector} onClick={toggleDropdown}>
					<FiSmartphone className={styles.icon} />
					<span className={styles.label}>
						{selectedModel || 'Выбрать модель телефона'}
					</span>
					<FiChevronDown
						className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
					/>
				</div>

				{isOpen && (
					<ul className={styles.dropdown}>
						{models.map(model => (
							<li
								key={model}
								className={styles.item}
								onClick={() => handleSelect(model)}
							>
								{model}
							</li>
						))}
					</ul>
				)}
			</div>
			<div className={styles.right}>
				<Link to='/favorites' className={styles.icon}>
					<FaHeart />
					{favoritesCount > 0 && <span>{favoritesCount}</span>}
				</Link>
				<Link to='/cart' className={styles.icon}>
					<FaShoppingCart />
					{cartCount > 0 && <span>{cartCount}</span>}
				</Link>
			</div>
		</header>
	)
}

export default Header
