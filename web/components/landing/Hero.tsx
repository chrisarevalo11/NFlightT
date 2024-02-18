export default function Hero(): JSX.Element {
	return (
		<section className='w-full'>
			<h1 className='text-5xl max-w-[600px] text-center mx-auto'>
				We <span className='font-bold text-purple-700'>transform</span> the air{' '}
				<span className='font-bold text-purple-700'>travelling experience</span>
			</h1>
			<div className='my-[100px] w-full flex justify-center relative'>
				<video
					autoPlay
					loop
					muted
					src='/images/sky.mp4'
					className='w-full md:w-[90%] rounded-full mx-auto h-[300px] object-cover'
				/>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src='/images/plane.webp'
					alt='plane'
					className='absolute mx-auto left-0 right-0 md:scale-[1.3] plane'
				/>
			</div>
		</section>
	)
}
