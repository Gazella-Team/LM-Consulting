import Layout from "@/components/Layout";
import Landing from "@/components/landing";
import Prices from "@/components/prices";
import Meta from "@/components/Layout/Meta";
import MainHero from "@/components/Ui/MainHero";

export default function Pricing() {
  return (
    <Layout mode="">
      <Meta title="Pricing | ToolBird" />
      <MainHero heading="Pricing for everyone" paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy." />
      <Prices />
    </Layout>
  );
}
