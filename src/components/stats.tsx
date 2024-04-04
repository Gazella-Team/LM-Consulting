const stats = {
    userCount: "0",
    mrr: "$0",
    employeeCount: "2",
    newVisitorCount: "100",
}

export default function Stats() {
    return (
        <section className="py-[100px] pt-0 bg-white text-gray-800">
            <div className="w-[96%] mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="p-10 border border-gray-600/10 rounded-xl">
                    <h1 className="text-gray-600 mb-3 font-[200]">Total users</h1>
                    <p className="text-5xl">{stats.userCount}</p>
                </div>
                <div className="p-10 border border-gray-600/10 rounded-xl">
                    <h1 className="text-gray-600 mb-3 font-[200]">Monthly recurring revenue</h1>
                    <p className="text-5xl">{stats.mrr}</p>
                </div>
                <div className="p-10 border border-gray-600/10 rounded-xl">
                    <h1 className="text-gray-600 mb-3 font-[200]">Team members</h1>
                    <p className="text-5xl">{stats.employeeCount}</p>
                </div>
                <div className="p-10 border border-gray-600/10 rounded-xl">
                    <h1 className="text-gray-600 mb-3 font-[200]">New visitors</h1>
                    <p className="text-5xl">{stats.newVisitorCount}</p>
                </div>
            </div>
        </section>
    )
}
