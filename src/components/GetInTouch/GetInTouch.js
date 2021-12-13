import { Grid } from "@material-ui/core";
import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <>
      <div className="getintouch">
        <h1>Get In Touch</h1>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <input type="text" placeholder="Name" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <input type="text" placeholder="Email" />
          </Grid>
          <Grid item sm={12} xs={12}>
            <input type="text" placeholder="Subject" />
          </Grid>
          <Grid item sm={12} xs={12}>
            <input type="text" placeholder="Your Message" className="message"/>
          </Grid>
        </Grid>
        <button>Send Message</button>
      </div>
    </>
  );
};

export default GetInTouch;
