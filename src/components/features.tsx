export default function Features() {
    return (
        <section className="py-[100px] bg-white">
            <div className="w-[95%] mx-auto max-w-[1300px] mb-10">
                <h1 className="text-center text-[50px] text-gray-800 font-semibold">All tools in <span className="text-main">one platform</span></h1>
            </div>
            <div className="w-[95%] mx-auto max-w-[1300px]">
                <div className="bg-[url(/toolbgs/waitlists.svg)] bg-center bg-cover border border-gray-600/10 h-[500px] rounded-[30px] py-10 px-14">
                    <img className="w-32 mb-10" src="/toolicons/waitlists.svg"></img>
                    <h1 className="font-semibold text-3xl text-gray-800 max-w-[400px] mb-6">Create waitlists effortlessly with only 2 clicks</h1>
                    <p className="max-w-[400px] text-gray-600">Collecting signups for your waitlist can be challenging. We've collected the top 10 best advice on how to build a packed list of signups for your coming waitlist</p>
                </div>
            </div>
        </section>
    )
}