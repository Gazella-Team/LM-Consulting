import { Reveal } from "./Animations/Reveal"
import { RevealLight } from "./Animations/RevealLight"

const TrackRecordData = [
    {
        image: "/track-record/goldman-sachs.svg",
        size: "24"
    },
    {
        image: "/track-record/blackrock.png",
        size: "32"
    },
    {
        image: "/track-record/volvo.png",
        size: "32"
    },
    {
        image: "/track-record/psg.png",
        size: "20"
    },
]

export default function TrackRecord() {
    return (
        <section className="pt-24 pb-12">
            <div className="w-[90%] mx-auto max-w-5xl flex items-center justify-between">
                {TrackRecordData.map((v, index) => <RevealLight delayTime={index/80}><img className={`w-${v.size}`} src={v.image}></img></RevealLight>)}
            </div>
        </section>
    )
}