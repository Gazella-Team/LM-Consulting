import { Reveal } from "../Animations/Reveal";

export default function MainHero(props:any) {
    return (
        <section className="bg-[url(/bgs/hero.svg)] bg-cover bg-center w-full pt-[170px] pb-[480px]">
            <div className="text-white text-center w-[94%] mx-auto max-w-[1000px]">
                <Reveal delayTime={0}>
                    <h1 className="font-[300] text-[50px] mb-[14px]">{props.heading}</h1>
                </Reveal>
                <Reveal delayTime={0}>
                    <p className="font-[200] text-[18px] w-[80%] mx-auto">{props.paragraph}</p>
                </Reveal>
            </div>
        </section>
    )
}