import Layout from "@/components/Layout";
import MainHero from "@/components/Ui/MainHero";
import Comparison from "@/components/comparison";

export default function Home() {
  return (
    <Layout mode="">
      <MainHero heading="All the tools your SaaS needs to start, scale and run" paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy." />
      <Comparison />
    </Layout>
  );
}
