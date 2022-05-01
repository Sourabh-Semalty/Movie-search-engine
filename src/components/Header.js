const Header = props => {
    return (
        <header className="p-3 text-white">
            <div className="container">
                <h2 className="text-center">{props.name}</h2>
            </div>
        </header>
    )
}

export default Header