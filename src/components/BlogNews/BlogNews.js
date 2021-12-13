import { Grid } from "@material-ui/core";
import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import BlogImg1 from '../../images/blog-1.jpg'
import BlogImg2 from '../../images/blog-2.jpg'
import BlogImg3 from '../../images/blog-3.jpg'

const BlogNews = () => {
  const blogData = [
    {
      img: BlogImg1,
      type: "News",
      date: "May 25, 2020",
      title: "Five things you only know if you’re at Chanel's Hamburg",
    },
    {
      img: BlogImg2,
      type: "Inspiration",
      date: "May 25, 2020",
      title: "Designers matched perfectly to you on Envato Studio",
    },
    {
      img: BlogImg3,
      type: "Lookbook",
      date: "May 25, 2020",
      title: "Calvin Klein Shoes Collection 2020, Activites Summer",
    },
  ];

  return (
    <>
      <div className="blog-news" style={{marginBottom: "50px" }}>
        <Grid container spacing={5}>
          {blogData.map((item, index) => {
            return (
              <Grid item sm={4} xs={12} key={index}>
                <BlogCard data={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default BlogNews;
