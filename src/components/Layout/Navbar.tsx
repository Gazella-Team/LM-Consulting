import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter()
    const path = router.pathname
    return (
        <nav className="h-[90px] flex items-center">
            <div className="w-[96%] mx-auto flex items-center justify-between text-gray-800">
                <div className="w-[20%] flex items-center justify-start">
                    <Link href={"/"}>
                        <img className="w-28" src={path === "/guides" ? "/logos/guideslogogray.svg":"/logos/logogray.svg"}></img>
                    </Link>
                </div>
                <div className="flex-1 flex items-center justify-center gap-7">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/guides"}>Guides</Link>
                    <Link href={"/public-building"}>Public</Link>
                    <Link href={"/home"}>Contact</Link>
                </div>
                <div className="w-[20%] flex items-center justify-end gap-5">
                    <Link target="_blank" href={"https://app.toolbird.io/auth/login"}>Log in</Link>
                    <Link className="bg-main border-[3px] border-main text-white px-6 py-1 rounded-full" href={"/waitlist"}>Join waitlist</Link>
                </div>
            </div>
        </nav>
    )
}