import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import { Reveal } from "@/components/Animations/Reveal";

export default function Affilate() {
  return (
    <Layout mode="white">
      <Meta title="Blog | ToolBird" />
      <section  style={{background: "linear-gradient(338deg, rgba(94,23,235,0.14751838235294112) 0%, rgba(168,130,244,0) 70%, rgba(255,255,255,1) 100%)"}} className="w-full pt-[90px] pb-[480px]">
            <div className="text-gray-800 w-[94%] mx-auto max-w-[700px]">
                <Reveal delayTime={0}>
                    <h1 className="font-[300] tracking-tight text-[50px] mb-[14px]">Earn money with us</h1>
                </Reveal>
                <Reveal delayTime={0}>
                    <p className="font-[200] text-gray-600 text-[18px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Reveal>
            </div>
        </section>
    </Layout>
  );
}
