import { Reveal } from "./Animations/Reveal";

export default function Landing() {
    return (
        <section className="bg-main h-[100vh] flex flex-col pt-[200px]">
            <div className="w-[90%] mx-auto text-center text-white">
                <Reveal delayTime={0}>
                    <h1 className="text-[70px] leading-[80px] font-[400] w-[60%] mx-auto mb-[30px]">The swiss knife for your SaaS startup</h1>
                </Reveal>
                <Reveal delayTime={0.1}>
                    <p className="font-[200] text-[20px] w-[60%] mx-auto">Pitch is the fastest way for your team to create and share beautiful presentations that get results.</p>
                </Reveal>
            </div>
        </section>
    )
}