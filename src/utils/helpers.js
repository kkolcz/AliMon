export const formatDate = (date, locale = 'pl-PL') => {
	if (!date) return ''

	if (typeof date === 'string' && /^\d{2}[./]\d{2}[./]\d{4}$/.test(date)) {
		return date.replace(/\//g, '.')
	}

	if (typeof date === 'string') {
		const parts = date.split(/[./\-]/)
		if (parts.length === 3) {
			const [day, month, year] = parts
			const dateObj = new Date(year, month - 1, day)
			if (!isNaN(dateObj.getTime())) {
				return dateObj.toLocaleDateString(locale, {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
				})
			}
		}
	}

	const dateObj = date instanceof Date ? date : new Date(date)
	if (!isNaN(dateObj.getTime())) {
		return dateObj.toLocaleDateString(locale, {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		})
	}

	return 'Invalid Date'
}

export const isValidEmail = email => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

export const isValidShipmentNumber = number => {
	return number && number.length >= 5 && /^[A-Z0-9]+$/i.test(number)
}

export const truncateText = (text, maxLength = 100) => {
	if (!text || text.length <= maxLength) return text
	return text.substring(0, maxLength) + '...'
}

export const debounce = (func, wait = 300) => {
	let timeout
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout)
			func(...args)
		}
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
	}
}

export const getInitials = name => {
	if (!name) return ''
	return name
		.split(' ')
		.map(word => word[0])
		.join('')
		.toUpperCase()
		.substring(0, 2)
}

export const isMobileDevice = () => {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const parseFirebaseError = error => {
	const errorCode = error?.code || ''

	const errorMessages = {
		'auth/user-not-found': 'Nie znaleziono użytkownika',
		'auth/wrong-password': 'Nieprawidłowe hasło',
		'auth/email-already-in-use': 'Ten email jest już używany',
		'auth/weak-password': 'Hasło jest zbyt słabe (min. 6 znaków)',
		'auth/invalid-email': 'Nieprawidłowy adres email',
		'auth/too-many-requests': 'Zbyt wiele prób. Spróbuj później',
	}

	return errorMessages[errorCode] || 'Wystąpił nieoczekiwany błąd'
}
