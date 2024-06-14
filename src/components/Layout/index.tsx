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
}

const ToolbirdFont = localFont({
	src: [
		{
			path: '../fonts/Gilroy-SemiBold.ttf',
			style: 'normal',
		},
	],
})

export default function Layout(props: LayoutProps) {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Meta />
			<div className="w-full bg-white bg-grid-black/[0.04] relative">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<Navbar />
				<div>
					<div className="relative">{props.children}</div>
				</div>
				<div>
					<Footer
						noCta={props.noCta}
						fullWidth={props.footerFullWidth}
					/>
				</div>
			</div>
		</div>
	)
}
