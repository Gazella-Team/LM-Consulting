import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({white}:{white:boolean}) {
    const router = useRouter()
    const path = router.pathname
    return (
        white ? 
    <nav className="h-[90px] flex items-center bg-transparent">
        <div className="w-[96%] mx-auto flex items-center justify-between text-gray-800">
            <div className="w-[50%] flex items-center justify-start">
                <Link href={"/"}>
                    <h2 className="font-[700] text-xl">toolbird.io</h2>
                </Link>
            </div>
            <div className="w-[50%] flex items-center justify-end gap-5 font-medium">
                <Link target="_blank" href={"https://app.toolbird.io/auth/login"}>Log in</Link>
                <Link className="bg-main border-[3px] border-main text-white px-6 py-2 rounded-full" href={"https://app.toolbird.io/auth/login"}>Join waitlist</Link>
            </div>
        </div>
    </nav>
    :
    <nav className="h-[90px] flex items-center bg-main">
        <div className="w-[96%] mx-auto flex items-center justify-between text-white">
            <div className="w-[20%] flex items-center justify-start">
                <Link href={"/"}>
                    <img className="w-28" src={path === "/guides" ? "/logos/guideslogogray.svg":"/logos/logogray.svg"}></img>
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-center gap-7">
                <Link href={"/about"}>Our story</Link>
                <Link href={"/"}>Community</Link>
                <Link href={"/"}>Contact</Link>
            </div>
            <div className="w-[20%] flex items-center justify-end gap-5">
                <Link target="_blank" href={"https://app.toolbird.io/auth/login"}>Log in</Link>
                <Link className="bg-white border-[3px] border-main text-main px-6 py-2 rounded-full" href={"https://app.toolbird.io/auth/login"}>Join waitlist</Link>
            </div>
        </div>
    </nav>
    )
}