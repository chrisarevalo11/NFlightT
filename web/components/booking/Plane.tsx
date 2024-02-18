type Props = {
	selectedSeat: number | null
	setSelectedSeat: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Plane(props: Props): JSX.Element {
	const { selectedSeat, setSelectedSeat } = props
	const handleSeatClick = (seatNumber: number) => {
		setSelectedSeat(seatNumber)
		// Add booking logic here
		console.log('Selected seat: ', seatNumber)
	}

	return (
		<div
			className='w-[300px] h-[500px] flex items-end justify-center'
			style={{
				backgroundImage: 'url(/images/plane.png)',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center'
			}}
		>
			<div className='grid grid-cols-2 w-[80%] h-[70%] justify-items-center items-center'>
				{Array(6)
					.fill(null)
					.map((_, index) => (
						<div
							key={index}
							className={`h-10 w-10 bg-white border border-purple-700 rounded-md grid place-content-center cursor-pointer ${
								selectedSeat === index + 1 &&
								'pointer-events-none !bg-purple-700 !text-white'
							}`}
							onClick={() => handleSeatClick(index + 1)}
						>
							{index + 1}
						</div>
					))}
			</div>
		</div>
	)
}
