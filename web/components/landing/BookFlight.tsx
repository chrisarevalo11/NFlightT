import Link from 'next/link'
import Calendar from '../icons/Calendar'
import Departure from '../icons/Departure'
import Land from '../icons/Land'
import People from '../icons/People'

export default function BookFlight(): JSX.Element {
	return (
		<section className='w-full mx-auto p-5 space-y-5 bg-purple-700 shadow-lg rounded-xl'>
			<h1 className='text-3xl text-white font-bold'>Agendar Vuelo</h1>
			<div className='grid md:grid-cols-2 justify-items-center lg:grid-cols-5 gap-3'>
				<label className='form-control w-full max-w-xs'>
					<div className='label'>
						<span className='label-text text-white'>
							<Departure className='inline size-6' /> Origen
						</span>
					</div>
					<input
						type='text'
						placeholder='Bogota'
						className='input input-bordered w-full max-w-xs'
					/>
				</label>
				<label className='form-control w-full max-w-xs'>
					<div className='label'>
						<span className='label-text text-white'>
							<Land className='inline size-6' /> Destino
						</span>
					</div>
					<input
						type='text'
						placeholder='Medellin'
						className='input input-bordered w-full max-w-xs'
					/>
				</label>
				<label className='form-control w-full max-w-xs'>
					<div className='label'>
						<span className='label-text text-white'>
							<Calendar className='inline size-6' /> Desde
						</span>
					</div>
					<input type='date' className='input input-bordered w-full max-w-xs' />
				</label>
				<label className='form-control w-full max-w-xs'>
					<div className='label'>
						<span className='label-text text-white'>
							<Calendar className='inline size-6' /> Hasta
						</span>
					</div>
					<input type='date' className='input input-bordered w-full max-w-xs' />
				</label>
				<label className='form-control w-full max-w-xs'>
					<div className='label'>
						<span className='label-text text-white'>
							<People className='inline size-6' /> Pasajeros
						</span>
					</div>
					<input
						type='number'
						placeholder='2'
						className='input input-bordered w-full max-w-xs'
					/>
				</label>
			</div>
<<<<<<< HEAD
			<Link href='/book' className='btn btn-accent'>
				Agendar
=======
			<Link href='/booking' className='btn btn-accent'>
				Book Now
>>>>>>> bf96f0e051684c1b7cb96c4fc7de804a466406fc
			</Link>
		</section>
	)
}
