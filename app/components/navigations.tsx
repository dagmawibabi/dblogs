import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faLinkedinIn, faTelegram, faTelegramPlane, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Navigation () {
    return (
        <div className="flex justify-between mb-10 sticky top-0 bg-[#0A0A0A] z-50 py-5">
            <span className="text-3xl">
                {"Hi, I'm Dagmawi Babi 👋"}
            </span>
            <div className="w-44 flex justify-between">
                <FontAwesomeIcon icon={faTelegramPlane} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                <FontAwesomeIcon icon={faInstagram} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                <FontAwesomeIcon icon={faTiktok} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                <FontAwesomeIcon icon={faLinkedinIn} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
                <FontAwesomeIcon icon={faGithub} className="text-zinc-500 hover:text-white hover:scale-125" width={23} height={23} />
            </div>
        </div>
    )
}