import Layout from "@/components/Layout";
import SectionIntro from "@/components/SectionIntro";
import About from "@/components/about";
import BentoGridComponent from "@/components/bento-grid";
import DashboardDisplay from "@/components/dashboarddisplay";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import PricingTable from "@/components/pricingtable";
import Element from "react-scroll"

export default function Home() {
  return (
    <Layout white={true}>
      <Hero />
      <DashboardDisplay />
      <div id="products">
        <SectionIntro heading="All tools in one place" description="With our all-in-one platform we ensure better overview and higher productivity" hook="Save time and get better overview">
          <BentoGridComponent />
        </SectionIntro>
      </div>
      <div id="pricing">
        <SectionIntro heading="Every tool, fair pricing" description="Paying way too much money, to have countless subscriptions on several platforms is a no-brainer. We offer all tools and unlimited team members in the same platform" hook="Save time and get better overview">
          <PricingTable />
        </SectionIntro>
      </div>
    </Layout>
  )
}