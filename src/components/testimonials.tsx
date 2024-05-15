const testimonialsData = [
    {companyImage: "/users/alvas.webp", company: "Alvas.ai", review: "Perplexit Dub.co has been a game-changer for our marketing campaigns our links get hundreds of thousands of clicks monthly and with Dub, we are able to easily design our link embeds, attribute clicks, and visualize our data.", personImage:"/", personName:"Villads Leth", personPosition: "Founder, Alvas.ai"}
]

export default function Testimonials() {
    return (
        <section>
            <div className="flex justify-between w-[86%] mx-auto max-w-6xl">
                {testimonialsData.map((testimonial) => <ReviewCard  Obj={testimonial} key={testimonial.personName}/>)}
            </div>
        </section>
    )
}

function ReviewCard(props:any) {
    return (
        <div className="rounded-2xl shadow-md border border-gray-600/10 w-[360px] p-10 px-8 bg-white backdrop:blur-xl text-gray-800 flex flex-col justify-between min-h-[200px]">
            <div className="mb-20">
                <div className="bg-gray-800 inline-block px-4 py-1 rounded-full">
                    <img className="w-20 flex" src="/users/alvas.webp"></img>
                </div>
            </div>
            <div>
                <p className="text-base text-gray-600 font-medium leading-[170%]">{props.Obj.review}</p>
            </div>
        </div>
    )
}