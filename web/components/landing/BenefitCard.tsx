import { Benefit } from './Benefits'

export default function BenefitCard(props: Benefit) {
	const { title, description } = props

	return (
		<div className='min-w-[250px] max-w-[350px] bg-purple-700 rounded-xl p-3 flex flex-col gap-4'>
			{/* TODO: Add Icon */}
			<div className='flex flex-col items-center justify-center gap-2'>
				<h2 className='text-2xl text-center font-bold text-white'>{title}</h2>
				<p className='text-gray-300'>{description}</p>
			</div>
		</div>
	)
}
