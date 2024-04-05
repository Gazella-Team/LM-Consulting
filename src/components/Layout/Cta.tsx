import { Reveal } from "../Animations/Reveal";
import Link from "next/link";

export default function Cta() {
    return (
        <section className="py-[240px] pb-[140px] bg-[url(/bgs/ctabg.svg)] bg-cover bg-center">
            <div className="w-[90%] mx-auto text-center max-w-[1000px]">
                <Reveal delayTime={0.3}>
                    <h1 className="font-[500] tracking-tighter text-white text-[60px] mb-[14px]">Ready to boost your development?</h1>
                </Reveal>
                <Reveal delayTime={0.3}>
                    <p className="font-[200] text-[18px] w-[80%] mx-auto text-gray-200 mb-[50px]">Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy.</p>
                </Reveal>
                <Reveal delayTime={0.3}>
                    <Link className="bg-white text-main text-center px-[40px] py-[14px] text-[15px] rounded-full font-[500]" href={"/"}>Join Waitlist</Link>
                </Reveal>
            </div>
        </section>
    )
}