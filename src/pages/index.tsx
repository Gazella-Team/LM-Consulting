import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import Layout from "@/components/Layout";
import MainHero from "@/components/Ui/MainHero";
import Comparison from "@/components/comparison";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-white md:bg-[url(/bgs/wave.svg)] bg-center bg-cover flex flex-col justify-center">
      <div className="flex w-[80%] mx-auto justify-center gap-10 flex-col">
        <Reveal delayTime={0.1}>
          <h1 className="text-[40px] leading-[45px] md:text-[60px] w-[94%] max-w-[600px] text-gray-800 md:leading-[65px] headingText">
            The all-in-one toolbox for tech startups
            <span className="text-main">.</span>
          </h1>
        </Reveal>
        <Reveal delayTime={0.1}>
          <p className="text-gray-600 w-[94%] max-w-[600px] font-regular text-[16px] md:text-xl">
            Are you tired of having tons of expensive tool-subscriptions spread
            amongst countless providers? Say hello to ToolBird.
            <br></br>
            <br></br>
            ToolBird is the the go-to platform for tech startups who seek an
            intuitive platform to manage essential tools and build workflows.
            <br></br>
            <br></br>
            We have taken all the tools your tech startup needs to start, scale
            and run, and collected them all in one platform!
            <br></br>
            <br></br>
          </p>
          <div>

          <form action="https://api.toolbird.io/v1/waitlist/sk-f195eaa8253b4f81/submit" method="POST">

	<input type="text" name="name" />


	<input type="email" name="email" placeholder="Enter your email" />
	
	<button>Subscribe here</button>
</form>

          </div>
        </Reveal>
        <Reveal delayTime={0.1}>
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Powered by</p>
            <Link target="_blank" href={"https://gazellateam.com/"}>
              <img className="w-[80px]" src="/gtlogogray.svg"></img>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
