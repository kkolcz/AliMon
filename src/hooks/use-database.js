import { useState, useCallback } from 'react'
import { query, collection, getDocs, where, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase/firebase'
import { useDispatch } from 'react-redux'
import { set_shipments_list, add_new_shipment, delete_shipment, edit_shipment } from '../store/shipmentSlice'
import { useNotification } from '../context/NotificationContext'
import { MESSAGES } from '../config/config'

const useDatabase = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const dispatch = useDispatch()
	const { showSuccess, showError } = useNotification()

	const getShipments = useCallback(
		async userid => {
			if (!userid) {
				setError('Brak ID użytkownika')
				return
			}

			setIsLoading(true)
			setError(null)

			try {
				const q = query(collection(db, 'shipments'), where('userUID', '==', userid))
				const querySnapshot = await getDocs(q)

				const shipments = []
				querySnapshot.forEach(doc => {
					shipments.push({
						id: doc.id,
						name: doc.data().name,
						number: doc.data().number,
						description: doc.data().description,
						date: doc.data().date,
					})
				})

				dispatch(set_shipments_list(shipments))
			} catch (err) {
				console.error('Error fetching shipments:', err)
				setError(err.message || MESSAGES.ERROR.FETCH_FAILED)
				showError(MESSAGES.ERROR.FETCH_FAILED)
			} finally {
				setIsLoading(false)
			}
		},
		[dispatch, showError]
	)

	const addNewShipment = useCallback(
		async data => {
			if (!data?.name || !data?.number) {
				showError(MESSAGES.ERROR.VALIDATION_FAILED)
				return
			}

			setIsLoading(true)
			setError(null)

			try {
				const dbRef = collection(db, 'shipments')
				const docRef = await addDoc(dbRef, data)

				dispatch(
					add_new_shipment({
						id: docRef.id,
						...data,
					})
				)

				showSuccess(MESSAGES.SUCCESS.SHIPMENT_ADDED)
			} catch (err) {
				console.error('Error adding shipment:', err)
				setError(err.message || MESSAGES.ERROR.GENERIC)
				showError(MESSAGES.ERROR.GENERIC)
			} finally {
				setIsLoading(false)
			}
		},
		[dispatch, showSuccess, showError]
	)

	const updateShipment = useCallback(
		async (id, data) => {
			if (!id || !data?.name || !data?.number) {
				showError(MESSAGES.ERROR.VALIDATION_FAILED)
				return
			}

			setIsLoading(true)
			setError(null)

			try {
				await updateDoc(doc(db, 'shipments', id), data)

				dispatch(
					edit_shipment({
						id,
						...data,
					})
				)

				showSuccess(MESSAGES.SUCCESS.SHIPMENT_UPDATED)
			} catch (err) {
				console.error('Error updating shipment:', err)
				setError(err.message || MESSAGES.ERROR.GENERIC)
				showError(MESSAGES.ERROR.GENERIC)
			} finally {
				setIsLoading(false)
			}
		},
		[dispatch, showSuccess, showError]
	)

	const deleteShipment = useCallback(
		async id => {
			if (!id) {
				showError(MESSAGES.ERROR.VALIDATION_FAILED)
				return
			}

			setIsLoading(true)
			setError(null)

			try {
				await deleteDoc(doc(db, 'shipments', id))
				dispatch(delete_shipment(id))
				showSuccess(MESSAGES.SUCCESS.SHIPMENT_DELETED)
			} catch (err) {
				console.error('Error deleting shipment:', err)
				setError(err.message || MESSAGES.ERROR.GENERIC)
				showError(MESSAGES.ERROR.GENERIC)
			} finally {
				setIsLoading(false)
			}
		},
		[dispatch, showSuccess, showError]
	)

	return {
		isLoading,
		error,
		getShipments,
		addNewShipment,
		updateShipment,
		deleteShipment,
	}
}

export default useDatabase
