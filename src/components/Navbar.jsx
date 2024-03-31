import { Search } from "./Search"

export const Navbar = () => {
    return (
        <nav className="shadow-md">
            <div
                className="max-w-screen-2xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <a href="/">
                    <img
                        className="h-10"
                        src="../../src/assets/logo.png"
                        alt="logo"
                    />
                </a>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    <Search />
                    <img
                        className="inline h-4 cursor-pointer"
                        src="../../src//assets/search.svg"
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar