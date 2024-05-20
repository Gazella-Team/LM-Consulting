import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import CompareHero from "@/components/compare/Hero";
import { CheckCheckIcon, CheckCircle, CheckCircleIcon, X, XCircle, XCircleIcon, XSquareIcon } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

export default function ComparePlausible() {
    return (
        <Layout>
            <CompareHero company="Plausible" iconPath="/" paragraph="Learn how Dub.co compares to Rebrandly and why Dub.co is the best Rebrandly." />
            <Reveal delayTime={0.1}>
                <div className="flex paragraph rounded-2xl border overflow-x-auto border-gray-600/10 mb-24 shadow-main/30 shadow-clean relative justify-center w-[86%] mx-auto max-w-5xl">
                    <table className="min-w-full rounded-2xl border-collapse overflow-x-auto">
                        <thead className="rounded-2xl">
                            <tr className="rounded-2xl">
                                <th className="rounded-tl-2xl bg-transparent w-[600px] bg-white px-4 pt-8"></th>
                                <th className="pt-8 flex items-center bg-white"><div className="flex justify-center items-center"><img className="w-24" src="/logos/finallogo.svg"></img></div></th>
                                <th className="rounded-tr-2xl pt-8 bg-white"><img className="w-24" src="/compare/plausible.svg"></img></th>
                            </tr>
                            </thead>
                                <tbody className="rounded-2xl">
                                    <tr className="border-b border-b-gray-600/10 pb-10">
                                        <td className="bg-white px-14 py-8">
                                            <div className="flex flex-col gap-1">
                                                <h2 className="font-semibold text-gray-800">Advanced analytics</h2>
                                                <p className="text-sm text-gray-600">Create branded short links with your own domain</p>
                                            </div>
                                        </td>
                                        <td className="bg-white"><FaCheckCircle className="text-gray-800" size={18}  /></td>
                                        <td className="bg-white"><XCircle className="text-gray-500" size={18}  /></td>
                                    </tr>
                                    <tr className="border-b border-b-gray-600/10 pb-10">
                                        <td className="bg-white px-14 py-8">
                                            <div className="flex flex-col gap-1">
                                                <h2 className="font-semibold text-gray-800">Advanced analytics</h2>
                                                <p className="text-sm text-gray-600">Create branded short links with your own domain</p>
                                            </div>
                                        </td>
                                        <td className="bg-white"><FaCheckCircle className="text-gray-800" size={18}  /></td>
                                        <td className="bg-white"><XCircle className="text-gray-500" size={18}  /></td>
                                    </tr>
                                    <tr className="border-b border-b-gray-600/10 pb-10">
                                        <td className="bg-white px-14 py-8">
                                            <div className="flex flex-col gap-1">
                                                <h2 className="font-semibold text-gray-800">Advanced analytics</h2>
                                                <p className="text-sm text-gray-600">Create branded short links with your own domain</p>
                                            </div>
                                        </td>
                                        <td className="bg-white"><FaCheckCircle className="text-gray-800" size={18}  /></td>
                                        <td className="bg-white"><XCircle className="text-gray-500" size={18}  /></td>
                                    </tr>
                                    <tr className="border-b border-b-gray-600/10 pb-10">
                                        <td className="bg-white px-14 py-8">
                                            <div className="flex flex-col gap-1">
                                                <h2 className="font-semibold text-gray-800">Advanced analytics</h2>
                                                <p className="text-sm text-gray-600">Create branded short links with your own domain</p>
                                            </div>
                                        </td>
                                        <td className="bg-white"><FaCheckCircle className="text-gray-800" size={18}  /></td>
                                        <td className="bg-white"><XCircle className="text-gray-500" size={18}  /></td>
                                    </tr>
                                    <tr className="border-b border-b-gray-600/10 pb-10">
                                        <td className="bg-white px-14 py-8">
                                            <div className="flex flex-col gap-1">
                                                <h2 className="font-semibold text-gray-800">Advanced analytics</h2>
                                                <p className="text-sm text-gray-600">Create branded short links with your own domain</p>
                                            </div>
                                        </td>
                                        <td className="bg-white"><FaCheckCircle className="text-gray-800" size={18}  /></td>
                                        <td className="bg-white"><XCircle className="text-gray-500" size={18}  /></td>
                                    </tr>
                                    <tr className="rounded-b-2xl border-b-gray-600/10 pb-10">
                                        <td className="bg-white rounded-bl-2xl px-14 py-8">
                                            <div className="flex flex-col gap-1">
                                                <h2 className="font-semibold text-gray-800">Advanced analytics</h2>
                                                <p className="text-sm text-gray-600">Create branded short links with your own domain</p>
                                            </div>
                                        </td>
                                        <td className="bg-white"><FaCheckCircle className="text-gray-800" size={18}  /></td>
                                        <td className="bg-white rounded-br-2xl"><XCircle className="text-gray-500" size={18}  /></td>
                                    </tr>
                                </tbody>
                        </table>
                </div>
            </Reveal>
        </Layout>
    )
}