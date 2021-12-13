import React from 'react'
import './BlogCard.css'

const BlogCard = ({data}) => {
  return (
    <>
      <div className="blog-card">
        <div className="card-img">
          <img src={data.img} alt="img" />
        </div>
        <div className="card-content">
          <div className="card-des">
            <p className="card-type">{data.type}</p>
            <p className="card-time">{data.date}</p>
          </div>
          <h1>{data.title}</h1>
        </div>
      </div>
    </>
  )
}

export default BlogCard
