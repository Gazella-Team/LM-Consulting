import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import MainHero from "@/components/Ui/MainHero";

export default function Pricing() {
  return (
    <Layout mode="">
      <Meta title="Pricing | ToolBird" />
      <MainHero heading="One tool to rule them all" paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy." />
    </Layout>
  );
}
