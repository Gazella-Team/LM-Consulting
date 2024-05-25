const testimonialsData = [
    {companyImage: "/users/alvas.webp", company: "Alvas.ai", review: "Perplexit Dub.co has been a game-changer for our marketing campaigns our links get hundreds of thousands of clicks monthly and with Dub, we are able to easily design our link embeds, attribute clicks, and visualize our data.", personImage:"/people/lasseosmann.webp", personName:"Villads Leth", personPosition: "Founder, Alvas.ai"},
    {companyImage: "/users/alvas.webp", company: "Alvas.ai", review: "Perplexit Dub.co has been a game-changer for our marketing campaigns our links get hundreds of thousands of clicks monthly and with Dub, we are able to easily design our link embeds, attribute clicks, and visualize our data.", personImage:"/people/lasseosmann.webp", personName:"Villads Leth", personPosition: "Founder, Alvas.ai"},
    {companyImage: "/users/alvas.webp", company: "Alvas.ai", review: "Perplexit Dub.co has been a game-changer for our marketing campaigns our links get hundreds of thousands of clicks monthly and with Dub, we are able to easily design our link embeds, attribute clicks, and visualize our data.", personImage:"/people/lasseosmann.webp", personName:"Villads Leth", personPosition: "Founder, Alvas.ai"},
    {companyImage: "/users/alvas.webp", company: "Alvas.ai", review: "Perplexit Dub.co has been a game-changer for our marketing campaigns our links get hundreds of thousands of clicks monthly and with Dub, we are able to easily design our link embeds, attribute clicks, and visualize our data.", personImage:"/people/lasseosmann.webp", personName:"Villads Leth", personPosition: "Founder, Alvas.ai"},
    {companyImage: "/users/alvas.webp", company: "Alvas.ai", review: "Perplexit Dub.co has been a game-changer for our marketing campaigns our links get hundreds of thousands of clicks monthly and with Dub, we are able to easily design our link embeds, attribute clicks, and visualize our data.", personImage:"/people/lasseosmann.webp", personName:"Villads Leth", personPosition: "Founder, Alvas.ai"},
    {companyImage: "/users/alvas.webp", company: "Alvas.ai", review: "Perplexit Dub.co has been a game-changer for our marketing campaigns our links get hundreds of thousands of clicks monthly and with Dub, we are able to easily design our link embeds, attribute clicks, and visualize our data.", personImage:"/people/lasseosmann.webp", personName:"Villads Leth", personPosition: "Founder, Alvas.ai"},

]

export default function Testimonials() {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {testimonialsData.map((testimonial) => <ReviewCard  Obj={testimonial} key={testimonial.personName}/>)}
            </div>
        </section>
    )
}

function ReviewCard(props:any) {
    return (
        <div className="rounded-3xl border border-gray-600/10 paragraph w-[360px] p-10 px-8  backdrop:blur-xl text-gray-800 flex flex-col justify-between gap-20 min-h-[200px]">
            <div>
                <p className="text-base text-gray-600 font-normal leading-[170%]">&quot;{props.Obj.review}&quot;</p>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-semibold text-base">{props.Obj.personName}</h2>
                    <p className="text-gray-600 text-sm">{props.Obj.personPosition}</p>
                </div>
                <img className="w-12 rounded-full border" src={props.Obj.personImage}></img>
            </div>
        </div>
    )
}