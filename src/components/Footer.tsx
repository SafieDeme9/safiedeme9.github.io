const date = new Date();

export default function Footer() {
    return(
        <>
        <footer className="flex flex-col md:flex-row gap-3 fixed items-center justify-around w-full py-4 text-sm bg-white">
            <p>Made with ❤️ by Safietou</p>
            <p>Copyright &copy; {date.getFullYear()}</p>
        </footer>
        </>
    )
}