import { Reveal } from "./Animations/Reveal"

export default function BentoGridComponent() {
    return (
        <section>
            <div className="max-w-6xl mx-auto flex flex-col gap-6 w-[90%]">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-bentoLeft">
                    <BentoGridCard Obj={{image:"/showcases/analytics.svg", heading:"Complete web analytics system", description: "Keep track of all traffic going thorugh your website. Analyze visitors, sources, devices and other essential data points for better cusomer insights"}} />
                    <BentoGridCard Obj={{image:"/showcases/waitlists.svg", heading:"Waitlist management", description: "Create, manage and run a custom waitlist in a structured dashboard with only two clicks"}} />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-bentoRight">
                <BentoGridCard Obj={{image:"/showcases/team.svg", heading:"Collaborate with your team", description: "Share a workspace with your team-members for more productive development"}} />
                    <BentoGridCard Obj={{image:"/showcases/sources.svg", heading:"Track your leads", description: "Get better insights on your leads and potential customers. ToolBird allows you to track all sources visiting your digital product"}} />
                </div>

                <p className="mx-auto bg-main text-white rounded-xl px-4 py-2 font-bold text-sm mt-4 select-none">And many more tools to come</p>
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