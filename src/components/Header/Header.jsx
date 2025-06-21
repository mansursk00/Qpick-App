import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FiSmartphone, FiChevronDown } from 'react-icons/fi'
import styles from './style.module.scss'

const Header = ({ favoritesCount, cartCount }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedModel, setSelectedModel] = useState('Модель')
	const navigate = useNavigate()

	const models = [
		{
			label: 'WD 2TB Elements',
			query: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
		},
		{
			label: 'WD 4TB Gaming Drive',
			query:
				'WD 4TB Gaming Drive Works with Playstation 4 portable External Hard Drive',
		},
		{
			label: 'Silicon Power 256GB',
			query:
				'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
		},
		{
			label: 'SanDisk SSD PLUS',
			query: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
		},
		{
			label: 'Acer SB220Q',
			query: ' Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
		},
		{
			label: 'Samsung 49-Inch',
			query:
				'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
		},
	]

	const handleSelect = model => {
		setSelectedModel(model.label)
		setIsOpen(false)
		navigate(`/search?query=${encodeURIComponent(model.query)}`)
	}

	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<Link to='/' className={`${styles.logo} ${styles.qpick}`}>
					QPICK
				</Link>

				<div className={styles.wrapper}>
					<div className={styles.selector} onClick={() => setIsOpen(!isOpen)}>
						<FiSmartphone className={styles.icon} />
						<span className={styles.label}>{selectedModel}</span>
						<FiChevronDown
							className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
						/>
					</div>

					{isOpen && (
						<ul className={styles.dropdown}>
							{models.map(model => (
								<li
									key={model.query}
									className={styles.item}
									onClick={() => handleSelect(model)}
								>
									{model.label}
								</li>
							))}
						</ul>
					)}
				</div>
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
