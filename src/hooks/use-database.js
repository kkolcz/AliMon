import { useState, useCallback } from 'react'

import { query, collection, getDocs, where } from 'firebase/firestore'
import { db } from '../Firebase/firebase'
import { useDispatch } from 'react-redux'
import { set_shipments_list } from '../store/shipmentSlice'

const useDatabase = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	let shipments = []
	const dispatch = useDispatch()

	const getPackages = async userid => {
		setIsLoading(true)
		const q = query(collection(db, 'shipments'), where('userUID', '==', userid))
		const docs = getDocs(q)

		docs
			.then(res => {
				res.forEach(doc => {
					shipments.push({
						id: doc.id,
						name: doc.data().name,
						number: doc.data().number,
						description: doc.data().description,
						date: doc.data().date,
					})
				})
			})
			.then(() => {
				dispatch(set_shipments_list(shipments))
				setIsLoading(false)
			})
			.catch(err => {
				setError(err.message || 'Coś poszło nie tak!')
			})
	}

	return {
		isLoading: isLoading,
		error: error,
		getPackages: getPackages,
	}
}

export default useDatabase
