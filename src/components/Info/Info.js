import { Grid } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import React from "react";
import './Info.css';

const Info = () => {
  return (
    <>
      <div className="info">
        <h1>ConTact Info</h1>
        <Grid container spacing={3}>
          <Grid item sm={4} xs={12}>
            <div className="info-item">
              <div className="info-icon">
                <LocationOnIcon />
              </div>
              <h1>Our Address</h1>
              <p>00 CauGiay Street, VN</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className="info-item item2">
              <div className="info-content">
                <PhoneIphoneIcon />
                <p>012-345-6789</p>
              </div>
              <div className="info-content">
                <MailIcon />
                <p>info@example.com</p>
              </div>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className="info-item">
              <div className="info-icon">
                <QueryBuilderIcon />
              </div>
              <h1>Openning Hour</h1>
              <p>Monday - Friday. 9:00am - 5:00pm</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Info;
