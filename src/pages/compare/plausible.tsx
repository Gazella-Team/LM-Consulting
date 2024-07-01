import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import BlurSection from '@/components/blur-section'
import PricingTable from '@/components/pricingtable'
import PricingFAQ from '@/components/FAQ/PricingFAQ'
import Meta from '@/components/Layout/Meta'
import CustomerSlider from '@/components/customer-slider'

export default function ComparePlausible() {
	return (
		<Layout white={true}>
			<Meta title={`Toolbird vs Plausible: The #1 Plausible Alternative`} />
			<PageIntro
				hook="The #1 Plausible Alternative"
				highlighted=""
				heading="Toolbird vs Plausible"
				paragraph="We offer plans that suit any project. Start for free today, no credit card required."
			/>
			<PricingTable />
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
