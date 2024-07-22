import { Reveal } from "./Animations/Reveal";

export default function Hero() {
    return (
        <section className="py-36">
            <div className="w-[90%] mx-auto flex flex-col gap-8 max-w-6xl text-center">
                <Reveal delayTime={0.2}>
                    <h1 className="text-9xl tracking-tighter times-new-font heading mx-auto leading-[100%] max-w-3xl font-bold"><span className="text-[#8c8c8c] font-extralight">Helping founders</span><br></br> raise capital</h1>
                </Reveal>
                <Reveal delayTime={0.3}>
                    <p className="text-xl max-w-lg mx-auto text-gray-600">We help entrepreneurs achieve big things in short spaces of time through growth funding and analytics.</p>
                </Reveal>
            </div>
        </section>
    )
}