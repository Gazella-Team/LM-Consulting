import { Reveal } from "./Animations/Reveal";

export default function DashboardDisplay() {
    return (
        <section className="pt-[70px] h-[800px] bg-cover">
            <div className="w-[96%] mx-auto max-w-[1200px]">
                <Reveal delayTime={0.5}>
                    <img className="rounded-xl z-[0]" src="/showcases/demo.png"></img>
                </Reveal>
            </div>
        </section>
    )
}