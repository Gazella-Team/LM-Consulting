import { cn } from "utils/cs"

type SectionIntroProps = {
    heading:string
    description?:string
    marginTop?: boolean
    marginBottom?:boolean
    children: React.ReactNode
}

export default function SectionIntro(props:SectionIntroProps) {
    return (
        <section className={cn(props.marginBottom && "pb-24", props.marginTop && "pt-24")}>
            <div className="w-[86%] mx-auto max-w-6xl text-center">
                <h1 className="font-semibold text-4xl">{props.heading}</h1>
                <p>{props.description}</p>
            </div>
        </section>
    )
}