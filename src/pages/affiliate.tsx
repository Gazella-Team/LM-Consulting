import AffiliateFAQ from '@/components/FAQ/AffiliateFAQ'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import PageIntro from '@/components/PageIntro'
import SectionIntro from '@/components/SectionIntro'
import AffiliateTestimonials from '@/components/affiliate-testimonials'
import AffiliateProcess from '@/components/affiliate/process'
import BlurSection from '@/components/blur-section'
import { CheckCircle2 } from 'lucide-react'

export default function Affiliate() {
	return (
		<Layout white={true}>
			<Meta
				title={`Become an affiliate - Toolbird.io`}
				description="Get in touch with the team behind Toolbird today."
				keywords="Contact, Mail, Phone, Team"
			/>
			<PageIntro
				buttons={[
					{
						text: 'Become an affiliate',
						path: 'https://affiliate.toolbird.io/login',
						target: '_blank',
					},
				]}
				hook="Work with us"
				highlighted=""
				heading="Become an affiliate. Earn 30% recurring commission."
				paragraph="Promote Toolbird and earn commissions as you refer people to our paid plans."
			/>
			<AffiliateProcess />
			<BlurSection
					bottomMargin={true}
					heading="Reasons to become a Toolbird Affiliate"
					hook="More than just Analytics"
				>
				<div className="grid grid-cols-1 lg:grid-cols-2 paragraph gap-x-32 gap-y-16 w-[90%] mt-12 mx-auto">
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Privacy friendly (GDPR)
							</h2>
							<p className="text-gray-600">
								Your data is stored securely in Europe. We never
								share your data or sell it to a third-party.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Data ownership
							</h2>
							<p className="text-gray-600">
								You have 100% ownership of your data, with fully control over the stats we collect.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Fast and intuitive
							</h2>
							<p className="text-gray-600">
								Our fast systems and user-friendly experience allows you to navigate your analytics as easy as possible.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								All features
							</h2>
							<p className="text-gray-600">
								Track page data, referral data, geographic data and device data, and many other live data points.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Custom tracking
							</h2>
							<p className="text-gray-600">
								Track advanced analytics of specific buttons, links, sections and more with custom event tracking.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Prioritized support
							</h2>
							<p className="text-gray-600">
								We&apos;re online 24/7 to answer any questions or fix any issues you might stumble into in regards to Toolbird.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Custom tracking
							</h2>
							<p className="text-gray-600">
								Track advanced analytics of specific buttons, links, sections and more with custom event tracking.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Prioritized support
							</h2>
							<p className="text-gray-600">
								We&apos;re online 24/7 to answer any questions or fix any issues you might stumble into in regards to Toolbird.
							</p>
						</div>
					</div>
				</div>
			</BlurSection>
			<SectionIntro
				topMargin={false}
				heading="What others say"
				description="All you need to collect and manage user feedback in a structured way."
				hook="Affiliate Testimonials"
			>
				<AffiliateTestimonials />
			</SectionIntro>
			<BlurSection
				bottomMargin={true}
				heading="Affiliate FAQ"
				hook="Frequently Asked Questions"
			>
				<AffiliateFAQ />
			</BlurSection>
		</Layout>
	)
}
