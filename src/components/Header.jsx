import Navigation from "./Navigation"

const Header = () => {
    return (
        <header className="p-5 flex justify-between items-center">
            <h1 className="text-2xl font-bold before:content-['\01F551\00a0']">Clock challenge</h1>
            <Navigation />
        </header>
    )
}

export default Header