import Layout from "@/components/Layout";
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
  
    </Layout>
  )
}