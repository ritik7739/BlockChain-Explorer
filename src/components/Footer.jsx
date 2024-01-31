import {
    AiFillTwitterSquare,
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";

function Footer() {
    return (
        <footer className="flex px-24 py-6 bg-white text-center items-center border-t">
            <p className="mr-auto text-lg">© 2024 Ritik Singh</p>
            <div className="flex items-center w-1/5 justify-between">
                <p className="text-xl">Follow Me</p>
                <a
                    href="https://twitter.com/rsmotivationrit"
                    target="_blank"
                >
                    <AiFillTwitterSquare size="36" color="#00acee" />
                </a>
                <a
                    href="https://www.linkedin.com/in/ritikkumarsingh7739/"
                    target="_blank"
                >
                    <AiFillLinkedin size="36" color="#0A66C2" />
                </a>
                <a
                    href="https://github.com/ritik7739"
                    target="_blank"
                >
                    <AiFillGithub size="36" color="#171515" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
