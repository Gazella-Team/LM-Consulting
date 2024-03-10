import { Reveal } from "../Animations/Reveal"

export default function SectionStarter(props:any) {
    return (
        <section className="py-[100px]">
            <div className="w-[90%] mx-auto max-w-[1000px] text-center">
                <Reveal delayTime={0}>
                    <h1 className="font-[300] text-gray-800 text-[40px] mb-[14px]">{props.heading}</h1>
                </Reveal>
                <Reveal delayTime={0}>
                    <p className="font-[200] text-[18px] w-[80%] mx-auto text-gray-600 mb-[50px]">{props.paragraph}</p>
                </Reveal>
            </div>
        </section>
    )
}