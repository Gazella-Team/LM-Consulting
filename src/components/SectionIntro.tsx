type SectionIntroProps = {
    hook:string,
    heading:string,
    description:string
    children: React.ReactNode,
}

export default function SectionIntro(props:SectionIntroProps) {
    return (
        <div className="text-center text-gray-800 mb-14">
            <p className="font-[Caveat] text-main text-3xl mb-3">{props.hook}</p>
            <h2 className="text-5xl font-bold mb-4">{props.heading}</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">{props.description}</p>
            <div className="py-24 pt-14 text-left">
                {props.children}
            </div>
        </div>
    )
}