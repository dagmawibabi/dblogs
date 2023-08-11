export default function Header() {
    let headerText = "I'm a creative engineer focused on making exceptional digital products. Currently I'm focused on building my own start up at Dream Intelligence. But in this part of my journey I'm learning to read and write. So this's a place to host all my writings. I hope it inspires, motivates and helps you grow. Enjoy!";

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