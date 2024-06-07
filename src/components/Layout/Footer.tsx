import Link from 'next/link'
import { FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { cn } from 'utils/cs'
import Cta from './Cta'

type FooterProps = {
	fullWidth?: boolean
	noCta?: boolean
}

export default function Footer(props: FooterProps) {
	return (
		<>
			{!props.noCta && <Cta />}
			<footer
				style={{
					background:
						'radial-gradient(circle, rgba(247,243,255,1) 0%, rgba(255,255,255,1) 50%)',
				}}
				className={
					props.fullWidth
						? 'py-[10px] mx-auto border-t relative border-t-gray-600/10 bg-white'
						: 'py-[10px] mx-auto max-w-7xl border-t md:rounded-t-[100px] relative border-t-gray-600/10 bg-white'
				}
			>
				<div className="w-[86%] mx-auto min-h-[370px] max-w-6xl grid grid-cols-1 md:grid-cols-[35%_1fr] pt-14 gap-20">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-3">
							<img className="w-28" src="/logos/finallogo.svg" />
							<p className="text-gray-500 paragraph text-sm max-w-xs font-regular">
								Get Web Analytics, Uptime Monitoring and User
								Feedback, all collected in one place.
							</p>
						</div>
						<div className="flex">
							<Link
								href={'https://app.toolbird.io/auth/register'}
								className="bg-gray-800 border-[3px] border-gray-800 font-normal paragraph text-xs flex text-white px-6 py-1 rounded-full"
							>
								Get started for free
							</Link>
						</div>
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
					</div>
					<div className="grid grid-cols-2 mb-24 lg:grid-cols-3 paragraph gap-16">
						<div>
							<h2 className="text-sm mb-5 font-semibold text-gray-800">
								Products
							</h2>
							<div className="text-gray-500 text-sm flex flex-col gap-5 font-regular">
								<Link href={'/analytics'}>Web Analytics</Link>
								<Link href={'/coming-soon'}>
									Feedback Boards<br></br>(under developmet)
								</Link>
								<Link href={'/coming-soon'}>
									User Surveys<br></br>(under developmet)
								</Link>
							</div>
						</div>
						<div>
							<h2 className="text-sm mb-5 font-semibold text-gray-800">
								Company
							</h2>
							<div className="text-gray-500 text-sm flex flex-col gap-5 font-regular">
								<Link href={'/blog/introducing-toolbird'}>
									About
								</Link>
								<Link href={'/blog'}>Blog</Link>
								<Link
									href={
										'https://app.toolbird.io/share/toolbird.io'
									}
								>
									Public building
								</Link>
							</div>

							<h2 className="text-sm mt-10 mb-5 font-semibold text-gray-800">
								Legal
							</h2>
							<div className="text-gray-500 text-sm flex flex-col gap-5 font-regular">
								<Link href={'/legal/terms'}>Terms</Link>
								<Link href={'/legal/privacy'}>Privacy</Link>
							</div>
						</div>
						<div>
							<h2 className="text-sm mb-5 font-semibold text-gray-800">
								Contact
							</h2>
							<div className="text-gray-500 text-sm flex flex-col gap-5 font-regular">
								<Link href={'/contact'}>General</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center pb-6 text-gray-400 text-sm gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between paragraph w-[86%] mx-auto max-w-6xl">
					<p>
						© {new Date().getFullYear()} Toolbird - Part of{' '}
						<a
							href="https://gazellateam.com"
							className="underline"
							target="_blank"
						>
							Gazella Team
						</a>
					</p>
					<p className="font-[Caveat] text-xl">Built proudly in 🇪🇺</p>
				</div>
			</footer>
		</>
	)
}
