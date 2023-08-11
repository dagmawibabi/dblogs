import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faLinkedinIn, faTelegram, faTelegramPlane, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Navigation() {
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
                <FontAwesomeIcon icon={faTelegramPlane} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                <FontAwesomeIcon icon={faInstagram} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                <FontAwesomeIcon icon={faTiktok} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                <FontAwesomeIcon icon={faLinkedinIn} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                <FontAwesomeIcon icon={faGithub} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
            </div>
        </div>
    )
}