type FeatureCardProps = {
    icon: React.ReactNode,
    heading:string,
    description:string,
    image: string,
}

export default function Features({featureData}:{featureData:any}) {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-[86%]">
                {featureData.map((feature:any) => <FeatureCard image={feature.image} heading={feature.heading} icon={feature.icon} description={feature.description} />)}
            </div>
        </section>
    )
}

function FeatureCard(props:FeatureCardProps) {
    return (
        <div style={{background: "linear-gradient(350deg, rgba(94,23,235,0.057882528011204526) 0%, rgba(255,255,255,1) 59%)"}} className="bg-white rounded-xl border border-gray-600/10 shadow-sm flex flex-col gap-6">
            <div className="p-10 flex flex-col gap-6">
                <div className="rounded-full flex">
                    <div className="rounded-full border-2 border-main flex p-1 text-main">
                        {props.icon}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-lg text-gray-800">{props.heading}</h2>
                    <p className="text-base text-gray-600">{props.description}</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <img className="w-[340px] h-[350px] object-cover border-l border-t border-gray-600/10 rounded-tl-xl rounded-br-xl" src={props.image}></img>
            </div>
        </div>
    )
}