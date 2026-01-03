export default function Navbar(){
    return(
        <>
        <nav className="fixed top-0 z-50 justify-center p-4">
            <div className="container mx-auto">
                <ul className="list-style-none me-auto flex flex-col ps-0 lg:flex-row">
                    <li className="inline-block">
                        <a href="">About me</a>
                    </li>
                    <li className="inline-block">
                        <a href="">Projects</a>
                    </li>
                    <li className="inline-block">
                        <a href="">Experience</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>)
};