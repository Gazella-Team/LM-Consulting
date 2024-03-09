import Link from "next/link";

export default function Navbar(props:any) {
    return (
        <div>
            {props.white ? <nav className="h-[80px] bg-transparent absolute w-full flex items-center">
            <div className="w-[94%] max-w-[1270px] mx-auto text-white flex items-center justify-start">
                <div className="w-[20%]">
                    <Link href={"/"} className="font-[400] text-[22px]">toolbird</Link>
                </div>
                <div className="flex-1 flex items-center text-[15px] justify-center gap-[30px] font-[200]">
                    <Link href={"/"}>Product</Link>
                    <Link href={"/"}>Resources</Link>
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/"}>Blog</Link>
                </div>
                <div className="w-[20%] flex items-center justify-end">
                    <p>hey</p>
                </div>
                
            </div>
        </nav>:        <nav className="h-[80px] bg-white absolute w-full flex items-center">
            <div className="w-[94%] max-w-[1270px] mx-auto text-main flex items-center justify-start">
                <div className="w-[20%]">
                    <Link href={"/"} className="font-[400] text-[22px]">toolbird</Link>
                </div>
                <div className="flex-1 flex items-center text-[15px] justify-center gap-[30px] font-[200]">
                    <Link href={"/"}>Product</Link>
                    <Link href={"/"}>Resources</Link>
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/"}>Blog</Link>
                </div>
                <div className="w-[20%] flex items-center justify-end">
                    <p>hey</p>
                </div>
                
            </div>
        </nav>}
        </div>
    )
}