import Layout from '@/components/Layout'
import BlurSection from '@/components/blur-section'
import PricingTable from '@/components/pricingtable'
import PricingFAQ from '@/components/FAQ/PricingFAQ'
import Meta from '@/components/Layout/Meta'
import CurvePageIntro from '@/components/CurvePageIntro'

export default function Pricing() {
	return (
		<Layout white={true}>
			<Meta title={`Pricing - Toolbird.io`} />
			<CurvePageIntro
				hook="Flexible pricing"
				highlighted=""
				heading="Usage based pricing"
				paragraph="We offer plans that suit any project. Start for free today, no credit card required."
			>
			<PricingTable />
			</CurvePageIntro>
			{
				<BlurSection
					bottomMargin={true}
					heading="Get all your answers"
					hook="Frequently Asked Questions"
				>
					<PricingFAQ />
				</BlurSection>
			}
		</Layout>
	)
}
