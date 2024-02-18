'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletButton } from '../solana/solana-provider'
import { ExplorerLink } from '../cluster/cluster-ui'
import { CnftUi } from './cnft-ui'

import { MPL_BUBBLEGUM_PROGRAM_ID } from '@metaplex-foundation/mpl-bubblegum'
import { ellipsify } from '../ui/ui-layout'

export default function CnftFeature() {
	const { publicKey } = useWallet()

	return publicKey ? (
		<div>
			<p className='mb-6'>
				<ExplorerLink
					path={`account/${MPL_BUBBLEGUM_PROGRAM_ID}`}
					label={ellipsify(MPL_BUBBLEGUM_PROGRAM_ID.toString())}
				/>
			</p>
			<CnftUi />
		</div>
	) : (
		<div className='max-w-4xl mx-auto'>
			<div className='hero py-[64px]'>
				<div className='hero-content text-center'>
					<WalletButton />
				</div>
			</div>
		</div>
	)
}
