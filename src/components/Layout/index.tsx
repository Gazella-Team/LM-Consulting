import Navbar from './Navbar'
import Footer from './Footer'
import localFont from 'next/font/local'
import Meta from './Meta'

type LayoutProps = {
	className?: string
	children?: React.ReactNode
	white?: boolean
	footerFullWidth?: boolean
	noCta?: boolean
	whiteBeforeScroll?: boolean
}

export default function Layout(props: LayoutProps) {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Meta />
			<div className="w-full bg-white">
				<Navbar whiteBeforeScroll={props.whiteBeforeScroll} />
				<div>
					<div className="relative">{props.children}</div>
				</div>
			</div>
		</div>
	)
}
