import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn, faTelegramPlane, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import configJSON from "../../public/config.json";

export default function Navigation() {
    let socials = [
        {
            "icon": faTelegramPlane,
            "link": configJSON.socials.telegram,
        },
        {
            "icon": faInstagram,
            "link": configJSON.socials.instagram,
        },
        {
            "icon": faTiktok,
            "link": configJSON.socials.tiktok,
        },
        {
            "icon": faLinkedinIn,
            "link": configJSON.socials.linkedin,
        },
        {
            "icon": faGithub,
            "link": configJSON.socials.github,
        },
    ]

    return (
        <div className="items-center content-center
            inline-block justify-between mb-2 sticky top-0 z-50 py-5 
            sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0
            sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4
            sm:inline-block md:inline-block lg:inline-block xl:flex 2xl:flex
        ">
            <Link href={"/"}>
                <span className="text-2xl text-white hover:underline hover:underline-offset-8
                    sm:text-3lg
                ">
                    {`Hi, I'm ${configJSON.username.toString()} 👋`}
                </span>
            </Link>
            <div className="w-36 flex justify-between mt-6
                    sm:mt-6 xl:mb-6 2xl:mb-6
                    sm:w-44 md:w-44 lg:w-44 xl:w-44 2xl:w-44
                ">
                {
                    socials.map((content, index) => {
                        return content.link != "" ?
                            <Link href={content.link} key={index} target="_blank">
                                <FontAwesomeIcon icon={content.icon} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                            </Link> : <> </>
                    })
                }
            </div>
        </div>
    )
}