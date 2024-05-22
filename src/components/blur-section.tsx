import { cn } from "utils/cs"

type BlurSectionProps = {
    children: React.ReactNode
    marginBottom?:boolean
}

export default function BlurSection(props:BlurSectionProps) {
    return (
        <section style={{background: "linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)"}} className={cn("py-24 backdrop:blur-3xl border-y border-gray-600/10", props.marginBottom && "mb-24")}>
            <div className="w-[86%] mx-auto max-w-6xl">
                {props.children}
            </div>
        </section>
    )
}