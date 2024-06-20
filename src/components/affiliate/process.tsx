export default function AffiliateProcess() {
    return (
        <section className="bg-[url(/bgs/affiliate-process.svg)] bg-center bg-cover min-h-[300px]">
            <div className="w-[86%] max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white  w-full md:mt-20 flex flex-1 rounded-2xl flex-col gap-2 text-gray-800 border border-gray-600/10 shadow-clean shadow-main/20 p-8">
                    <h2 className="font-semibold text-lg">01. Register</h2>
                    <p className="text-gray-600 font-normal paragraph">Create a valid account with your informations in our affiliate program.</p>
                </div>
                <div className="bg-white flex flex-1 rounded-2xl w-full flex-col gap-2 text-gray-800 border border-gray-600/10 shadow-clean shadow-main/20 p-8">
                    <h2 className="font-semibold text-lg">0.2 Recieve your link</h2>
                    <p className="text-gray-600 font-normal paragraph">Copy the custom affiliate link that we provide you to promote.</p>
                </div>
                <div style={{ background: 'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)', }} className="md:mt-20 flex  w-full flex-1 rounded-2xl flex-col gap-2 text-gray-800 border border-main shadow-clean shadow-main/20 p-8">
                    <h2 className="font-semibold text-lg">0.3 Earn money</h2>
                    <p className="text-gray-600 font-normal paragraph">Start earning up to 30% commision by promoting your custom link.</p>
                </div>
            </div>
        </section>
    )
}