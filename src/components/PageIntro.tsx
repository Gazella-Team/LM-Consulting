import { Reveal } from "./Animations/Reveal";

interface PageIntroProps {
    heading: string,
    paragraph:string,
    highlighted:string,
}

export default function PageIntro(props:PageIntroProps) {
    return (
        <section className="py-[100px]">
            <div className="w-[96%] mx-auto max-w-[1000px] text-center">
                <Reveal delayTime={0.1}>
                    <h1 className="text-[70px] font-[500] text-gray-800">{props.heading} {props.highlighted && <span className="text-main">{props.highlighted}</span>}</h1>
                </Reveal>
                <Reveal delayTime={0.2}>
                    <p className="text-xl font-[400] max-w-[770px] mx-auto text-gray-600">{props.paragraph}</p>
                </Reveal>
            </div>
        </section>
    )
}