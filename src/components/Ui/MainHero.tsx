import { Reveal } from "../Animations/Reveal";
import { useRouter } from 'next/router'
import Link from "next/link";

export default function MainHero(props:any) {
    const router = useRouter()
    const path = router.pathname
    return (
        <section className={path === "/" ? "bg-[url(/bgs/hero02.svg)] bg-cover bg-center w-full pt-[170px] pb-[480px]":"bg-[url(/bgs/hero.svg)] bg-cover bg-center w-full pt-[170px] pb-[480px]"}>
            <div className="text-white text-center w-[94%] mx-auto max-w-[1100px]">
                <Reveal delayTime={0}>
                    <h1 className="font-[300] tracking-tight text-[70px] leading-[80px] mb-[14px]">{props.heading}</h1>
                </Reveal>
                <Reveal delayTime={0}>
                    <p className="font-[200] text-[18px] w-[80%] mx-auto text-gray-200 max-w-[1000px]">{props.paragraph}</p>
                </Reveal>
                {path === "/" ? 
                
                <div className="flex items-center justify-center gap-[16px] mt-[50px]">
                     <Link className="bg-white text-main text-center px-[24px] py-[10px] text-[15px] rounded-full font-[300]" href={"/"}>Join Waitlist</Link>
                     <Link className="bg-white text-main text-center px-[24px] py-[10px] text-[15px] rounded-full font-[300]" href={"/pricing"}>View Pricing</Link>

                </div>
                :
                null}
            </div>
        </section>
    )
}