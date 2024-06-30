import React, { useEffect } from 'react'

// Extend the Window interface to include the $crisp and CRISP_WEBSITE_ID properties
declare global {
	interface Window {
		$crisp: any[]
		CRISP_WEBSITE_ID: string
	}
}

const CrispChat: React.FC = () => {
	useEffect(() => {
		// Check if the Crisp script already exists to prevent multiple script injections
		if (!window.$crisp) {
			window.$crisp = []
			window.CRISP_WEBSITE_ID = '43a3bc68-e405-4a3e-a830-fde2df7fccf5'

			;(function () {
				const d = document
				const s = d.createElement('script')
				s.src = 'https://client.crisp.chat/l.js'
				s.async = true
				d.getElementsByTagName('head')[0].appendChild(s)
			})()
		}
	}, [])

	return null // This component doesn't render anything visible
}

export default CrispChat
