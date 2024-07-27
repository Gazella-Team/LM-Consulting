import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Cta from './Cta'

type FooterProps = {
	fullWidth?: boolean
	noCta?: boolean
}

const FOOTER_LINKS: {
	title: string
	links: { label: string; href: string; target?: string }[]
}[] = [
	/*
		{
		title: 'Products',
		links: [
			{
				label: 'Web Analytics',
				href: '/analytics',
			},
		],
	},
	{
		title: 'Free Tools',
		links: [
			{
				label: 'All tools',
				href: '/tools',
			},
			{
				label: 'UTM Link Generator',
				href: '/tools/utm-generator',
			},
		],
	},
	 */
]

export default function Footer(props: FooterProps) {
	return (
		<>
			<footer
				className={
					props.fullWidth
						? 'py-[10px] mx-auto border-t relative border-t-gray-600/10 bg-white'
						: 'py-[10px] mx-auto border-t relative border-t-gray-600/10 bg-white'
				}
			>
				<div className="w-[90%] mx-auto max-w-7xl min-h-[370px] grid grid-cols-1 md:grid-cols-[35%_1fr] pt-14 gap-20">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-3">
							<img
								className="w-32"
								src="/logo.svg"
								alt="logo"
							/>
							<p className="text-gray-500 paragraph text-sm max-w-xs font-regular">
								Unlock Direct Access to over $1 Trillion in Investor Funds
							</p>
						</div>
						<div className="flex">
							<Link
								className="hidden border hover:bg-black hover:text-white transition-all px-5 py-1.5 rounded-md border-gray-600/40 font-normal text-sm sm:flex"
								href="/"
							>
								Contact
							</Link>
						</div>
						{/*
						<div className="flex items-center gap-2 mt-3">
							<Link
								href={
									'https://linkedin.com/company/toolbird-io'
								}
								className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all"
							>
								<FaLinkedin color="rgb(31 41 55)" />
							</Link>
							<Link
								href={'https://x.com/toolbirdapp'}
								className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all"
							>
								<FaTwitter color="rgb(31 41 55)" />
							</Link>
						</div>
						 */}
					</div>
					<div className="grid grid-cols-2 mb-24 lg:grid-cols-3 paragraph gap-16">
						{FOOTER_LINKS.map((group) => (
							<div key={group.title}>
								<h2 className="text-sm mb-5 font-semibold text-gray-800">
									{group.title}
								</h2>
								<div className="text-gray-500 text-sm flex flex-col gap-5 font-regular">
									{group.links.map((link) => (
										<Link
											href={link.href}
											key={link.href}
											className="hover:text-gray-800 transition-all"
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="text-center pb-6 text-gray-600 text-sm gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between paragraph w-[90%] mx-auto max-w-7xl">
					<p>
						© {new Date().getFullYear()} LM Capital - Built and hosted by{' '}
						<a
							href="https://gazellateam.com"
							className="underline"
							target="_blank"
						>
							Gazella Team
						</a>
					</p>
					<div className="flex items-center gap-4">
						<p>
							Based in London, UK
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
