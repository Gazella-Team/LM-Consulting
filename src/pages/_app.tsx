import Meta from '@/components/Layout/Meta'
import '@/styles/globals.css'
import NiceModal from '@ebay/nice-modal-react'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NiceModal.Provider>
			<Meta />
			<Component {...pageProps} />
			<Toaster />
			<Script
				src="https://api.toolbird.io/js/script.js"
				strategy="lazyOnload"
				data-domain="toolbird.io"
			/>
		</NiceModal.Provider>
	)
}
