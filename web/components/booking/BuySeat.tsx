import { useWallet } from '@solana/wallet-adapter-react'

type Props = {
	selectedSeat: number | null
}

export default function BuySeat(props: Props): JSX.Element {
	const { selectedSeat } = props
	const { publicKey: wallet } = useWallet()

	const formatAddress = (address: string) => {
		return `${address.slice(0, 6)}...${address.slice(-4)}`
	}

	return (
		<section className='bg-primary/60 min-w-[300px] p-4 rounded-xl'>
			<header className='flex text-white text-2xl gap-4'>
				<h2 className='font-bold'>Selected seat: </h2>
				<h3>{selectedSeat}</h3>
			</header>
			<header className='flex text-white text-2xl gap-4'>
				<h2 className='font-bold'>Wallet: </h2>
				<h3>{wallet ? formatAddress(wallet.toString()) : 'Not connected'}</h3>
			</header>
			<button className='btn btn-primary mt-10'>Buy Seat</button>
		</section>
	)
}
