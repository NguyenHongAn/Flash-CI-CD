import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import ImageUtils from "../../utils/ImageUtils";
import Localization from "../../config/Localization";
import { Instagram, Facebook, Twitter } from '@material-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  // Styles
  const classes = useStyles();

  return (
      <div className={classes.footer_global}>
          <AppBar
              position="static"
              color="default"
              elevation={0}
              className={classes.appBar}
          >
              <Toolbar className={classes.toolbar}>
                  <Grid container>
                      <Grid item md={1}></Grid>
                      <Grid container item md={12}>
                          <Grid item  md={2}>
                              <div className={classes.companyTitle}><b>Company</b></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>About us</a></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>Help Centre</a></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>Term & Codition</a></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>Term of service</a></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>Infomation Security</a></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>Adjustment of claims</a></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>Contact us</a></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>Partner</a></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>Merchant Registration</a></div>
                              <div className={classes.companyText}><a href="#" className={classes.link}>App for merchant</a></div>
                          </Grid>

                          <Grid item  md={2}>
                              <div className={classes.companyTitle}><b>Now App</b></div>
                              <div className={classes.spanLink}>
                                  <FontAwesomeIcon icon={["fab", "apple"]} className={classes.spanIcon} size="2x"/>
                                  <div style={{marginTop: "10px", marginLeft: "20px"}}>iOS</div>
                              </div>
                              <div className={classes.spanLink}>
                                  <FontAwesomeIcon icon={["fab", "android"]} className={classes.spanIcon}  size="2x"/>
                                  <div style={{marginTop: "10px", marginLeft: "20px"}}>Android</div>
                              </div>
                          </Grid>


                          <Grid item  md={4}>
                              <img className={classes.logo} src={ImageUtils.getLogoElip()}></img>
                              <div className={classes.corporation}>?? 2021 Now - A Foody Corporation</div>
                              <div className={classes.corporation}>
                                  <Facebook className={classes.socialIcon} />
                                  <Instagram className={classes.socialIcon} />
                                  <Twitter className={classes.socialIcon} />
                              </div>
                          </Grid>

                          <Grid item md={4}>
                              <div className={classes.companyAddressTitle}><b>Company Address</b></div>
                              <div className={classes.companyAddress}>C??ng Ty C??? Ph???n Foody<br />
                              L???u G, T??a nh?? Jabes 1,<br />
                              s??? 244 ???????ng C???ng Qu???nh, ph?????ng Ph???m Ng?? L??o, Qu???n 1, TPHCM<br />
                              Gi???y CN ??KDN s???: 0311828036<br />
                              do S??? K??? ho???ch v?? ?????u t?? TP.HCM c???p ng??y 11/6/2012,<br />
                              s???a ?????i l???n th??? 23, ng??y 10/12/2020<br />
                              S??? ??i???n tho???i: 1900 2042<br />
                              </div>
                              <div className={classes.companyAddress}>Email: <a href="#" className={classes.link}>info@now.com.vn</a></div>
                              <img className={classes.seal} src={ImageUtils.getSeal()}></img>
                          </Grid>
                      </Grid>
                      <Grid item md={1}></Grid>
                  </Grid>
              </Toolbar>
          </AppBar>
      </div>
  );
};

export default Footer;