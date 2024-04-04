import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import PricingTable from "@/components/pricingtable";

export default function Pricing() {
    return (
        <Layout>
            <PageIntro hook="⚡️ Flexible pricing" highlighted="everyone" heading="Pricing for" paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy." />
            <PricingTable />
        </Layout>
    )
}