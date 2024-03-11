import { Reveal } from "../Animations/Reveal";
import Link from "next/link";

export default function Cta() {
    return (
        <section className="py-[100px] bg-gradient-to-r from-[#6228D6] via-[#8548FF] via-[#661DFA] via-[#793CF4] via-main via-[#8548FF] via-[#793CF4] to-[#6228D6]">
            <div className="w-[90%] mx-auto text-center max-w-[1000px]">
                <Reveal delayTime={0.3}>
                    <h1 className="font-[300] text-white text-[40px] mb-[14px]">Are you ready to cut expenses and scale?</h1>
                </Reveal>
                <Reveal delayTime={0.3}>
                    <p className="font-[200] text-[18px] w-[80%] mx-auto text-gray-200 mb-[50px]">Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy.</p>
                </Reveal>
                <Reveal delayTime={0.3}>
                    <Link className="bg-white text-main text-center px-[40px] py-[14px] text-[15px] rounded-full font-[300]" href={"/"}>Join Waitlist</Link>
                </Reveal>
            </div>
        </section>
    )
}