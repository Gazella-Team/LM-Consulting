import Navbar from './Navbar'
import Meta from './Meta'
import Footer, { FooterProps } from './Footer'
import { useState } from 'react'

type LayoutProps = {
	className?: string
	children?: React.ReactNode
	footerProps?: FooterProps
	white: boolean
}

export default function Layout({ children, footerProps, white }: LayoutProps) {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<div className="w-full bg-white bg-grid-black/[0.04] relative">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<div className="relative">
					<Navbar white={white} />
				</div>
				<div className="relative">{children}</div>
				<Footer {...footerProps} />
			</div>
		</div>
	)
}
