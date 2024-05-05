import Layout from "@/components/Layout";
import SectionIntro from "@/components/SectionIntro";
import BentoGridComponent from "@/components/bento-grid";
import DashboardDisplay from "@/components/dashboarddisplay";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import PricingTable from "@/components/pricingtable";

export default function Home() {
  return (
    <Layout white={true}>
      <Hero />
      <DashboardDisplay />
      <SectionIntro heading="All tools in one place" description="Manage web analytics, cron jobs, monitoring, feature flags, waitlists, client feedback and more within just one platform. ToolBird makes building tech products easier" hook="Save time and get better overview">
        <BentoGridComponent />
      </SectionIntro>
      <SectionIntro heading="Pricing to grow with" description="Manage web analytics, cron jobs, monitoring, feature flags, waitlists, client feedback and more within just one platform. ToolBird makes building tech products easier" hook="Save time and get better overview">
        <PricingTable />
      </SectionIntro>
    </Layout>
  )
}