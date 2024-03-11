import { RevealLight } from "@/components/Animations/RevealLight";
import Layout from "@/components/Layout";
import MainHero from "@/components/Ui/MainHero";
import Comparison from "@/components/comparison";

export default function Home() {
  return (
    <Layout mode="">
      <MainHero heading="All the tools your SaaS needs to start, scale and run" paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy." />
      <section>
        <RevealLight delayTime={0.2}>
          <div className="w-[90%] mx-auto max-w-[1200px] mt-[-400px]">
            <img className="w-full shadow-clean rounded-[14px]" src="/showcases/waitlists.svg"></img>
          </div>
        </RevealLight>
      </section>
      <Comparison />
    </Layout>
  );
}
