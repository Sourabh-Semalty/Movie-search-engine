import React from 'react'
import Card from './Card'

const Movies = props => {
    return (
        <div className='container row m-auto'>
            {props.movies.map((item, index) => <Card key={index} movie={item} />)}
        </div>
    )
}

export default Movies