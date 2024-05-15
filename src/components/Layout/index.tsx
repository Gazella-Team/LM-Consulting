import Navbar from './Navbar'
import Footer from './Footer'

type LayoutProps = {
	className?: string
	children?: React.ReactNode
	white?: boolean
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<div className="w-full bg-white bg-grid-black/[0.04] relative">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<Navbar />
				<div className="relative">{children}</div>
				<div className="relative">
					<Footer />
				</div>
			</div>
		</div>
	)
}
