import Navigation from "./Navigation"

const Header = () => {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Clock challenge</h1>
            <Navigation />
        </header>
    )
}

export default Header