// Application constants

export const APP_NAME = 'AliMon'
export const APP_DESCRIPTION = 'Monitoring Paczek z AliExpress'

// Routes
export const ROUTES = {
	HOME: '/home',
	WELCOME: '/',
	LOGIN: '/account/login',
	REGISTER: '/account/register',
}

// Tracking URL
export const TRACKING_URL = 'https://alipaczka.pl/?track='

// Date format
export const DATE_FORMAT = 'DD.MM.YYYY'
export const DATE_LOCALE = 'pl-PL'

// Table configuration
export const TABLE_MIN_WIDTH = 1000
export const MOBILE_BREAKPOINT = 900

// Form validation
export const VALIDATION = {
	SHIPMENT_NAME_MIN_LENGTH: 2,
	SHIPMENT_NAME_MAX_LENGTH: 100,
	SHIPMENT_NUMBER_MIN_LENGTH: 5,
	SHIPMENT_NUMBER_MAX_LENGTH: 50,
	DESCRIPTION_MAX_LENGTH: 500,
}

// Toast messages
export const MESSAGES = {
	SUCCESS: {
		SHIPMENT_ADDED: 'Przesyłka została dodana pomyślnie',
		SHIPMENT_UPDATED: 'Przesyłka została zaktualizowana',
		SHIPMENT_DELETED: 'Przesyłka została usunięta',
		LOGIN_SUCCESS: 'Zalogowano pomyślnie',
		REGISTER_SUCCESS: 'Konto utworzone pomyślnie',
	},
	ERROR: {
		GENERIC: 'Wystąpił błąd. Spróbuj ponownie.',
		LOGIN_FAILED: 'Nieprawidłowy email lub hasło',
		REGISTER_FAILED: 'Nie udało się utworzyć konta',
		VALIDATION_FAILED: 'Wypełnij wszystkie wymagane pola',
		FETCH_FAILED: 'Nie udało się pobrać danych',
	},
}

// Theme colors
export const THEME_COLORS = {
	PRIMARY: '#1976d2',
	SECONDARY: '#dc004e',
	SUCCESS: '#4caf50',
	ERROR: '#f44336',
	WARNING: '#ff9800',
	INFO: '#2196f3',
}
