import Link from "next/link"

type GlossaryCardProps = {
    term:string,
    description:string,
    link:string,
}

export default function GlossaryCard(props:GlossaryCardProps) {
    return (
        <Link href={props.link} className="bg-white rounded-2xl flex flex-col gap-3 border border-gray-600/10 p-10 text-gray-800">
            <h2 className="font-semibold text-xl">{props.term}</h2>
            <p className="text-gray-600 paragraph font-normal">{props.description.slice(0, 120)}...</p>
        </Link>
    )
}