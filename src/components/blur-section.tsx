import { cn } from "utils/cs"

type BlurSectionProps = {
    marginBottom?:boolean
    hook: string
	heading: string
	description?: string
	children: React.ReactNode
	founders?: boolean
	bottomMargin?:boolean
}

export default function BlurSection(props:BlurSectionProps) {
    return (
        <section style={{background: "linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)"}} className={cn("my-24 max-w-7xl mx-auto rounded-[100px] backdrop:blur-3xl border-y border-gray-600/10", props.marginBottom && "mb-24")}>
            <div className="w-[86%] mx-auto max-w-6xl">
                <div className="text-center text-gray-800 py-24 z-1">
                    {props.founders ? (
                            <div className="flex items-center justify-center mb-8">
                                <img
                                    className="w-20 h-20 object-cover rounded-full border-2 border-main"
                                    src="/people/lasseosmann.webp"
                                ></img>
                                <img
                                    className="w-20 h-20 object-cover rounded-full border-2 border-main ml-[-20px]"
                                    src="https://simonmaribo.dk/simonmaribo.png"
                                ></img>
                            </div>
                    ) : null}
                        <p className="font-[Caveat] text-main text-3xl mb-4">
                            {props.hook}
                        </p>
                        <h1 className="text-[40px] mb-4 md:text-[50px] xl:text-[55px] leading-[110%] max-w-[700px] mx-auto font-black text-gray-800">
                            {props.heading}
                        </h1>
                        {props.description &&
                                        <p className="text-base md:text-lg xl:text-lg paragraph max-w-[350px] mx-auto text-gray-600">
                                        {props.description}
                                    </p>
                                    }
                    <div className={cn("pt-14 text-left", props.bottomMargin && "mb-24")}>{props.children}</div>
                </div>
            </div>
        </section>
    )
}