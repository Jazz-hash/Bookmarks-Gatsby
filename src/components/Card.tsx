import React from "react"
import "./Card.css"
const Card = ({ title, url, id }) => {
  return (
    <div className="card">
      <h3>Title: {title}</h3>
      <br />
      <p dangerouslySetInnerHTML={{ __html: url }}></p>
    </div>
  )
}

export default Card
