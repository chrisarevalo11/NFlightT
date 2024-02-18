import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

import { database } from '@/firebase.config'

export function firebaseApi() {
	const leafsCollectionRef = collection(database, 'leafs')

	const addTicket = async (ticket: any) => {
		return await addDoc(leafsCollectionRef, ticket)
	}

	const getAllTickets = async (): Promise<any[]> => {
		const data = await getDocs(leafsCollectionRef)
		return data.docs.map(
			doc => ({ ...doc.data(), leftId: doc.id } as unknown as any)
		)
	}

	const getTicketByLeafId = async (ticketId: string): Promise<any[]> => {
		const item = await getDocs(
			query(leafsCollectionRef, where('leafId', '==', ticketId))
		)

		if (item.docs.length === 0) {
			console.log(`No projects with leafId "${ticketId}" found`)
			return []
		}

		return item.docs.map(
			doc => ({ id: doc.id, ...doc.data() } as unknown as any)
		)
	}

	const getTicketsByOwner = async (address: string): Promise<any[]> => {
		const item = await getDocs(
			query(leafsCollectionRef, where('owner', '==', address))
		)

		if (item.docs.length === 0) {
			console.log(`No projects with ownerAddress "${address}" found`)
			return []
		}

		return item.docs.map(
			doc => ({ id: doc.id, ...doc.data() } as unknown as any)
		)
	}

	const updateTicket = async (ticketId: string, ticket: any) => {
		return await addDoc(leafsCollectionRef, ticket)
	}

	return {
		addTicket,
		getAllTickets,
		getTicketByLeafId,
		getTicketsByOwner,
		updateTicket
	}
}
