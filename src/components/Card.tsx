import React from 'react'
import './Card.css'
const Card = ({ title, url, id }) => {
    return (
        <div className="card">
            <h3><i>#{id}</i></h3>
            <br />
            <h2>{title}</h2>
            <br />

            <h2>{url}</h2>
        </div>
    )
}

export default Card
