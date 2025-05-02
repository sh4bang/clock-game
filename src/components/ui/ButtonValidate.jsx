const ButtonValidate = ({ onClick, children }) => {
    return (
        <button
            type="submit"
            className="border-cyan-700 bg-cyan-600 hover:bg-cyan-800 border-4 text-white font-bold py-2 px-4 m-2 rounded-full cursor-pointer"
            onClick={onClick}
            tabIndex="2"
        >
            {children}
        </button>
    );
}

export default ButtonValidate;