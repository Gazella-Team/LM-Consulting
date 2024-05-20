import Layout from "@/components/Layout";
import CompareHero from "@/components/compare/Hero";
import { CheckCheckIcon, CheckCircle, CheckCircleIcon, X, XCircle, XCircleIcon, XSquareIcon } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

export default function ComparePlausible() {
    return (
        <Layout>
            <CompareHero company="Plausible" iconPath="/" paragraph="Learn how Dub.co compares to Rebrandly and why Dub.co is the best Rebrandly." />
            <div className="flex paragraph mb-24 shadow-main/30 shadow-clean relative justify-center w-[86%] mx-auto max-w-5xl">
                <div className="border min-w-full rounded-2xl bg-white">
                    <table className="min-w-full border-collapse rounded-xl">
                        <thead>
                        <tr>
                            <th className="rounded-tl-2xl bg-transparent w-[600px] px-4py-8"></th>
                            <th className="py-8 flex items-center "><img className="w-24" src="/logos/finallogo.svg"></img></th>
                            <th className="rounded-tr-2xl py-8 bg-white"><img className="w-24" src="/compare/plausible.svg"></img></th>
                        </tr>
                        </thead>
                            <tbody>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <tr className="border-b border-b-gray-600/10 pb-10" key={index}>
                                <td className="bg-white px-14 py-6">
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-sm font-semibold text-gray-800">Advanced analytics</h2>
                                        <p className="text-sm text-gray-600">Create branded short links with your own domain</p>
                                    </div>
                                </td>
                                <td className="bg-white"><FaCheckCircle className="text-gray-800" size={18}  /></td>
                                <td className="bg-white"><XCircle className="text-gray-500" size={18}  /></td>
                                </tr>
                            ))}
                            </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}