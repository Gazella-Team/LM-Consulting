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
				<div className="text-center py-6 text-gray-600 text-sm gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between paragraph w-[90%] mx-auto max-w-7xl">
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
