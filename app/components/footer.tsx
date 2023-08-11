import configJSON from "../../public/config.json";

export default function Footer() {
    let date = new Date();
    let humanReadableDate = date.toDateString();

    return (
        <div className="justify-center text-zinc-600 text-center text-sm">
            {humanReadableDate} &copy; {configJSON.footer.toString()}
        </div>
    )
}