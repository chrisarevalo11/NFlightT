'use client'

import { WalletButton } from '../solana/solana-provider'
import * as React from 'react'
import { ReactNode, Suspense, useEffect, useRef } from 'react'

import Link from 'next/link'

import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'

export function UiLayout({ children }: { children: ReactNode }) {
	return (
		<div className='h-full flex flex-col'>
			<div className='navbar bg-gray-300 text-neutral-content justify-between'>
				<div className='flex-1'>
					<Link className='btn btn-ghost normal-case text-xl' href='/'>
						<Image
							width={120}
							height={50}
							className='h-10'
							alt='Solana Logo'
							src='/images/nflightt.png'
						/>
					</Link>
				</div>
				<div className='flex-none space-x-2'>
					<WalletButton />
				</div>
			</div>
			<div className='flex-grow px-12'>
				<Suspense
					fallback={
						<div className='text-center my-32'>
							<span className='loading loading-spinner loading-lg'></span>
						</div>
					}
				>
					{children}
				</Suspense>
				<Toaster position='bottom-right' />
			</div>
			<footer className='footer footer-center p-4 bg-gray-300'>
				<p className='flex'>
					Powered by
					<a
						className='link text-purple-700 font-bold'
						href='https://www.synchub.site/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Sync Hub
					</a>
				</p>
			</footer>
		</div>
	)
}

export function AppModal({
	children,
	title,
	hide,
	show,
	submit,
	submitDisabled,
	submitLabel
}: {
	children: ReactNode
	title: string
	hide: () => void
	show: boolean
	submit?: () => void
	submitDisabled?: boolean
	submitLabel?: string
}) {
	const dialogRef = useRef<HTMLDialogElement | null>(null)

	useEffect(() => {
		if (!dialogRef.current) return
		if (show) {
			dialogRef.current.showModal()
		} else {
			dialogRef.current.close()
		}
	}, [show, dialogRef])

	return (
		<dialog className='modal' ref={dialogRef}>
			<div className='modal-box space-y-5'>
				<h3 className='font-bold text-lg'>{title}</h3>
				{children}
				<div className='modal-action'>
					<div className='join space-x-2'>
						{submit ? (
							<button
								className='btn btn-xs lg:btn-md btn-primary'
								onClick={submit}
								disabled={submitDisabled}
							>
								{submitLabel || 'Save'}
							</button>
						) : null}
						<button onClick={hide} className='btn'>
							Close
						</button>
					</div>
				</div>
			</div>
		</dialog>
	)
}

export function ellipsify(str = '', len = 4) {
	if (str.length > 30) {
		return (
			str.substring(0, len) + '..' + str.substring(str.length - len, str.length)
		)
	}
	return str
}

export function useTransactionToast() {
	return (signature: string) => {
		toast.success(
			<div className={'text-center'}>
				<div className='text-lg'>Transaction sent</div>
			</div>
		)
	}
}
