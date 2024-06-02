import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import Goals from '@/components/goals'
import Stats from '@/components/stats'
import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Contact() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="Get in touch today"
				highlighted=""
				heading="Contact us"
				paragraph="We'd love to hear from you. Our team will respond to you as fast as possible."
			/>
			<section className='relative'>
				<div style={{background: "linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)"}} className='w-[86%] text-center flex flex-col gap-14 paragraph p-14 mx-auto max-w-lg shadow-sm text-gray-800 rounded-3xl border border-gray-600/10'>
					<div>
						<h2 className='font-semibold mb-3'>Email</h2>
						<div className='text-gray-600'>
							<p>lasse@toolbird.io</p>
							<p>simon@toolbird.io</p>
						</div>
					</div>
					<div>
						<h2 className='font-semibold mb-3'>Phone</h2>
						<div className='text-gray-600'>
							<p>+45 50695272</p>
							<p>+45 51253371</p>
						</div>
					</div>
					<div>
						<h2 className='font-semibold mb-6'>Socials</h2>
						<div className="flex flex-col items-center gap-6 mt-3">
							<Link href={"https://www.linkedin.com/company/toolbird-io/"} className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all">
								<FaLinkedin color="rgb(31 41 55)" />
							</Link>
							<Link href={"https://x.com/lasse_osmann"} className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all">
								<FaTwitter color="rgb(31 41 55)" />
							</Link>
                    </div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
