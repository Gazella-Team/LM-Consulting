import { Reveal } from "../Animations/Reveal"

type SectionIntroProps = {
    heading: string,
    paragraph?: string,
    children: React.ReactNode,
}

export default function SectionIntro(props:SectionIntroProps) {
    return (
        <section className="py-40">
            <div className="w-[90%] mx-auto max-w-6xl text-center">
                <Reveal delayTime={0.3}>
                    <h2 className="text-6xl font-bold tracking-tighter times-new-font">{props.heading}</h2>
                </Reveal>
            </div>
        </section>
    )
}