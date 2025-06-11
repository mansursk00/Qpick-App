import React from 'react'
import styles from './style.module.scss'

const Modal = ({ isOpen, message, onClose }) => {
	if (!isOpen) return null

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={e => e.stopPropagation()}>
				<p>{message}</p>
				<button onClick={onClose}>OK</button>
			</div>
		</div>
	)
}

export default Modal
