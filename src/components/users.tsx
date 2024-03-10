import { Reveal } from "./Animations/Reveal"

const userData = [
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
    {userName: "Slack", imagePath:"/users/slack.webp", userWebsite: "https://slack.com/"},
]

export default function Users() {
    return (
        <section className="pb-[100px]">
            <Reveal delayTime={0}>
                <div className="bg-white shadow-clean rounded-[14px] w-[90%] max-w-[1200px] mx-auto p-[40px] mt-[-400px] grid grid-cols-5 gap-[24px]">
                    {userData.map((v, index) => <UserCard key={v.userName} Obj={v} />)}
                </div>
            </Reveal>
        </section>
    )
}

const UserCard = (props:any) => {
    return (
        <Reveal delayTime={0}>
            <div className="py-[30px] rounded-[14px] bg-gray-50">
                <img alt={props.Obj.userName} className="w-[100px] mx-auto" src={props.Obj.imagePath}></img>
            </div>
        </Reveal>
    )
}