import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faLinkedinIn, faTelegram, faTelegramPlane, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Navigation() {
    let socials = [
        {
            "icon": faTelegramPlane,
            "link": "https://t.me/Dagmawi_Babi/",
        },
        {
            "icon": faInstagram,
            "link": "https://www.instagram.com/dagmawibabi/",
        },
        {
            "icon": faTiktok,
            "link": "https://www.tiktok.com/@dagmawi_babi",
        },
        {
            "icon": faLinkedinIn,
            "link": "https://www.linkedin.com/in/dagmawibabi/",
        },
        {
            "icon": faGithub,
            "link": "https://github.com/dagmawibabi",
        },
    ]
    return (
        <div className="
            inline-block justify-between mb-2 sticky top-0 bg-[#0A0A0A] z-50 py-5 
            md:flex lg:flex
            sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5
        ">
            <Link href={"/"}>
                <span className="text-2xl text-white hover:underline hover:underline-offset-8
                    sm:text-3lg
                ">
                    {"Hi, I'm Dagmawi Babi 👋"}
                </span>
            </Link>
            <div className="w-36 flex justify-between mt-6
                sm:mt-0 sm:w-44 md:w-44 lg:w-44 xl:w-44
            ">
                {
                    socials.map((content, index) => {
                        return <Link href={content.link}>
                            <FontAwesomeIcon key={index} icon={content.icon} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
}