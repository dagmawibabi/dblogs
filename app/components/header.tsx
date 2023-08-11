import configJSON from "../../public/config.json";

export default function Header() {
    let headerText = configJSON.introduction.toString();

    let headerTextArray = headerText.split(" ");


    return (
        <div className="
            w-full text-zinc-400 text-md 
            sm:text-lg 
        ">
            {

                headerTextArray.map((content, index) => {
                    return <span key={index} className="hover:text-white cursor-default"> {content} </span>
                })
            }
            <p>

            </p>
        </div>
    )
}