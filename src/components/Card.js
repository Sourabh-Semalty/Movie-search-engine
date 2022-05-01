import React from 'react'

const Card = props => {
    return (
        <div className="col-lg-4 col-md-3 mb-4">
            <img className="card-img-top" src={props.movie.Poster} alt="Card"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
                }} />
            <div className="card-body bg-white">
                <h5 className="card-title">{props.movie.Title}</h5>
                <p className="card-text">{props.movie.Type}</p>
                <p className="card-text">{props.movie.Year}</p>
            </div>
        </div>
    )
}

export default Card