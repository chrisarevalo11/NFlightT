'use client'

import Benefits from '../landing/Benefits'
import BookFlight from '../landing/BookFlight'
import Hero from '../landing/Hero'

export default function DashboardFeature() {
	return (
		<div className='max-w-[1250px] mx-auto py-16 sm:px-2 lg:px-4 text-center overflow-hidden'>
			<Hero />
			<BookFlight />
			<Benefits />
		</div>
	)
}
