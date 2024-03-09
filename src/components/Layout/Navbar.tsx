import Link from "next/link";

export default function Navbar(props:any) {
    return (
        <div>
            <nav className="h-[80px] bg-transparent absolute w-full flex items-center">
            <div className="w-[94%] max-w-[1470px] mx-auto text-white flex items-center justify-start">
                <div className="w-[25%]">
                    <Link href={"/"} className="font-[400] text-[22px]">toolbird</Link>
                </div>
                <div className="flex-1 flex items-center text-[15px] justify-center gap-[30px] font-[200]">
                    <Link href={"/"}>Product</Link>
                    <Link href={"/"}>Resources</Link>
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/"}>Blog</Link>
                </div>
                <div className="w-[25%] flex items-center gap-[16px] justify-end">
                    <Link className="text-white font-[300] px-[6px] py-[10px] text-[15px] rounded-full" href={"/"}>Log In</Link>
                    <Link className="bg-white text-main text-center px-[24px] py-[10px] text-[15px] rounded-full font-[300]" href={"/"}>Request Demo</Link>
                </div>
                
            </div>
        </nav>
        </div>
    )
}