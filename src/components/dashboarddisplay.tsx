import { Reveal } from "./Animations/Reveal";

export default function DashboardDisplay() {
    return (
        <section className="bg-[url(/bgs/line.svg)] bg-center bg-cover py-[100px]">
            <Reveal delayTime={0.5}>
                <img className="w-[60%] mx-auto rounded-xl shadow-clean border border-gray-600/10" src="/showcases/dash.webp"></img>
            </Reveal>
        </section>
    )
}