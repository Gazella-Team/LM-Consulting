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
				description="Promote Toolbird and earn 30% recurring commission as you refer people to our paid plans."
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
					hook="Supercharge Your Earnings"
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
								High Commission Structure
							</h2>
							<p className="text-gray-600">
							For every paid customer you refer, you earn one of the best percentages in the industry of the sale.
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
								Reliable Monthly Payouts
							</h2>
							<p className="text-gray-600">
								We offer reliable monthly payouts through PayPal and Wire to ensure timely payments.					
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
								Ready-to-use resources
							</h2>
							<p className="text-gray-600">
								Our program comes with ready-to-use templates and scripts to get you started the best way possbile.					
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
								User-friendly dashboard
							</h2>
							<p className="text-gray-600">
								Track your clicks, conversions, and commissions with ease thorugh our intuitive dashboard.						
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
								Lifetime income
							</h2>
							<p className="text-gray-600">
								Our commisions are lifetime recurring, meaning your earnings stay with you monthly and forever.
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
								Affiliate community
							</h2>
							<p className="text-gray-600">
								Get access to an affiliate community providing instant help and resources to any question.
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
								Dedicated support
							</h2>
							<p className="text-gray-600">
							Our team will help you through every step. They&apos;ll help you understand the product to promote it well.							</p>
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
								Referral visibility
							</h2>
							<p className="text-gray-600">
							Get real-time status of your referrals in your dashboard. We use a cookie life of 60 days.							
							</p>
						</div>
					</div>
				</div>
			</BlurSection>
			{/*
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
			 */}
		</Layout>
	)
}
