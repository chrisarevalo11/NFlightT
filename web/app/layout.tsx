import './global.css'
import { UiLayout } from '@/components/ui/ui-layout'
import { ClusterProvider } from '@/components/cluster/cluster-data-access'
import { SolanaProvider } from '@/components/solana/solana-provider'
import { Provider } from './provider'

export const metadata = {
	title: 'NFlightT',
	description: 'NFlightT is a decentralized flight booking platform.'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-white text-stone-800'>
				<Provider>
					<ClusterProvider>
						<SolanaProvider>
							<UiLayout>{children}</UiLayout>
						</SolanaProvider>
					</ClusterProvider>
				</Provider>
			</body>
		</html>
	)
}
