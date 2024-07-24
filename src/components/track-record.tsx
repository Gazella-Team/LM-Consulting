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
        <section className="py-24">
            <div className="w-[90%] mx-auto max-w-5xl flex items-center justify-between">
                {TrackRecordData.map((v) => <img className={`w-${v.size}`} src={v.image}></img>)}
            </div>
        </section>
    )
}