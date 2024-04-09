import Layout from "@/components/Layout";
import DashboardDisplay from "@/components/dashboarddisplay";
import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Layout white={true}>
      <Hero />
      <img src="/phonebg.svg"></img>
    </Layout>
  )
}