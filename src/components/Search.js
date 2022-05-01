const Search = props => {
    return (
        <form onSubmit={props.onSubmitHandler} className="w-50 m-auto my-5">
            <div className="d-flex align-items-center">
                <input type="search" name="search" className="form-control form-control-dark shadow-none" placeholder="Search the Movie..." aria-label="Search" />
                <button type="submit" className="btn btn-sm btn-success mx-2 shadow-none" >Search</button>
            </div>
        </form>
    )
}

export default Search