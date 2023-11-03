import { useState } from 'react'

import { query, collection, getDocs, where, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase/firebase'
import { useDispatch } from 'react-redux'
import { set_shipments_list, add_new_shipment, delete_shipment, edit_shipment } from '../store/shipmentSlice'

const useDatabase = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	let shipments = []
	const dispatch = useDispatch()

	const getShipments = async userid => {
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

	const addNewShipment = async data => {
		const dbRef = collection(db, 'shipments')

		await addDoc(dbRef, data).then(res => {
			// console.log(res.id)
			// console.log('utworzono')
			dispatch(
				add_new_shipment({
					id: res.id,
					userUID: data.userUID,
					name: data.name,
					number: data.number,
					description: data.description,
					date: data.date,
				})
			)
		})
	}

	const updateShipment = async (id, data) => {
		const updateData = { id: id, ...data }

		await updateDoc(doc(db, 'shipments', id), data).then(res => {
			dispatch(edit_shipment(updateData))
		})
	}

	const deleteShipment = async id => {
		await deleteDoc(doc(db, 'shipments', id)).then(res => {
			dispatch(delete_shipment(id))
		})
	}

	return {
		isLoading: isLoading,
		error: error,
		getShipments: getShipments,
		addNewShipment: addNewShipment,
		updateShipment: updateShipment,
		deleteShipment: deleteShipment,
	}
}

export default useDatabase
