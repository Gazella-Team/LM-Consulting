import { Reveal } from "./Animations/Reveal"

export default function BentoGridComponent() {
    return (
        <section>
            <div className="max-w-6xl mx-auto flex flex-col gap-6 w-[90%]">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-bentoLeft">
                    <BentoGridCard Obj={{image:"/showcases/analytics.svg", heading:"Complete analytics system", description: "A skewed grid layout with Title, description and a header component. A skewed grid layout with Title, description and a header component"}} />
                    <BentoGridCard Obj={{image:"/showcases/waitlists.svg", heading:"Complete analytics system", description: "A skewed grid layout with Title, description and a header component"}} />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-bentoRight">
                <BentoGridCard Obj={{image:"/showcases/sources.svg", heading:"Complete analytics system", description: "A skewed grid layout with Title, description and a header component"}} />
                    <BentoGridCard Obj={{image:"/showcases/analytics.svg", heading:"Complete analytics system", description: "A skewed grid layout with Title, description and a header component. A skewed grid layout with Title, description and a header component"}} />
                </div>
            </div>
        </section>
    )
}

function BentoGridCard(props:any) {
    return (
        <Reveal delayTime={0.4}>
            <div className="bg-white border rounded-xl border-gray-600/10 shadow-sm">
                <img className="h-[340px] w-full object-cover rounded-t-xl" src={props.Obj.image}></img>
                <div className="p-10 flex flex-col gap-2">
                    <h2 className="font-bold text-gray-800">{props.Obj.heading}</h2>
                    <p className="text-gray-600">{props.Obj.description}</p>
                </div>
            </div>
        </Reveal>
    )
}